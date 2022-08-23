import { useContext } from 'react';
import * as C from './App.styles';
import { Context } from './contexts/Context';
import { MainRouter } from './routes/MainRouter';
import { Button } from './components/Button';
import MoonImg from './images/moon.png';
import SunImg from './images/sun.png';
import ListImg from './images/list.svg';
import DocImg from './images/doc.svg';
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
          color: '#333',
          bgColorTransparent: 'rgba(255,255,255,0.65)'
        }
      });
    } else {
      dispatch({
        type: 'SWITCH_THEME',
        payload: {
          status: 'dark',
          bgColor: '#333',
          boxShadow: '0 0 10px #ddd',
          color: '#fff',
          bgColorTransparent: 'rgba(3,3,3,0.7)'
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
            <Link to="/"><Button content="Área de Cadastro" bgColorButton="#00ADB5" icon={DocImg} /></Link>
            <Link to="/users"><Button content="Lista de Usuários" bgColorButton="#00ADB5" icon={ListImg} /></Link>
          </C.Menu> 

        </C.Header>

        <C.Line />

        <MainRouter />

        <C.Line />

        <C.Footer>
          © Copyright - 
          <C.Link href="https://github.com/ladsonmario" target="_blank"> Ladson</C.Link>
        </C.Footer>
      </C.Container>
    </C.Body>    
  );
}

export default App;
