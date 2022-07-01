export async function fetchMovies() {
    const data = await fetch('/movies')
    const movies = await data.json()
    return movies
}

export async function editMovie(id, rating) {
    const response = await fetch(`/movies/${id}`, 
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({rating})
        })
        const data = await response.json()

        return data
}