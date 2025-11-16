import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c';

export default class PortfolioBanner extends LightningElement {

    // @api recordId = 'a01gL00000VIj4sQAD';
    // @api linkedinUrl = 'https://www.linkedin.com/in/vipul-kumar-887ba9195/';
    // @api githubUrl = 'https://github.com/quantumNexus0';
    // @api trailheadUrl = 'https://www.salesforce.com/trailblazer/xdjeip4d0l68vulxrr';
    // @api bloggerUrl = 'https://quantumnexus0.github.io/Showcase/';
    // @api instagramUrl = 'https://www.instagram.com/vipulyadav_02/';
    @api recordId; 
    @api linkedinUrl;
    @api trailheadUrl;
    @api githubUrl;
    @api youtuberUrl;
    @api bloggerUrl;
    @api instagramUrl;
    @api twitterUrl;
    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedinIcon = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    githubIcon = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    trailheadIcon = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    instagramIcon = `${PortfolioAssets}/PortfolioAssets/Social/instagram.svg`;
    bloggerIcon = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`;
    youtuberIcon = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`;
    twitterIcon = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`;
    @wire(getRecord, { recordId: '$recordId', fields: [FULLNAME, COMPANY_LOCATION, DESIGNATION, COMPANY_NAME] })
    portfolioData;
    // portfolioHandler({ error, data }) 
    // { // if (data) 
    // { // console.log('record Data:', JSON.stringify(data)); 
    //  }else if (error) {
    // console.error('Error fetching portfolio data:', error);
    // }
     // }
    get fullName() {
        return this.portfolioData?.data ? getFieldValue(this.portfolioData.data, FULLNAME) : '';
    }

    get companyLocation() {
        return this.portfolioData?.data ? getFieldValue(this.portfolioData.data, COMPANY_LOCATION) : '';
    }

    get designation() {
        return this.portfolioData?.data ? getFieldValue(this.portfolioData.data, DESIGNATION) : '';
    }

    get companyName() {
        return this.portfolioData?.data ? getFieldValue(this.portfolioData.data, COMPANY_NAME) : '';
    }
}
