const {Router} = require('express');
const router = Router();
//inportar las funciones del archivo controllerDonate.js
const { getDonation,addDonation } = require('../controller/controllerDonate.js');

//rutas
router.get('/',getDonation );
router.post('/',addDonation);
module.exports = router;