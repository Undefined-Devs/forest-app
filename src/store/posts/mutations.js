import { uniqBy, findIndex, remove } from "lodash";
export function setPage(state, page) {
  state.page = page;
}

export function setPost(state, post) {
  state.post = { ...post };
  state.post.articles = []
}
export function setPosts(state, data) {
  if (state.page === 1) {
    state.posts = data;
  } else {
    let posts = state.posts.concat(data);
    state.posts = uniqBy(posts, function (n) {
      return n.id;
    });
  }
  if (data.length != 0)
    state.page++
}
export function setUpdatePost(state, data) {
  var index = findIndex(state.posts, {
    id: data.id
  });
  if (index)
    state.posts.splice(index, 1, data);
}
export function removePost(state, item) {
  state.post = remove(state.post, function (n) {
    return n.id != item.id;
  });
}