const {Router} = require('express');
const router = Router();
//importar las funciones del archivo controllerDonate.js
const { getDonation,addDonation, getDonationByID } = require('../controller/controllerDonate.js');

//rutas
router.get('/',getDonation );
router.get('/:id',getDonationByID);
router.post('/',addDonation);

module.exports = router;