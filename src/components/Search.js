import searchIcon from "../img/searchIcon.png";

function Search() {
    return (
        <div className="search-wrapper position-relative">
            <img src={searchIcon} alt="search" />
            <input type="search" placeholder="Search" className="form-control " />
        </div>
    )
}

export default Search