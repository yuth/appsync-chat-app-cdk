import { Context, util } from '@aws-appsync/utils';

export function request(context: Context) {
  return {
    version: '2017-02-28',
    operation: 'Query',
    index: 'messages-by-room-id',
    query: {
      expression: 'roomId = :roomId',
      expressionValues: {
        ':roomId': util.dynamodb.toDynamoDB(context.args.roomId),
      },
    },
    scanIndexForward: context.args?.sortDirection === 'DESC' ? false : true,
    nextToken: context.args.nextToken,
  };
}

export function response(context: Context) {
  return context.result;
}

