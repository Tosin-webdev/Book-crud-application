let express = require('express')
let app = express()
const port = 3000

// A get request
app.get('/',(req, res) =>{
    res.render("index")
})

//  register view engine
app.set('view engine', 'ejs')

// view public folder(css)
app.use(express.static('public'))


app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`);
})

