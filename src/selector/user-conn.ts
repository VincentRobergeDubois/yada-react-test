export const getUserConn = (state: any) => {
  if (state.userConn.userConnList.data) {
    return state.userConn.userConnList.data[0];
  }
}
