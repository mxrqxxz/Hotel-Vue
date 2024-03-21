import { usuarios } from '../../users';

export default {
    namespaced: true,
    state() {
        return {
            logued: false
        }
    },
    mutations: {
        setLogued(state) {
            state.logued = true;
        }
    },
    actions: {
        login(context, payload) {
            const user = payload.user;
            const password = payload.password;
            if (usuarios.find(u => u.usuario === user && u.contraseña === password)){
                context.commit('setLogued');
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        }
    },
    getters: {
        logueado(state) {
            return state.logued;
        }
    }
};