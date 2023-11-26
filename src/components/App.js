import '../App.css';
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

      </div>
      <div className='right-panel bg-gray'>
        <RightPanel />
      </div>
    </div>
    </>
  );
}

export default App;
