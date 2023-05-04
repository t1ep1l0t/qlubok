import { createStore } from "vuex";

export default defineNuxtPlugin(nuxtApp => {
    const store = createStore({
        state () {
            return {
                lang: process.server ? '' : localStorage.lang || 'eng',
                mobil_menu: false,
            }
        },
        mutations: {
            set_language (state) {
                if(state.lang === 'eng') {
                    return state.lang = 'rus';
                } else {
                    state.lang = 'eng';
                }
                localStorage.lang = state.lang;
            },
            set_mobil_menu (state) {
                state.mobil_menu = !state.mobil_menu;
            }
        },
        actions: {

        }
    })

    nuxtApp.vueApp.use(store);

})