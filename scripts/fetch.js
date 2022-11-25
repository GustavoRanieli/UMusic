const acessToken = "BQB8BXa0y9Fyijf4WrTocjQCWQQ84MCexrN5bmd2Q6OL5MRJsd3haVRo40SyRCI6BqnBax2vAN-_lTcwcwlEGAOTzu4gFra8baGdUXDut7NoZNzSy-7Qw19h4AM3gVrJfJQfGfltdPrs_H01nGsz32KC95b3ZBqUnpqwh9N3iOSiWQ6KlGmxwZGKvPD_he1fFiV-9fotJY2X"
const host = "https://api.spotify.com/v1/me/playlists"
const fields = "?offset=4"

var spotify = {
    method: 'GET',
    headers: new Headers ({
        Accept: "application/json",
        Authorization: `Bearer ${acessToken}`,
        "Content-Type": "application/json; charset=UTF-8",
    })
};

fetch( `${host}${fields}`, spotify )
.then((response) => response.json())
// Criando os card no painel principal 
.then((items) => { 
    let data = items.items
    let container = document.querySelector('#containerMusic')

    data.forEach((musica, indice) => {
        // console.log(musica)
        let card = document.createElement('div')
        let title = document.createElement('h2')
        let poster = document.createElement('img')
        let description = document.createElement('p')

            title.innerHTML = musica.name
            poster.setAttribute('src', musica.images[0].url)
            description.innerHTML = `${musica.tracks.total} Tracks`

            card.appendChild(poster)
            card.appendChild(title)
            card.appendChild(description)
            container.appendChild(card)
    });
// Criando os cards do Tracks
}).catch( err => {
    console.log(`Erro: ${err}`)
});

