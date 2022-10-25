import { Box } from 'components/Box/Box';
import { GlobalStyle } from '../../GlobalStyle';
import Counter from '../Counter/Counter';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box
        as='main'
        bg='white'>
        <Box
          as='div'
          bg={{ xs: '#ced2c5', sm: '#EEEEEE' }}
          fontSize={{ xs: 'xs', sm: 'm' }}
          textAlign='center'
          width='100%'
          p={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          m='50px auto'>
          <Counter />
        </Box>
      </Box>
    </>
  );
}

export { App };
