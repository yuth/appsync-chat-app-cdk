// lib/graphql/resolvers/Mutation.createMessage.ts
import { util } from "@aws-appsync/utils";
function request(context) {
  var _a;
  const autoId = util.autoId();
  return {
    version: "2018-05-29",
    operation: "PutItem",
    key: {
      id: util.dynamodb.toDynamoDB(((_a = context.args.input) == null ? void 0 : _a.id) ?? autoId)
    },
    attributeValues: util.dynamodb.toMapValues({
      id: autoId,
      owner: context.identity.username,
      createdAt: util.time.nowISO8601(),
      updatedAt: util.time.nowISO8601(),
      ...context.args.input
    })
  };
}
function response(context) {
  return context.result;
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbGliL2dyYXBocWwvcmVzb2x2ZXJzL011dGF0aW9uLmNyZWF0ZU1lc3NhZ2UudHMiXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBa0IsWUFBWTtBQUV2QixTQUFTLFFBQVEsU0FBa0I7QUFGMUM7QUFHRSxRQUFNLFNBQVMsS0FBSyxPQUFPO0FBQzNCLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNILElBQUksS0FBSyxTQUFTLGFBQVcsYUFBUSxLQUFLLFVBQWIsbUJBQW9CLE9BQU0sTUFBTTtBQUFBLElBQy9EO0FBQUEsSUFDQSxpQkFBaUIsS0FBSyxTQUFTLFlBQVk7QUFBQSxNQUN6QyxJQUFJO0FBQUEsTUFDSixPQUFRLFFBQVEsU0FBaUI7QUFBQSxNQUNqQyxXQUFXLEtBQUssS0FBSyxXQUFXO0FBQUEsTUFDaEMsV0FBVyxLQUFLLEtBQUssV0FBVztBQUFBLE1BQ2hDLEdBQUcsUUFBUSxLQUFLO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVPLFNBQVMsU0FBUyxTQUFrQjtBQUN6QyxTQUFPLFFBQVE7QUFDakI7IiwKICAibmFtZXMiOiBbXQp9Cg==
