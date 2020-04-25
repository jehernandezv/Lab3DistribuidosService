import './styles/styles.css';
import DonationService from './services/DonationService'
document.getElementById('donation-form')
.addEventListener('submit',function(e) {
    const email = document.getElementById('Email').value;
    const value = document.getElementById('value').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image',image[0]);
    formData.append('email',email);
    formData.append('value',value);

    const donationService = new DonationService();
    donationService.addDonation(formData);
    
    e.preventDefault();
});