import { isEmpty } from "lodash";
export function page(state) {
  return state.page
}
export function posts(state) {
  return state.posts
}
export function post(state) {
  return state.post
}
export function form_data_post(state) {
  let data_form = new FormData();
  for (var key in state.post) {
    data_form.append(`post[${key}]`, state.post[key]);
  }
  return data_form;
}
export function empty_post(state){
  return isEmpty(state.post)
}