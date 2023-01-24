export function createPayloadAction (type) {
  const actionCreator = payload => ({ type, payload });
  actionCreator.TYPE = type;

  return actionCreator;
}
