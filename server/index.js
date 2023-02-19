let express = require('express');
let app = express();
let cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('trust proxy', 1); 

app.use(cors({
    credentials: true // enable set cookie
}));

app.get('/',function(req,res){
    res.send('welcome to javascript')

})

let port = 5000;
let api = require('./routes/api/index')
app.use('/api',api)

app.listen(port,()=> {
    console.log('server is start port 5000')
})
