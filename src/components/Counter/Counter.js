import styled from 'styled-components';
import { SetCounter } from '../SetCounter/SetCounter';
import { useCounter } from '../../hooks/use-counter';

export const Counter = () => {
  const { incident, count, increment, decrement, set } = useCounter();

  return (
    <StyledWrapper>
      <main className='Counter'>
        <h1>Days Since I {incident}</h1>
        <p className='count'>{count}</p>
        <section className='controls'>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => set(0)}>Reset</button>
          <button onClick={() => decrement()}>Decrement</button>
        </section>
        <SetCounter />
      </main>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button,
  input[type='submit'] {
    background-color: ${(p) => p.theme.colors.primary};
    border: none;
    color: white;
    margin: 0 0.5em;
    padding: 1em;
    outline: none;
    &:hover {
      background-color: ${(p) => p.theme.colors.secondary};
    }
    &:active {
      background-color: ${(p) => p.theme.colors.tertiary};
    }
  }

  input {
    padding: 1em;
    &:not([type='submit']) {
      display: block;
      margin: 0.5em;
    }
  }

  form {
    padding: 0.5em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    label {
      text-align: center;
      display: block;
      margin-bottom: 0.5em;
    }
  }

  .Counter {
    font-weight: 700;
    margin: 2em auto;
    padding: 1em;
  }

  .count {
    font-size: 8em;
    text-align: center;
  }

  .controls {
    display: flex;
    justify-content: center;
  }
`;

export default Counter;
