require ('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const port = process.argv[2];

//inicializaciones
const app = express();

 //settings
 app.set('port',port||3000);

 //middleware
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req,file,cb){
        cb(null,path.parse(file.originalname).name + path.extname(file.originalname));
    }   
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//statics files
app.use(express.static(path.join(__dirname,'public')));

//Routes
//Recibir la imagen
app.post('/addImage',async (req, res) => {
    const { email, value,image } = await req.body;
    await res.json({
        message:req.headers.host+'/uploads/'+req.file.originalname
    });
});

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});