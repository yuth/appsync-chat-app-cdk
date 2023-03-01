// lib/graphql/resolvers/Query.listMessagesForRoom.ts
import { util } from "@aws-appsync/utils";
function request(context) {
  var _a;
  return {
    version: "2017-02-28",
    operation: "Query",
    index: "messages-by-room-id",
    query: {
      expression: "roomId = :roomId",
      expressionValues: {
        ":roomId": util.dynamodb.toDynamoDB(context.args.roomId)
      }
    },
    scanIndexForward: ((_a = context.args) == null ? void 0 : _a.sortDirection) === "DESC" ? false : true,
    nextToken: context.args.nextToken
  };
}
function response(context) {
  return context.result;
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbGliL2dyYXBocWwvcmVzb2x2ZXJzL1F1ZXJ5Lmxpc3RNZXNzYWdlc0ZvclJvb20udHMiXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBa0IsWUFBWTtBQUV2QixTQUFTLFFBQVEsU0FBa0I7QUFGMUM7QUFHRSxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixrQkFBa0I7QUFBQSxRQUNoQixXQUFXLEtBQUssU0FBUyxXQUFXLFFBQVEsS0FBSyxNQUFNO0FBQUEsTUFDekQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxvQkFBa0IsYUFBUSxTQUFSLG1CQUFjLG1CQUFrQixTQUFTLFFBQVE7QUFBQSxJQUNuRSxXQUFXLFFBQVEsS0FBSztBQUFBLEVBQzFCO0FBQ0Y7QUFFTyxTQUFTLFNBQVMsU0FBa0I7QUFDekMsU0FBTyxRQUFRO0FBQ2pCOyIsCiAgIm5hbWVzIjogW10KfQo=
