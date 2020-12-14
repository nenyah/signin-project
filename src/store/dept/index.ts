import { Module } from "vuex";
import api from "@/api";
import { IDeptResponse, IUserDetail } from "@/common/interface";

interface State {
  users: IUserDetail[];
  dept: IDeptResponse[];
}

const init: Module<State, any> = {
  namespaced: true,
  state: {
    users: [] as IUserDetail[],
    dept: [] as IDeptResponse[]
  },
  mutations: {
    SET_USERS(state, o) {
      console.log("SET_USERS:::", o);
      state.users = o;
    },
    SET_DEPT(state, o) {
      console.log("SET_DEPT:::", o);
      state.dept = o;
    }
  },
  getters: {},
  actions: {
    async getDeptInfo({ state, commit }) {
      try {
        const deptRes = await api.dept.deptInfo();
        if (deptRes.length > 0) {
          commit("SET_DEPT", deptRes);
        }
      } catch (e) {
        console.error("获取部门信息出错", e);
      }
    },
    async getDeptUser({ state, commit }) {
      try {
        const deptUsers = await api.user.infoByDept();
        if (deptUsers.length < 1) {
          console.error("获取部门内用户信息出错");
          return;
        }
        commit("SET_USERS", deptUsers);
      } catch (e) {
        console.error("获取部门内用户信息出错", e);
      }
    }
    // async infoByUserIds(){}
  }
};
export default init;
