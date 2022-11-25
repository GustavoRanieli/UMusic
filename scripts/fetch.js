const acessToken = "BQCVA1kS4Df-PJyLV_AesjA_o8HeZzCx_j_M1PWUWOfYfn6fNsMozsPBzRw_GCqgCIwtcosooboqXRHmJP1g2DlsocpLtIAs0og-jxPnhUYfsgr3DNug8faNAfRgIyAe7GbQ46QxkjfGZf_NXO5440myn6dR1tJc_qScLGOuGvlxry266Fs66FYqn77VyKq5ttdH8Z09lJIt"
const host = "https://api.spotify.com/v1/me/playlists" //Link da requisição spotify
const fields = "?offset=4" //Parâmetro que filtra informação

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

