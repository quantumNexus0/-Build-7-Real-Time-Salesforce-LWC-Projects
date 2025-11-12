import { LightningElement, api } from 'lwc';

export default class AppendHtml extends LightningElement {

    _resut;
    loaded
    @api
    get resut(){
        return this._resut;
    }

    set resut(data){
        this._resut = data;
        if(this.loaded){
            this.attachHtml();
        }
    }
     renderedCallback(){
        if(this._resut && !this.loaded){
            this.attachHtml();
        }
    
     }
    attachHtml(){
        const container = this.template.querySelector('.htmlcontainer');
        if(container){
            container.innerHTML = this._resut;
            this.loaded = true;
        }
    }
}