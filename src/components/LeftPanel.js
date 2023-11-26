
import Search from './Search';
import VideoList from './VideoList';

function LeftPanel() {
    return (
        <>
            <Search />
            <ul>
                <VideoList />
                <VideoList />
                <VideoList />
                <VideoList />
            </ul>
        </>
    )
}

export default LeftPanel