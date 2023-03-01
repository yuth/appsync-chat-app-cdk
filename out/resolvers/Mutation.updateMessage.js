// lib/graphql/resolvers/Mutation.updateMessage.ts
import { util } from "@aws-appsync/utils";
function request(context) {
  return {
    version: "2018-05-29",
    operation: "UpdateItem",
    key: { id: util.dynamodb.toDynamoDB(context.args.input.id) },
    update: {
      expression: "SET #updatedAt = :updatedAt, #content = :content",
      expressionNames: {
        "#updatedAt": "updatedAt",
        "#content": "content"
      },
      expressionValues: {
        ":updatedAt": util.dynamodb.toDynamoDB(util.time.nowISO8601()),
        ":content": util.dynamodb.toDynamoDB(context.args.input.content)
      }
    }
  };
}
function response(context) {
  return context.result;
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbGliL2dyYXBocWwvcmVzb2x2ZXJzL011dGF0aW9uLnVwZGF0ZU1lc3NhZ2UudHMiXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBa0IsWUFBWTtBQUV2QixTQUFTLFFBQVEsU0FBa0I7QUFDeEMsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLElBQ1gsS0FBSyxFQUFFLElBQUksS0FBSyxTQUFTLFdBQVcsUUFBUSxLQUFLLE1BQU0sRUFBRSxFQUFFO0FBQUEsSUFDM0QsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osaUJBQWlCO0FBQUEsUUFDZixjQUFjO0FBQUEsUUFDZCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0Esa0JBQWtCO0FBQUEsUUFDaEIsY0FBYyxLQUFLLFNBQVMsV0FBVyxLQUFLLEtBQUssV0FBVyxDQUFDO0FBQUEsUUFDN0QsWUFBWSxLQUFLLFNBQVMsV0FBVyxRQUFRLEtBQUssTUFBTSxPQUFPO0FBQUEsTUFDakU7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sU0FBUyxTQUFTLFNBQWtCO0FBQ3pDLFNBQU8sUUFBUTtBQUNqQjsiLAogICJuYW1lcyI6IFtdCn0K
