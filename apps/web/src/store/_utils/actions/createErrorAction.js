export function createErrorAction (type) {
  const actionCreator = () => ({ type });
  actionCreator.TYPE = type;

  return actionCreator;
}
