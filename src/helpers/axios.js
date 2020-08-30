import { url, user_key, logged_key, token_key } from "../env_files/var";
import axios from 'axios';

export default () => {
  return axios.create(
    {
      baseURL: url,
      headers: {
        Authorization: `Bearer ${find_token()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  );
};
function find_token() {
  if (localStorage.getItem("token")) {
    var user = JSON.parse(localStorage.getItem("token"))
    return user ? user.token.token : "-"
  }
}