class DonationService{

    constructor(){
        this.URL = 'http://localhost:3000/api/Donation'
    }

    async getDonation(){
       const response = await fect(this.URL);
       const donations = await response.json();
       return donations;
    }

    async addDonation(donation){
        const response = await fetch(this.URL,{
            method: 'POST',
            body: donation
        });
        
        const data = await response.json();
        console.log(data);
    }
}

export default DonationService;