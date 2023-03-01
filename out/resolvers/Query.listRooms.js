// lib/graphql/resolvers/Query.listRooms.ts
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbGliL2dyYXBocWwvcmVzb2x2ZXJzL1F1ZXJ5Lmxpc3RSb29tcy50cyJdLAogICJtYXBwaW5ncyI6ICI7QUFFTyxTQUFTLFFBQVEsU0FBa0I7QUFDeEMsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLElBQ1gsT0FBTyxRQUFRLEtBQUssU0FBUztBQUFBLElBQzdCLFdBQVcsUUFBUSxLQUFLLGFBQWE7QUFBQSxFQUN2QztBQUNGO0FBRU8sU0FBUyxTQUFTLFNBQWtCO0FBQ3pDLFNBQU8sUUFBUTtBQUNqQjsiLAogICJuYW1lcyI6IFtdCn0K
