import { useContext } from 'react';
import * as C from './App.styles';
import { Context } from './contexts/Context';
import MoonImg from './images/moon.png';
import SunImg from './images/sun.png';
import { MainRouter } from './routes/MainRouter';

function App() {
  const { state, dispatch } = useContext(Context);

  const handleThemeSwitch = () => {
    if(state.theme.status === 'dark') {
      dispatch({
        type: 'SWITCH_THEME',
        payload: {
          status: 'light',
          bgColor: '#ddd',
          boxShadow: '0 0 10px #333',
          color: '#333'
        }
      });
    } else {
      dispatch({
        type: 'SWITCH_THEME',
        payload: {
          status: 'dark',
          bgColor: '#333',
          boxShadow: '0 0 10px #ddd',
          color: '#fff'
        }
      });
    }
    
  }

  return (
    <C.Body themeOptions={state.theme}>
      <C.Container themeOptions={state.theme}>
        <C.Header>
          <C.Logo>DevCadastro</C.Logo>
          <C.Theme onClick={handleThemeSwitch}>
            <C.ThemeImg src={MoonImg} alt="" />
              <C.ThemeContainer>
                <C.ThemeCircle themeOptions={state.theme} />
                </C.ThemeContainer>
            <C.ThemeImg src={SunImg} alt="" />
          </C.Theme>
        </C.Header>

        <MainRouter />
      </C.Container>
    </C.Body>    
  );
}

export default App;
