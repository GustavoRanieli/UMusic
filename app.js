const PORT = 3030
const express = require('express')
const app = express()


app.set('views', './view')
app.set('view engine', 'ejs');
app.use('/scripts', express.static('scripts'))
app.use('/style', express.static('style'))
app.use('/assets', express.static('assets'))


app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log(`Serve aberto em ${PORT}`)
    }
})