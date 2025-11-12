import { LightningElement, wire } from 'lwc';
import createNoteRecord from '@salesforce/apex/NoteTakingController.createNoteRecord';
import getNotes from '@salesforce/apex/NoteTakingController.getNotes';
import updateNoteRecord from '@salesforce/apex/NoteTakingController.updateNoteRecord';
import { refreshApex } from '@salesforce/apex';
import LightningConfirm from 'lightning/confirm';
import deleteNoteRecord from '@salesforce/apex/NoteTakingController.deleteNoteRecord';  
const DEFAULT_NOTE_FORM = {
    Name: '',
    Notes_Description__c: '',
};

export default class NoteTakingApp extends LightningElement {

    showComponent = false;
    targetPath = '/s/note-taking-app';

    connectedCallback() {
        const currentPath = window.location.pathname;
        console.log('Current Path:', currentPath);

        this.showComponent = (currentPath === this.targetPath);
    }

    showModal = false;
    noteRecord = DEFAULT_NOTE_FORM;
    notesList = [];
    selectedRecordId;
    wiredNoteResult;
    formats = [
        'font', 'size', 'bold', 'italic', 'underline', 'strike', 'list', 'indent',
        'align', 'link', 'image', 'clean', 'table', 'header', 'color'
    ];

    get isFormInvalid() {
        return !(this.noteRecord && this.noteRecord.Name && this.noteRecord.Notes_Description__c);
    }

    get ModalName() {
        return this.selectedRecordId ? 'Update Note' : 'Add New Note';
    }

    @wire(getNotes)
    notesListInfo(result) {
       this.wiredNoteResult = result;
        const { data, error } = result;
        if (data) {
            console.log('Notes fetched successfully:', JSON.stringify(data));
            this.notesList = data.map(item => {
                let formatedDate = new Date(item.LastModifiedDate).toDateString();
                return { ...item, formatedDate };
            });
        } else if (error) {
            console.error('Error fetching notes:', error);
            this.showToastMsg(error.body.message, 'error');
        }
    }

    createNoteHandler() {
        this.showModal = true;
    }

    closeModalHandler() {
        this.showModal = false;
        this.noteRecord = DEFAULT_NOTE_FORM;
        this.selectedRecordId = null;
    }

    changeHandler(event) {
        const { name, value } = event.target;
        this.noteRecord = { ...this.noteRecord, [name]: value };
    }

    formsubmitHandler(event) {
        event.preventDefault();
        console.log('Note Record to be saved:', JSON.stringify(this.noteRecord));
        if (this.selectedRecordId) {
            this.updateNote(this.selectedRecordId);
        } else {
            this.createNote();
        }
    }

    createNote() {
        createNoteRecord({
            title: this.noteRecord.Name,
            description: this.noteRecord.Notes_Description__c
        })
            .then(result => {
                if (result) {
                    this.showModal = false;
                    this.selectedRecordId = null;
                    this.showToastMsg('Note created successfully!', 'success');
                     this.refresh();
                    this.noteRecord = DEFAULT_NOTE_FORM;
                }
            })
            .catch(error => {
                this.showToastMsg(error.body.message, 'error');
                console.error('Error creating note:', error.body.message);
            });
    }

    showToastMsg(message, variant) {
        const elem = this.template.querySelector('c-notification');
        if (elem) {
            elem.showToast(message, variant);
        } else {
            console.warn('Notification component not found');
        }
    }

    editNoteHandler(event) {
        const { recordid } = event.target.dataset;
        const noteRecord = this.notesList.find(item => item.Id === recordid);
        this.noteRecord = {
            Name: noteRecord.Name,
            Notes_Description__c: noteRecord.Notes_Description__c,
        };
        this.selectedRecordId = recordid;
        this.showModal = true;
    }

    updateNote(noteId) {
        const { Name, Notes_Description__c } = this.noteRecord;
        updateNoteRecord({
            noteId: noteId,
            title: Name,
            description: Notes_Description__c
        })
            .then(() => {
                this.showModal = false;
                this.selectedRecordId = null;
                this.showToastMsg('Note updated successfully!', 'success');
                this.noteRecord = DEFAULT_NOTE_FORM;
                this.selectedRecordId = null;
                this.refresh();
            })
            .catch(error => {
                console.error('Error updating note:', error);
                this.showToastMsg(error.body.message, 'error');
            });
    }
    refresh() {
        return refreshApex(this.wiredNoteResult);
    }
    deleteNoteHandler(event) {
        this.selectedRecordId = event.target.dataset.recordid;
        this.handleConfirm(); 
    }
     async handleConfirm() {
       const result = await LightningConfirm.open({
            message: 'Are you sure you want to delete this note?',
            variant: 'headerless',  
            label: 'Delete Confirmation',
            confirmLabel: 'Delete',
            cancelLabel: 'Cancel',
        })
          if(result){
            this.deleteHandler();
          }else{
            this.selectedRecordId = null;
          }  
    }
      deleteHandler(){
         deleteNoteRecord({ noteId: this.selectedRecordId })
            .then(() => {
                this.showModal = false;
                this.showToastMsg('Note deleted successfully!', 'success');
                this.selectedRecordId = null;
                this.refresh();
            })
            .catch(error => {
                console.error('Error deleting note:', error);
                this.showToastMsg(error.body.message, 'error');
            });
      }  
    }

