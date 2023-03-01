// lib/graphql/resolvers/Query.listRoom.ts
function request(context) {
  return {
    version: "2018-05-29",
    operation: "Scan",
    limit: context.args.limit ?? 100,
    nextToken: context.args.nextToken ?? void 0
  };
}
function response(context) {
  return context.result;
}
export {
  request,
  response
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbGliL2dyYXBocWwvcmVzb2x2ZXJzL1F1ZXJ5Lmxpc3RSb29tLnRzIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVPLFNBQVMsUUFBUSxTQUFrQjtBQUN4QyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsSUFDWCxPQUFPLFFBQVEsS0FBSyxTQUFTO0FBQUEsSUFDN0IsV0FBVyxRQUFRLEtBQUssYUFBYTtBQUFBLEVBQ3ZDO0FBQ0Y7QUFFTyxTQUFTLFNBQVMsU0FBa0I7QUFDekMsU0FBTyxRQUFRO0FBQ2pCOyIsCiAgIm5hbWVzIjogW10KfQo=
