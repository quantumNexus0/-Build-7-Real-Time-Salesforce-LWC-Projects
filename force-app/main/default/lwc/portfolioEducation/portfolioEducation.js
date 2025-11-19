import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const COLUMNS = [
    { label: 'Education', fieldName: 'Education' },
    { label: 'Institution Name', fieldName: 'InstitutionName' },
    { label: 'Passing Year', fieldName: 'PassingYear' },
    
];
export default class PortfolioEducation extends LightningElement {

    tableData = []
    colums = COLUMNS
    @api recordId

    @wire(getRelatedListRecords, {
        parentRecordId:"$recordId",
        relatedListId:'Educations__r',
        fields:['Education__c.InstitutionName__c','Education__c.Title__c','Education__c.PassingYear__c'],
        sortBy:['Education__c.PassingYear__c']
    })EducationHandler({data, error}){
        if(data){
            console.log("EducationHandler data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error("EducationHandler error", error)
        }
    }
    formatData(data) {
    this.tableData = data.records
        .map(item => {
            const fields = item.fields;

            return {
                Id: item.id,
                Education: fields.Title__c?.value || '',
                InstitutionName: fields.InstitutionName__c?.value || '',
                PassingYear: fields.PassingYear__c?.value || ''
            };
        })
        .reverse(); 

    console.log("Table Data:", JSON.stringify(this.tableData));
}

     
}