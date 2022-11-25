const acessTokenProfile = "BQDX1ePzjjQJjwKcp7ck2XPtCpdoW_a173EbphP3jkqg7BzjKmnyBcogfp4muyI2VVr3OpQw4WGNVHfZNegxzgtXlXkwjUi7UdtWQKPc82WQjoQEfRuM6SPgYc_tPxjIKqYmzaSLQH-xmb-sf1eY1tc7Kx0RV-sYkpFPKUrZVQbovEAZ9Aux493liTRGthSSgK2X"
const hostProfile = "https://api.spotify.com/v1/users/"
const profiles = ['3a1t5str8pb79dsb5pbo458r2', '12144943964', 'qylviucklrqkpmikm45yqq6hb', 'l9ddymn1w3ruby38iahmzxyez', 'saitamaoppai', 'dentmint']

var spotify = {
    method: 'GET',
    headers: new Headers ({
        Accept: "application/json",
        Authorization: `Bearer ${acessTokenProfile}`,
        "Content-Type": "application/json; charset=UTF-8",
    })
};

profiles.forEach( id => {
    fetch( `${hostProfile}${id}`, spotify )
    .then((response) => response.json())
    // Criando os card no painel principal 
    .then((items) => { 
        const profile = items

        let container = document.querySelector('#GridProfiles')

            let card = document.createElement('div')
            let title = document.createElement('h2')
            let poster = document.createElement('img')


                title.innerHTML = profile.display_name
                poster.setAttribute('src', profile.images[0].url)


                card.appendChild(poster)
                card.appendChild(title)
                container.appendChild(card)

// Criando os cards dos profiles
}).catch( err => {
    console.log(`Erro: ${err}`)
    });
});




