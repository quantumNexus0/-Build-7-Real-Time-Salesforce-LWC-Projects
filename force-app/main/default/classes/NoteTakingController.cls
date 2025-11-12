public without sharing class NoteTakingController {
   
        @AuraEnabled
    public static Boolean createNoteRecord(String title, String description){
        try{
            if(!String.isBlank(title)){
            My_Note__c noteRec = new My_Note__c(
                  Name = title,
                  Notes_Description__c = description
              );
              insert noteRec;
              return true;
            }
            return false;
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

   @AuraEnabled(cacheable=true)
   public static List<My_Note__c> getNotes(){
       return [SELECT Id, Name, Notes_Description__c, LastModifiedDate FROM My_Note__c ORDER BY LastModifiedDate DESC];
   } 


    @AuraEnabled    
    public static Boolean updateNoteRecord(String noteId, String title, String description)   {    
        try{   
            if(!String.isBlank(noteId) && !String.isBlank(title)){
            My_Note__c note = [SELECT Id, Name, Notes_Description__c, LastModifiedDate FROM My_Note__c WHERE Id = :noteId];    
            note.Name = title;    
            note.Notes_Description__c = description;    
            update note;    
            return true;    
            }
            return false;
        } catch(Exception e) {    
            throw new AuraHandledException(e.getMessage());    
        }    
    }

    @AuraEnabled
    public static Boolean deleteNoteRecord(String noteId)   {    
        try{   
            if(!String.isBlank(noteId)){
            My_Note__c note = [SELECT Id FROM My_Note__c WHERE Id = :noteId];    
            delete note;    
            return true;    
            }
            return false;
        } catch(Exception e) {    
            throw new AuraHandledException(e.getMessage());    
        }       
               
    }
}