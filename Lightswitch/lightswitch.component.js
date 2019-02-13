"use strict";

const lightSwitch = {
    bindings: {
        onFlip: "&"
    },

    template: 
    `
    <button ng-click="$ctrl.onFlip()">Switch</button>
    
    `

}







angular.module("LightApp")
    .component("lightSwitch", lightSwitch);

// call the onflip method in the child 
// based on that method apply ng-class to your section element. 
// a component always has the creation of an object being declared that has two properties (at minimum): 

// controller, bindings, template = every component will have at least 1 of those three. More than likely at least 2. 