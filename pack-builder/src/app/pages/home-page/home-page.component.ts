import { Component, OnInit } from '@angular/core';
import { SelectionData } from '../../data/selection-data';
import { ResourceData } from '../../data/resource-data';
import  *  as  resources  from  '../../resources.json';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

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
        this.compileAndZip();
        localStorage.setItem(new Date().toString(), JSON.stringify(this.all_resources));
        //console.log(this.allStorage);
    }

    //JSZip code framework from JSZip example: https://stuk.github.io/jszip/documentation/examples.html
    private compileAndZip() {
        var zip = new JSZip();
        zip.file("pack.mcmeta", '{"pack": {"pack_format": 6,"description": "by Futureazoo"}}');
        var assets = zip.folder("assets");
        zip.file("README.txt", "Hi! As you can see, there are no assets here! Prof. Mark said I could use temp data if I couldn't figure out a database, so here we are. However, as a proof of concept, this folder also has a .json showing the textures the user chose - Ideally this would be sent to a server-side program that would remotely build the pack folder structure for the user to download. Thanks!");
        zip.file("selections.json", JSON.stringify(this.all_resources));
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            saveAs(content, "CustomPack.zip");
        });
    }
}
