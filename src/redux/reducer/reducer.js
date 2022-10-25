import { INCREMENT, DECREMENT, SET } from '../actions/actions';

export const initialState = {
  count: 705,
  incident: 'quit smoking cigs and drinking alcohol',
};

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }
  if (action.type === SET) {
    return { count: parseInt(action.payload, 10) };
  }

  return state;
};
