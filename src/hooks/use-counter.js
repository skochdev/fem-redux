import { useSelector } from 'react-redux';
import { useActions } from './use-actions';
import { increment, decrement, set } from '../redux/actions/actions';

export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const incident = useSelector((state) => state.incident);
  const actions = useActions({ increment, decrement, set });

  return { incident, count, ...actions };
};
