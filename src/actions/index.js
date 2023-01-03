//actionにはtypeだけじゃなくて、payloadを取ることもできる
//payloadはdispatchの引数から取ることが多い、actionの引数にも取れる
export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number
  }
}
export const decrement = (number) => {
  return {
    type: "DECREMENT",
    payload: number
  }
}
export const login = () => {
  return {
    type: "LOGIN"
  }
}
export const logout = () => {
  return {
    type: "LOGOUT"
  }
}