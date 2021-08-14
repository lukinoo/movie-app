const Header = ({ setSearch }) => {
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }
    
    return (
        <header>
            <nav>
                <h2 className="logo">Movies</h2>
                <div className="search-sys">
                    <input onChange={searchHandler} type="text" className="search" placeholder="search" />
                </div>
            </nav>
        </header>
    )
}

export default Header;