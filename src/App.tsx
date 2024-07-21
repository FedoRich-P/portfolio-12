import './App.css';
import { Sitebar } from './layout/sitebar/Sitebar';
import { Icon } from './components/icon/Icon';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <MainSection>
        <Sitebar></Sitebar>
      </MainSection>
    </div>
  );
}

export default App;

const MainSection = styled.section`
  max-width: 1440px;
  display: flex;
`;
