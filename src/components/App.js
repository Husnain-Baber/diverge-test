import '../App.css';
import Header from './Header';
import Search from './Search';
import VideoList from './VideoList';

function App() {
  return (
    <>
    <Header />
    <div className='content-wrapper d-flex'>
      <div className='left-panel bg-gray'>
        <Search />
        <ul>
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
        </ul>
      </div>
      <div className='main-content'>

      </div>
      <div className='right-panel bg-gray'>

      </div>
    </div>
    </>
  );
}

export default App;
