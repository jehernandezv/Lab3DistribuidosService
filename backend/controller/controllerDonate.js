const pool = require('../database.js');

//metodo que consulta en postgres las donaciones
const getDonation = async (req,res)=>{
    const response = await pool.query('SELECT * FROM donation');
    res.status(200).json(response.rows);
}

//metodo que agrega las donaciones
const addDonation = async (req, res) => {
    const { email, value, url_image } = req.body;
    const response = await pool.query('INSERT INTO donation (email, value, url_image) VALUES ($1,$2,$3)',[email, value, url_image]);
    console.log(response);
    res.json({
        message: 'Donacion creada exitosamente',
        body: {
            donation:{email,value,url_image}
        }
    });
}

//metodo trae donacion por id
const getDonationByID = async (req, res) =>{
    res.send('Donation ID');
};

module.exports = {
    getDonation,
    addDonation,
    getDonationByID
}