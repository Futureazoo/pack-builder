import { Component, OnInit } from '@angular/core';
import { SelectionData } from '../../data/selection-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

    all_packs:Array<any> = [];

    constructor() { }

    ngOnInit(): void {
        this.updateList();
    }

    private updateList() {
        var archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;

        for (; key = keys[i]; i++) {
            archive.push( { time: new Date(key), data:this.jsonConverter(localStorage.getItem(key)) });
        }
        this.all_packs = archive;
        console.log("UPDATED");
        console.log(this.all_packs);
    }

    private jsonConverter( stringified:any ){
        let obj = JSON.parse(stringified);
        //console.log(obj);
        let all_resources = [];
        for (var i = 0; i < obj.length; ++i) {
          let resource_selections:SelectionData[] = [];
          for (var j = 0; j < obj[i].selections.length; ++j) {
              resource_selections.push(new SelectionData(obj[i].selections[j]));
          }
          let resource = new ResourceData(obj[i].name, resource_selections);
          all_resources.push(resource);
        }
        return all_resources;
    }
}
