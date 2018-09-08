({
    searchPositions : function(component, helper) {
        var action = component.get("c.getPositions");
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                if(response.length >0 ){
                    component.set("v.positions", response);
                }
            }
        });
        $A.enqueueAction(action);
    }
})
