import { LightningElement, api } from 'lwc';

export default class AppendHtml extends LightningElement {
     
   @api contant
   isLoaded = false;

   renderedCallback(){
        if(this.isLoaded){
            return false;
        }
        if(this.contant){
            this.isLoaded = true;
            const container = this.template.querySelector('.htmlcontainer');
       
            container.innerHTML = this.contant;
            
       
        }
     }
    }
     
    