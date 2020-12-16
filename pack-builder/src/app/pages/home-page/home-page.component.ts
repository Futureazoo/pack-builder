import { Component, OnInit } from '@angular/core';
import { SelectionData } from '../../data/selection-data';
import { ResourceData } from '../../data/resource-data';
import  *  as  resources  from  '../../resources.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    all_resources:ResourceData[] = [];

    constructor() { }

    ngOnInit(): void {
        for (var i = 0; i < resources.selections.length; ++i) {
            let resource_selections:SelectionData[] = [];
            for (var j = 0; j < resources.selections[i].options.length; ++j) {
                resource_selections.push(new SelectionData(resources.selections[i].options[j]));
            }
            let resource = new ResourceData(resources.selections[i].name, resource_selections);
            this.all_resources.push(resource);
        }
    }

    public downloadClick() {
        console.log("DOWNLOAD");
        console.log(this.all_resources);
    }
}
