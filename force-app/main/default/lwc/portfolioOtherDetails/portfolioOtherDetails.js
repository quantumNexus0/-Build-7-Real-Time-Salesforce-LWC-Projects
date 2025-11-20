import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord } from 'lightning/uiRecordApi';

export default class PortfolioOtherDetails extends LightningElement {
    @api recordId;

    superbadgesList = [];
    awardsList = [];
    languagesList = [];
    awardIcon =`${PortfolioAssets}/PortfolioAssets/trophy.png`;
    languageIcon =`${PortfolioAssets}/PortfolioAssets/language.png`;
    badgeIcon =`${PortfolioAssets}/PortfolioAssets/badge.png`;    
    @wire(getRecord, { 
        recordId: '$recordId',
        fields: ['Portfolio__c.Superbadges__c', 
            'Portfolio__c.Awards__c', 'Portfolio__c.Languages__c']
         })otherDetailHandler({ data, error }) {
        if (data) {
            console.log("certification will come here : " + JSON.stringify(data));
            this.formatData(data);
        }
    
        if (error) {
            console.log(error);
        }}
        formatData(data) {
            const{Superbadges__c, Awards__c, Languages__c}=data.fields
                        this.superbadgesList =  Superbadges__c?Superbadges__c.value.split(';').map(item => {
                            return `${item} `
                        }):[]
                        this.awardsList =  Awards__c?Awards__c.value.split(',').map(item => {
                            return `${item} `
                        }):[]
                        this.languagesList =  Languages__c?Languages__c.value.split(',').map(item => {
                            return `${item} `
                        }):[]

        }
        
}