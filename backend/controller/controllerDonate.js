const pool = require('../database.js');

//método que consulta en postgres las donaciones
const getDonation = async (req,res)=>{
    const response = await pool.query('SELECT * FROM donation');
    res.status(200).json(response.rows);
}

//método que agrega las donaciones
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

//método trae donación por id
const getDonationByID = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM donation WHERE id = $1',[id]);
    res.json(response.rows);
};

module.exports = {
    getDonation,
    addDonation,
    getDonationByID
}