'use strict';

angular.module('yoBootstrapApp').service('data', function(mentors) {
    var buildings = [];

    var existing = false;

    for(var i = 0; i < mentors.length; i++){
        for(var j = 0; j < buildings.length; j++){
            if(buildings[j] === mentors[i].building){
                existing = true;
                break;
            }
        }
        if(!existing){
            buildings.push(mentors[i].building);
        }
        existing = false;
    }

    this.getBuildings = function(){
        return buildings;
    }
});