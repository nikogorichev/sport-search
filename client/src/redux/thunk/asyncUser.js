import { initUsersAC } from "../actionCreators/userAC"

export const getFetchUsers = () => {

  return (dispatch) => {
    fetch('/profile')
      .then(res => res.json())
      .then(data => dispatch(initUsersAC(data)))
      .catch(err => console.log(err.message))
  }
}
