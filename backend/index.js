const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

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
app.use(multer(storage).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
//lista las donaciones de postgres
app.use('/api/getDonation',require('./routes/donate.js'));
//agrega una donacion a postgres
app.use('/api/setDonation',require('./routes/donate.js'));

//statics files
app.use(express.static(path.join(__dirname,'public')));

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});