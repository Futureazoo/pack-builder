import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {
    @Input() time:Date = new Date();
    @Input() selections:ResourceData[] = [];
    @Input() contentId:number = 0;

    packDetails:string = "None";

    constructor() { }

    ngOnInit(): void {
        let summary = ""
        for (var i = 0; i < this.selections.length; ++i) {
            var sumString = "";
            for (var j = 0; j < this.selections[i].selections.length; ++j) {
                if (this.selections[i].selections[j].selected && this.selections[i].selections[j].name != "Default") {
                    sumString = this.selections[i].name + " → " + this.selections[i].selections[j].name + "; ";
                }
            }
            summary += sumString;
        }
        if (summary != "") {
            this.packDetails = summary;
        }
    }

    public downloadAgainClick() {
        var zip = new JSZip();
        zip.file("pack.mcmeta", '{"pack": {"pack_format": 6,"description": "by Futureazoo"}}');
        var assets = zip.folder("assets");
        zip.file("README.txt", "Hi! As you can see, there are no assets here! Prof. Mark said I could use temp data if I couldn't figure out a database, so here we are. However, as a proof of concept, this folder also has a .json showing the textures the user chose - Ideally this would be sent to a server-side program that would remotely build the pack folder structure for the user to download. Thanks!");
        zip.file("selections.json", JSON.stringify(this.selections));
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            saveAs(content, "CustomPack.zip");
        });
    }
}
