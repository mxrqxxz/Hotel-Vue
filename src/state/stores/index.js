import reservas from  './reservas';
import users from './users';
import { createStore } from 'vuex';

export const store = createStore({
    modules: {
        reservas,
        users
    }
});