import store from './store';
import { addUser, deleteUser } from './users.actions';

console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 76, name: 'Helen' }));
store.dispatch(addUser({ id: 55, name: 'Michael' }));
store.dispatch(addUser({ id: 1, name: 'Kate' }));
store.dispatch(deleteUser(1));
