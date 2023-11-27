import '../App.css';
import Content from './Content';
import Header from './Header';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';


function App() {
  return (
    <>
    <Header />
    <div className='content-wrapper d-flex'>
      <div className='left-panel bg-gray'>
        <LeftPanel />
      </div>
      <div className='main-content'>
        <Content />
      </div>
      <div className='right-panel bg-gray'>
        <RightPanel />
      </div>
    </div>
    </>
  );
}

export default App;
