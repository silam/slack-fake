import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './components/Chat';
import styled from 'styled-components';
import Header from './components/Header';
import Login from './components/Login';
//import Container from 'react-bootstrap/Container'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header>
            
          </Header>
          <Main>
              <Sidebar>

              </Sidebar>
              
              <Switch>
                <Route path="/room">
                  <Chat>

                  </Chat>
                </Route>
                <Route path=''>
                    <Login>
                    </Login>        
                </Route>
              </Switch>

          </Main>

        </Container>
        
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`

  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 30px auto;


`

const Main = styled.div`
  background: blue;
  display: grid;
  grid-template-columns: 260px auto; 

`