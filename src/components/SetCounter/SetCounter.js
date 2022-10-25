import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { set } from '../../redux/actions/actions';

export const SetCounter = () => {
  const count = useSelector((state) => state.count);
  const [inputValue, setInputValue] = useState(count);
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(count);
  }, [count]);

  return (
    <section className='controls'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(inputValue));
          setInputValue(count);
        }}>
        <label htmlFor='set-to'>Set Count</label>
        <input
          id='set-to'
          type='number'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type='submit' />
      </form>
    </section>
  );
};
