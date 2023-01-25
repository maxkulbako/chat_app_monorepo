export function createPayloadActionWith(type, payloadCreator) {
  const actionCreator = (...args) => ({
    type,
    payload: payloadCreator(...args)
  });
  actionCreator.TYPE = type;

  return actionCreator;
}
