import './styles/styles.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded',async () => {
    const ui = new UI();
   await ui.renderDonations();
});

document.getElementById('donation-form')
.addEventListener('submit',async function(e) {
    const email = await document.getElementById('Email').value;
    const value = await document.getElementById('value').value;
    const image = await document.getElementById('image').files;

    const formData = new FormData();
    await formData.append('image',image[0]);
    await formData.append('email',email);
    await formData.append('value',value);

    //instancio UI y envio el formulario con los datos
    const ui = new UI();
    await ui.addDonationUI(formData);
    e.preventDefault();
});

var input = document.getElementById('value');
input.addEventListener('input',function(){
  if (this.value.length >= 27) 
     this.value = this.value.slice(0,27); 
})
