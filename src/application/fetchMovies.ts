const fetchMovies = async () => {
    return fetch(
        'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json'
    ).then((res) => res.json())
}

export { fetchMovies }