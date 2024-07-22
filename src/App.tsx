import './App.css';
import { Sitebar } from './layout/sitebar/Sitebar';
import { Icon } from './components/icon/Icon';
import styled from 'styled-components';
import { Main } from './layout/main/Main';
import { Services } from './layout/sections/services/Services';

function App() {
  return (
    <div className="App">
      <MainSection>
        <Sitebar></Sitebar>
        <Main></Main>
      </MainSection>
      <Services></Services>
    </div>
  );
}

export default App;

const MainSection = styled.section`
  max-width: 1440px;
  display: flex;
`;
