import { Component, OnInit, Input } from '@angular/core';
import { SelectionData } from '../../data/selection-data'

@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.scss']
})
export class SelectionCardComponent implements OnInit {
    @Input() name:string = "None";
    @Input() options:SelectionData[] = [];

    constructor() {

    }

    ngOnInit(): void {
    }

    //Idea for selected property for dynamic radio buttons: https://stackoverflow.com/questions/53025027/dynamic-list-of-radiobuttons-in-angular
    radioChecked(name:string, i:number){
        this.options.forEach( item => {
            if (item.name !== name) {
                item.selected = false;
            } else{
                item.selected = true;
            }
        });
    }

}
