import { LightningElement } from 'lwc';

export default class NoteTakingApp extends LightningElement {


      // Visibility control
    showComponent = false;
    targetPath = '/s/note-taking-app';
  connectedCallback() {
        const currentPath = window.location.pathname;
        console.log('Current Path:', currentPath);

        // Show component only on the target page
        if (currentPath === this.targetPath) {
            this.showComponent = true;
        } else {
            this.showComponent = false;
        }
    }
}