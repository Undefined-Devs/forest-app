import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import postModule from "./posts"
axios.defaults.baseURL = 'http://thisjesusmartinez.com:3001/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        "id": 1,
        "title": "Post de ejmplo",
        "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \\\"Letraset\\\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
        "movie_url": "https://sitevurokrazia.s3.amazonaws.com/b990135bq6l79xg9exquvdv3bx00?response-content-disposition=attachment%3B%20filename%3D%22video.mp4%22%3B%20filename%2A%3DUTF-8%27%27video.mp4&response-content-type=video%2Fmp4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3FWQSHSPBCXLT3HK%2F20200830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200830T064426Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5c30bbac457d6bac596b02f8fd14e696239c82eaaec741bae40406cd0f095463",
        "photo_url": "https://sitevurokrazia.s3.amazonaws.com/zevtmk40wo2ogpcebcud1vzbdjun?response-content-disposition=inline%3B%20filename%3D%22ERyd1wpXYAAD_m7.jpeg%22%3B%20filename%2A%3DUTF-8%27%27ERyd1wpXYAAD_m7.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3FWQSHSPBCXLT3HK%2F20200830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200830T064426Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=19013980241e014c25de37e0ee8b4469c172eef5e822ccf3d3bd245a06d70b4f"
      },
      {
        "id": 2,
        "title": "Post de ejmplo",
        "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \\\"Letraset\\\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
        "movie_url": null,
        "photo_url": null
      },
      {
        "id": 3,
        "title": "Post de ejmplo",
        "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \\\"Letraset\\\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
        "movie_url": null,
        "photo_url": null
      },
      {
        "id": 4,
        "title": "Post de ejmplo",
        "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \\\"Letraset\\\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
        "movie_url": null,
        "photo_url": null
      },
      {
        "id": 5,
        "title": "Post de ejmplo",
        "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \\\"Letraset\\\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
        "movie_url": null,
        "photo_url": null
      },
      {
        "id": 6,
        "title": "Post de ejmplo",
        "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \\\"Letraset\\\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
        "movie_url": null,
        "photo_url": null
      }
    ]
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    CLEAR_POSTS(state) {
      state.posts = null;
    }
  },
  actions: {
    async getPosts(context) {
      try {
        context.commit('CLEAR_POSTS');
        let response = await axios.get('/posts');
        context.commit('SET_POSTS', response.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  modules: {
    postModule
  },
});
