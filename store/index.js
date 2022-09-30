import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
        },
        mutations: {
            setPosts(state, posts){
                state.loadPosts = posts
            }
        }, 
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('')
                .then(res => {
                    const postsArray = [];
                    for (key in res.data) {
                        postsArray.push({ ...res.data[key], id: key });
                    }
                    vuexContext.commit('setPosts', postsArray);
                })
                .catch(e )
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
}