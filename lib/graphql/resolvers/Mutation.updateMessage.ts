import { Context, util } from '@aws-appsync/utils';

export function request(context: Context) {
  return {
    version: '2018-05-29',
    operation: 'UpdateItem',
    key: { id: util.dynamodb.toDynamoDB(context.args.input.id) },
    update: {
      expression: 'SET #updatedAt = :updatedAt, #content = :content',
      expressionNames: {
        '#updatedAt': 'updatedAt',
        '#content': 'content',
      },
      expressionValues: {
        ':updatedAt': util.dynamodb.toDynamoDB(util.time.nowISO8601()),
        ':content': util.dynamodb.toDynamoDB(context.args.input.content),
      },
    },
  };
}

export function response(context: Context) {
  return context.result;
}
