import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import * as path from 'path';
import {
  GraphqlApi,
  SchemaFile,
  AuthorizationType,
  FieldLogLevel,
  MappingTemplate,
  Code,
  FunctionRuntime,
  Resolver,
} from 'aws-cdk-lib/aws-appsync';

import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { IRole } from 'aws-cdk-lib/aws-iam';

interface APIStackProps extends StackProps {
  userpool: UserPool;
  roomTable: Table;
  userTable: Table;
  messageTable: Table;
  unauthenticatedRole: IRole;
}


const RESOLVER_PASSTHROUGH = `
    // The before step
    export function request(...args) {
      console.log(args);
      return {}
    }

    // The after step
    export function response(ctx) {
      return ctx.result
    }
  `;
export class APIStack extends Stack {
  constructor(scope: Construct, id: string, props: APIStackProps) {
    super(scope, id, props);

    const api = new GraphqlApi(this, 'ChatApp', {
      name: 'ChatApp',
      schema: SchemaFile.fromAsset(
        path.join(__dirname, 'graphql/schema.graphql')
      ),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: AuthorizationType.USER_POOL,
          userPoolConfig: {
            userPool: props.userpool,
          },
        },
      },
      logConfig: {
        fieldLogLevel: FieldLogLevel.ALL,
      },
      xrayEnabled: true,
    });

    const roomTableDataSource = api.addDynamoDbDataSource(
      'RoomTableDataSource',
      props.roomTable
    );
    const messageTableDataSource = api.addDynamoDbDataSource(
      'MessageTableDataSource',
      props.messageTable
    );

    const createRoomFn = roomTableDataSource.createFunction('createRoomFunction', {
      name: 'createRoomFunction',
      code: Code.fromAsset(
        path.join(__dirname, '../out/resolvers/Mutation.createRoom.js')
      ),
      runtime: FunctionRuntime.JS_1_0_0,
    });

    new Resolver(this, 'createRoomPipelineResolver', {
      api,
      typeName: 'Mutation',
      fieldName: 'createRoom',
      code: Code.fromInline(RESOLVER_PASSTHROUGH),
      runtime: FunctionRuntime.JS_1_0_0,
      pipelineConfig: [createRoomFn],
    });

    const listRoomFn = roomTableDataSource.createFunction('listRoomsFunction', {
      name: 'listRoomsFunction',
      code: Code.fromAsset(
        path.join(__dirname, '../out/resolvers/Query.listRooms.js')
      ),
      runtime: FunctionRuntime.JS_1_0_0,
    });

    new Resolver(this, 'ListRoomResolverPipeline', {
      api,
      typeName: 'Query',
      fieldName: 'listRooms',
      code: Code.fromInline(RESOLVER_PASSTHROUGH),
      runtime: FunctionRuntime.JS_1_0_0,
      pipelineConfig: [listRoomFn],
    });
    

    const createMessageFn = messageTableDataSource.createFunction(
      'createMessageFunction',
      {
        name: 'createMessageFunction',
        code: Code.fromAsset(
          path.join(__dirname, '../out/resolvers/Mutation.createMessage.js')
        ),
        runtime: FunctionRuntime.JS_1_0_0,
      }
    );

    new Resolver(this, 'createMessageResolverPipeline', {
      api,
      typeName: 'Mutation',
      fieldName: 'createMessage',
      code: Code.fromInline(RESOLVER_PASSTHROUGH),
      runtime: FunctionRuntime.JS_1_0_0,
      pipelineConfig: [createMessageFn],
    });
    
    const listMessagesForRoomFn = messageTableDataSource.createFunction(
      'listMessagesForRoomFn',
      {
        name: 'listMessagesForRoomFn',
        code: Code.fromAsset(
          path.join(__dirname, '../out/resolvers/Query.listMessagesForRoom.js')
        ),
        runtime: FunctionRuntime.JS_1_0_0,
      } 
    );

    new Resolver(this, 'listMessagesForRoomResolverPipeline', {
      api,
      typeName: 'Query',
      fieldName: 'listMessagesForRoom',
      code: Code.fromInline(RESOLVER_PASSTHROUGH),
      runtime: FunctionRuntime.JS_1_0_0,
      pipelineConfig: [listMessagesForRoomFn],
    });

    const updateMessageFn = messageTableDataSource.createFunction(
      'updateMessageFunction',
      {
        name: 'updateMessageFunction',
        code: Code.fromAsset(
          path.join(__dirname, '../out/resolvers/Mutation.updateMessage.js')
        ),
        runtime: FunctionRuntime.JS_1_0_0,
      }
    );

    new Resolver(this, 'updateMessageResolverPipeline', {
      api,
      typeName: 'Mutation',
      fieldName: 'updateMessage',
      code: Code.fromInline(RESOLVER_PASSTHROUGH),
      runtime: FunctionRuntime.JS_1_0_0,
      pipelineConfig: [updateMessageFn],
    });

    new CfnOutput(this, 'GraphQLAPIURL', {
      value: api.graphqlUrl,
    });

    new CfnOutput(this, 'GraphQLAPIID', {
      value: api.apiId,
    });
  }
}
