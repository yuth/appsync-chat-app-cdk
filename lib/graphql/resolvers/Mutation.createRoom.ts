import { Context, util } from '@aws-appsync/utils';

export function request(context: Context){
  const autoId = util.autoId();
  return {
    version: '2018-05-29',
    operation: 'PutItem',
    key: {
      id: util.dynamodb.toDynamoDB(context.args.input?.id ?? autoId),
    },
    attributeValues: util.dynamodb.toMapValues({
      id: autoId,
      owner: (context.identity as any).username,
      createdAt: util.time.nowISO8601(),
      updatedAt: util.time.nowISO8601(),
      ...context.args.input,
    }),
  };
}

export function response(context: Context) {
  return context.result;
}
