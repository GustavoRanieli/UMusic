const acessToken = "BQDackVrwIF0wDqM_UHaupnpUplpvYHI_rM8-62DDsfGaHyYt4b-5NqHIRP_-jNXfBmBSCmznilaajc5m06AzSz4mMQ4RWbyz7I4uSnWzjEiLfjjyqrSu_JmjrIFuauPPTNEVqAB7Cw469m5UOpOQknGSA1uuddwMyj5daP2mU5cFw4Y_h_sN2zWHDcqoWyypf82OkivWa--"
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

