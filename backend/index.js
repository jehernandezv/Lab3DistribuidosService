require ('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//inicializaciones
const app = express();

 //settings
 app.set('port',3000);

 //middleware
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req,file,cb){
        cb(null,new Date().getTime() + path.extname(file.originalname));
    }   
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//statics files
app.use(express.static(path.join(__dirname,'public')));

//Routes
//lista las donaciones de postgres
app.use('/api/Donation',require('./routes/donate.js'));

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});