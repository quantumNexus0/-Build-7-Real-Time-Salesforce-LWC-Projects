import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    @api objectApiName
   @api  resumeUrl
    downloadResume(){
        window.open(this.resumeUrl,"_blank")
    }
}
// 'https://raw.githubusercontent.com/quantumNexus0/vipul-resume/0cbb5e87e9927cc61e0b75feac5c9204e77837c9/VipulYadavResume.pdf.pdf'