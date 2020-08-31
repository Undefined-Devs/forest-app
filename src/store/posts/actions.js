import api from "../../helpers/axios";

const url = "posts"

export async function createPost({ commit }, resource) {
  return api().post(url, resource);
}

export async function updatePost({ commit }, resource) {
  api().put(`${url}/${resource.id}`, resource.form)
    .then((result) => {
      commit('setPost', result.data)
      commit('setUpdatePost', result.data)
    }).catch((err) => {
      console.log(err);
    });
}

export async function getPost({ commit }, resource) {
  return api().get(`${url}/${resource.id}`);
}

export async function getPostss(commit, data) {
  let url_posts = url
  if (data && data.page) url_posts += `?page=${data.page}`;
  return api().get(url_posts);
}

export async function deletePost(commit, id) {
  return api().delete(`${url}/${id}`);
}