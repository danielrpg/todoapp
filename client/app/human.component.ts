import { Component } from '@angular/core';

@Component({
    selector : 'human',
    moduleId : module.id,
    templateUrl : '../views/human.component.html'
})

export class HumanComponent {
    name : string;
    constructor(){
        this.name = "Create a human with angular 2";
    }
}