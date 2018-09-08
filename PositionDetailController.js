({
    /*
     * This method I created just to check if standard event 
     * e.force:navigateToSObject is supported or not
     * if supported, show 'Full Details' button on UI
     * */
	doInit : function(component, event, helper) {
		var navEvt = $A.get("e.force:navigateToSObject");
        if(navEvt){
            component.set("v.showCardAction", true);
        } 
	},
    
	onFullDetails : function(component, event, helper) {
		var navEvt = $A.get("e.force:navigateToSObject");
        if(navEvt){
            navEvt.setParams({
              "recordId": component.get("v.position").Id,
              "slideDevName": "detail"
            });
            navEvt.fire();
        } else{
            console.log("'e.force:navigateToSObject' event is not supported in this context");
            helper.showToast(component, {
                "title": "Error",
                "type": "error",
                "message": "Event not supported"
            });
        }
	},
})
