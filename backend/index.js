const express = require('express');


//inicializaciones
const app = express();

 //settings
 app.set('port',3000);

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});