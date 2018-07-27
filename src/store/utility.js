export const updateState = (oldState, newValues) => {
  return { ...oldState, ...newValues };
};
