const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    console.log('Serving your main route page')
    res.render('index')
})

app.get('/spentPage', (req, res)=>{
    console.log('Serving your Spent page')
    res.render('spentPage')
})














app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Lets Go!`)
})