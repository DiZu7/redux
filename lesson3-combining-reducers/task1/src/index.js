import { decrement, increment, reset } from './counter.actions';
import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';

console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 76, name: 'Helen' }));
store.dispatch(addUser({ id: 55, name: 'Michael' }));
store.dispatch(addUser({ id: 1, name: 'Kate' }));
store.dispatch(deleteUser(1));
store.dispatch(updateUser(76, {name: 'Sarah'}))
