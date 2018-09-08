({
	doInit : function(component, event, helper) {
        helper.searchPositions(component, helper);
    },
    
    onPositionSelect : function(component, event, helper) {
        // use event.getParam to get attribute value from event
        component.set("v.selectedPosition", event.getParam("position"));
    },
})
