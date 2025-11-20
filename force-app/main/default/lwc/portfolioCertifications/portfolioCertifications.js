import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIELD from '@salesforce/schema/Portfolio__c.SalesforceCertification__c';
import OTHER_CERT_FIELD from '@salesforce/schema/Portfolio__c.OtherCertifications__c';
export default class PortfolioCertifications extends LightningElement {
  sfcertsList = [];
  otherCertsList = [];
  sfLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`;


    @api recordId;
        @wire(getRecord, { 
            recordId: '$recordId',
             fields: ['Portfolio__c.SalesforceCertification__c',
             'Portfolio__c.OtherCertifications__c',
             ] 
        
        })certsHandler({ data, error }) {
    if (data) {
        console.log("certification will come here : " + JSON.stringify(data));
        this.formatData(data);
        // this.sfCert = data.fields.SalesforceCertification__c.value;
        // this.otherCert = data.fields.OtherCertifications__c.value;
    }

    if (error) {
        console.log(error);
    }
}
 formatData(data) {
    const{SalesforceCertification__c, OtherCertifications__c}=data.fields;
   this.sfcertsList =  SalesforceCertification__c?SalesforceCertification__c.value.split(';').map(item => {
        return `${item}`
    }):[]
    this.otherCertsList =  OtherCertifications__c?OtherCertifications__c.value.split(',').map(item => {
              return `${item} `
          }):[] 
 }
        


}