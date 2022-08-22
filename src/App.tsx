import { useContext } from 'react';
import * as C from './App.styles';
import { Context } from './contexts/Context';
import { MainRouter } from './routes/MainRouter';
import { Button } from './components/Button';
import MoonImg from './images/moon.png';
import SunImg from './images/sun.png';
import ListImg from './images/list.svg';
import RegistrationImg from './images/registration.svg';
import { Link } from 'react-router-dom';

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
          <C.Logo>
            <C.LogoText>DevCadastro</C.LogoText>
            <C.Theme onClick={handleThemeSwitch}>
              <C.ThemeImg src={MoonImg} alt="" />
                <C.ThemeContainer>
                  <C.ThemeCircle themeOptions={state.theme} />
                </C.ThemeContainer>
              <C.ThemeImg src={SunImg} alt="" />
            </C.Theme>            
          </C.Logo>
          <C.Menu>
            <Link to="/"><Button content="Área de Cadastro" bgColorButton="#00ADB5" icon={RegistrationImg} /></Link>
            <Link to="/users"><Button content="Listar Usuários" bgColorButton="#00ADB5" icon={ListImg} /></Link>
          </C.Menu> 

        </C.Header>

        <C.Line />

        <MainRouter />

        <C.Line />
      </C.Container>
    </C.Body>    
  );
}

export default App;
