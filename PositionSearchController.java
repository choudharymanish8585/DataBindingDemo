public class PositionSearchController {
    
    @AuraEnabled
    public static List<Job_Position__c> getPositions(){
        return [SELECT Id, Name, Candidate__c, Picture__c, Job_Description__c, Experience_Required__c 
                FROM Job_Position__c];
        
    }
}
