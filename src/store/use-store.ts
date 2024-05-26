import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface User {
  id: number;
  lastName: string;
  firstName: string;
}

interface UserRootState {
  user: User | null;
}

export default new Vuex.Store<UserRootState>({
  state: {
    // 初期値をnullで設定
    user: null,
  },
  getters: {
    name: (state) => {
      return state.user?.lastName + " " + state.user?.firstName;
    },
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
