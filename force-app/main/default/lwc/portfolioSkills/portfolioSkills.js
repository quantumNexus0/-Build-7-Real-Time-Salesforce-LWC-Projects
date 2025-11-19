import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import TECH_SKILLS_FIELDS from '@salesforce/schema/Portfolio__c.TechnicalSkills__c';
import SOFTWARE_FIELDS from '@salesforce/schema/Portfolio__c.SoftwareTools__c';
import METHODOLOGIES_FIELDS from '@salesforce/schema/Portfolio__c.SoftwareDevelopmentMethodologies__c';
import SOFT_SKILLS_FIELDS from '@salesforce/schema/Portfolio__c.SoftSkills__c';

export default class PortfolioSkills extends LightningElement {
    techSkills =[];
    softwareTools = [];
    methodologies = [];
    softSkills = [];
    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [
            TECH_SKILLS_FIELDS,
            SOFTWARE_FIELDS,
            METHODOLOGIES_FIELDS,
            SOFT_SKILLS_FIELDS
        ]
    })
    SkillHandler({ data, error }) {
        if (data) {
            // console.log("Skills Data: ", JSON.stringify(data));
            this.formatExperience(data);
        }
        if (error) {
            console.error("Error:", error);
        }
    }

    formatExperience(data) {
        const {SoftSkills__c, SoftwareDevelopmentMethodologies__c, SoftwareTools__c, TechnicalSkills__c  } = data.fields;
        this.techSkills = TechnicalSkills__c ? TechnicalSkills__c.value.split(',') : [];
        this.softwareTools = SoftwareTools__c ? SoftwareTools__c.value.split(',') : [];
        this.methodologies = SoftwareDevelopmentMethodologies__c ? SoftwareDevelopmentMethodologies__c.value.split(',') : [];
        this.softSkills = SoftSkills__c ? SoftSkills__c.value.split(',') : [];
        // console.log('Formatting Experience...', data);
    }
}
