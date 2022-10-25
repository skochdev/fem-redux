import styled from 'styled-components';

export const Counter = () => {
  const incident = 'Incident';
  const count = 0;

  return (
    <StyledWrapper>
      <main className='Counter'>
        <h1>Days Since Last {incident}</h1>
        <p className='count'>{count}</p>
        <section className='controls'>
          <button>Increment</button>
          <button>Reset</button>
          <button>Decrement</button>
        </section>
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
