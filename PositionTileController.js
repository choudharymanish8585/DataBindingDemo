({
	onPositionClick : function(component, event, helper) {	
        var position = component.get("v.position");
        
        /*
         * Create PositionSelect event and pass required carId field
         * fire the event so that parent Positions component
         * can handle the event
         * */
        var evt = component.getEvent("onPositionSelect");
        evt.setParams({
            "position" : position
        });
        evt.fire();
    }, 

})
