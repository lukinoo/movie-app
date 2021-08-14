const Movies = ({ poster_path,title,overview,vote_average }) => {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return (
        <div className="movie-item">
            <div className="movie-image-side">
                <img className="movie-image" src={IMG_API + poster_path} alt="" />
            </div>
            <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p className="raiting">{vote_average}</p>
            </div>
            <div className="overview">
                <span className="tag">Overview:</span>
                <p className="overview-text">{overview}</p>
            </div>
        </div>
    )
}

export default Movies;