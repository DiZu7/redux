import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';
import store from './store';

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('es'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 55, name: 'apple' }));
store.dispatch(removeProduct(76));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());
store.dispatch(setUser({ name: 'Jane' }));
