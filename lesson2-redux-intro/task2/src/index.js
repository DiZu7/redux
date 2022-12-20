import './index.scss';
import store, { increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
};
incrementBtn.addEventListener('click', onIncrement);

const onDecrement = () => {
  store.dispatch(decrement());
};
decrementBtn.addEventListener('click', onDecrement);

const onReset = () => {
  store.dispatch(reset());
};
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => acc + value, 0);
  const historyString = state.history.map(elem => (elem === 1 ? '+1' : -1)).join('');
  resultElem.textContent = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});
