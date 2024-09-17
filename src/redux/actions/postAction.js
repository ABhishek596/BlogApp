export const addPost = post => ({
  type: 'ADD_POST',
  payload: post,
});

export const deleteItem = id => {
  return {
    type: 'DELETE_ITEM',
    payload: id,
  };
};
