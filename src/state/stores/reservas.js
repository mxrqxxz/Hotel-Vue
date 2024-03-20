import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            url: 'https://backend-vue-fce7d-default-rtdb.europe-west1.firebasedatabase.app/bbdd.json',
            reservas: []
        }
    },
    mutations: {
        sendData(state, payload) {
            fetch(state.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    usuario: payload.userName,
                    valoracion: payload.rating
                })
            });
        },

        getData(state) {
            fetch(state.url).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log("Fallo en la respuesta del servidor");
                }
            }).then((data) => {
                const resultados = [];
                for (const id in data) {
                    resultados.push({
                        id: id,
                        name: data[id].usuario,
                        rating: data[id].valoracion
                    });
                }
                state.reservas = resultados;
            });
        }
    },
    actions: {
        sendData({commit, state}, payload) {
            commit('sendData', payload);
        }
    },
    getters: {
        reservas(state) {
            return state.reservas;
        }
    }
});