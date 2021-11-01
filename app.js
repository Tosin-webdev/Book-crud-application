let express = require('express')
let app = express()
const port = 3000

// A get request
app.get('/',(req, res) =>{
    res.render("index")
})


app.get('/add-user', (req, res)=>{
    res.render("add-user")
})

app.get('/update-user', (req, res)=>{
    res.render("update-user")
})

//  register view engine
app.set('view engine', 'ejs')

// view public folder(css)
app.use(express.static('public'))


app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`);
})

