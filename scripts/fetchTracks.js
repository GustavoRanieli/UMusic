const acessTokenTrack = "BQD2czsmESGvRgBDSe1JST_B-5aemKshsaWrdGwNJBp7pIRP66UbXZggS9cDcSYSH1Ww4UVREPbMmlwsIQdC7I_m3DrQ0lCvF87fjFLcY6dGLUFgJHwwtDlDfDhXH0ISckJ39u-fxIOaOknJqCj_kfcYUGtBx4q9aX80urUk9V5QP2OtFa58rpnuUqNKKYbY1MZ36iEyhmtI"
const hostTrack = "https://api.spotify.com/v1/playlists/"
const fieldsTrack = "?fields=tracks.items(track(name%2Chref%2Calbum(!name%2Chref%2Cavailable_markets)))"

var spotify = {
    method: 'GET',
    headers: new Headers ({
        Accept: "application/json",
        Authorization: `Bearer ${acessTokenTrack}`,
        "Content-Type": "application/json; charset=UTF-8",
    })
};

fetch( `${hostTrack}1KEsaggcC6EfxENbEwChKq${fieldsTrack}`, spotify )
.then((response) => response.json())
// Criando os card Track
.then((items) => { 
    let track = items.tracks.items;
    let containerTrack = document.querySelector('#Tracks');

    track.forEach((musica, indice) => {

        let cardTrack = document.createElement('div')
        let titleTrack = document.createElement('h2');
        let posterTrack = document.createElement('img');
        let artistTrack = document.createElement('p');

            titleTrack.innerHTML = musica.track.name;
            posterTrack.setAttribute('src', musica.track.album.images[0].url);
            artistTrack.innerHTML = `Artist: ${musica.track.album.artists[0].name}`;

            cardTrack.appendChild(posterTrack);
            cardTrack.appendChild(titleTrack);
            cardTrack.appendChild(artistTrack);
            containerTrack.appendChild(cardTrack);
    });
 }).catch(err => {
     console.log(`Erro: ${err}`);
})