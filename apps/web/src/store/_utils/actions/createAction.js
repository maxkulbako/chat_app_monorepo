export function createAction (type) {
  const actionCreator = () => ({ type });
  actionCreator.TYPE = type;

  return actionCreator;
}
