import { Context } from '@aws-appsync/utils';

export function request(context: Context) {
  return {
    version: '2018-05-29',
    operation: 'Scan',
    limit: context.args.limit ?? 100,
    nextToken: context.args.nextToken ?? undefined,
  }
}

export function response(context: Context) {
  return context.result;
}