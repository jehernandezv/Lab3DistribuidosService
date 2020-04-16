const {Router} = require('express');
const router = Router();
const pool = require('../database.js');

//rutas
router.get('/', async (req,res)=>{
    const response = await pool.query('SELECT * FROM donation');
    res.status(200).json(response.rows);
});

module.exports = router;