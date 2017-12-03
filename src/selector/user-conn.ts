export const getUserConn = (state: any) => {
  if (state.userConn.userConn.data) {
    return state.userConn.userConn.data[0];
  }
};
