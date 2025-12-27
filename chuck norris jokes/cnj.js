const loadJokes = async() => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
        headers: {
            'Accept': 'Application/json'
        }
    })
    const json = await response.json();
    document.getElementById('loadingJokes').innerHTML = json.value;
}

document.getElementById('loadJokeBtn').addEventListener('click', loadJokes);