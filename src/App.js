import logo from './logo.svg';
import './App.css';
import { useColorMode } from 'theme-ui';

function App() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <h1>Hello World</h1>
        <a
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            fontWeight: 'bold',
            fontSize: 4, // picks up value from `theme.fontSizes[4]`
            color: 'primary' // picks up value from `theme.colors.primary`
          }}
        >
          Learn React
        </a>
        <button
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
          sx={{ bg: 'primary', color: 'inverseText' }}
        >
          Toggle {colorMode  === 'light' ? 'Dark🌚' : 'Light🌕'}
        </button>
      </header>
    </div>
  );
}

export default App;
