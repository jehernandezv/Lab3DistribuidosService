import DonationService from './services/DonationService';
const donationService = new DonationService();

import {format} from 'timeago.js';

class UI{

    async renderDonations(){
        const donations = await donationService.getDonation();
        const donationCardContainer = document.getElementById('donation-cards');
        donationCardContainer.innerHTML = '';
         donations.forEach (donation => {
           const div = document.createElement('div');
           div.className ='';
           div.innerHTML=`<div class="card m-2">
           <div class="row">
               <div class="col-md-4">
                   <img src="http://localhost:3000/${donation.url_image}" alt="" class="img-fluid"/>
               </div>
               <div class="col-md-8">
                   <div class="card-block px-2">
                        <h4>E-mail: ${donation.email}</h4>
                        <p class="card-text">Valor: ${new Intl.NumberFormat("de-DE").format(donation.value)}</p>
                   </div>
               </div>
           </div>
           <div class="card-footer">
           ${format(donation.created_at)}
           </div>
    </div>`;
            donationCardContainer.appendChild(div);
        });
    }

    async addDonationUI(donation){
        await donationService.addDonation(donation);
        this.clearDonationForm();
    }

    clearDonationForm(){
        document.getElementById('donation-form').reset();
    }

    renderMessage(){

    }
}

export default UI;