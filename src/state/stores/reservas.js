export default {
    namespaced: true,
    state() {
        return {
            url: 'https://backend-vue-fce7d-default-rtdb.europe-west1.firebasedatabase.app/bbdd.json',
            reservas: []
        }
    },
    mutations: {
        getData(state, payload) {
            state.reservas = payload;
        }
    },
    actions: {
        sendData(context, payload) {
            fetch(context.state.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    nombre: payload.nombre,
                    apellido: payload.apellido,
                    email: payload.email,
                    telefono: payload.telefono,
                    fecha: payload.fecha,
                    hora: payload.hora,
                    personas: payload.personas,
                    comentario: payload.comentarios,
                    servicio: payload.servicio,
                    parking: payload.parking
                })
            });
        },

        getData(context) {
            fetch(context.state.url).then((response) => {
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
                        nombre: data[id].nombre,
                        apellido: data[id].apellido,
                        email: data[id].email,
                        telefono: data[id].telefono,
                        fecha: data[id].fecha,
                        hora: data[id].hora,
                        personas: data[id].personas,
                        comentario: data[id].comentario,
                        servicio: data[id].servicio,
                        parking: data[id].parking
                    });
                }
                context.commit('getData', resultados);
            }).then(console.log(context.state.reservas));
        }
    },
    getters: {
        reservas(state) {
            return state.reservas;
        }
    }
};