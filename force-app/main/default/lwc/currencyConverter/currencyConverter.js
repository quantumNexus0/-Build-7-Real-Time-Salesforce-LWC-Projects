import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';

export default class CurrencyConverter extends LightningElement {
    currencyList = countryCodeList;
    currencyImage = currencyConverterAssets + '/currencyConverterAssets/currency.svg';
    countryFrom = 'USD';
    countryTo = 'AUD';
    amount = '';
    result;
    error;

    handleChange(event) {
        const { name, value } = event.target;

        if (name === 'countryFrom') {
            this.countryFrom = value;
        } else if (name === 'countryTo') {
            this.countryTo = value;
        } else if (name === 'amount') {
            this.amount = value;
        }

        console.log(`Selected ${name}: ${value}`);
    }

    submitHandler(event) {
        event.preventDefault();
        this.convert();
    }

     async convert(){
    // const API_URL = `https://api.exchangerate.host/convert?access_key=${AUTH_KEY}&from=${this.countryFrom}&to=${this.countryTo}`
    const API_KEY = '568984fdd2a74496b9e9f31c'
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`
    try{
      const data = await fetch(API_URL)
      const jsonData = await data.json()
      debugger;
      // this.result = (Number(this.amount) * jsonData.result).toFixed(2)
      this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
      console.log(this.result)
    } catch(error){
      console.log(error)
      this.error="An error occurred. Please try again..."
    }
  }
}