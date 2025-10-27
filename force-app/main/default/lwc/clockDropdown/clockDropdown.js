import { api, LightningElement } from 'lwc';

export default class ClockDropdown extends LightningElement {
    @api label = '';
    @api options = [];
    @api uniqueID = '';

    changeHandler(event) {
        this.callParent(event.target.value);
    }
    callParent(value) {
        this.dispatchEvent(new CustomEvent('optionselect', {
            detail: {
                label: this.label,
                value: value
            }
        }));
    }
@api
  reset() {
    this.selectedValue = '';
    const dropdown = this.template.querySelector('select');
    if (dropdown) dropdown.value = '';
  }
}