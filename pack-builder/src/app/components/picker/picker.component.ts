import { Component, OnInit, Input } from '@angular/core';
import { SelectionData } from '../../data/selection-data'

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {
    @Input() options:SelectionData[] = [];

    selected_index:number = 1;
    selected_total:number = 1;
    name:string = "";
    render_path:string = "../../assets/renders/grass_block/default.png";

    constructor() { }

    ngOnInit(): void {
        this.update();
    }

    public update() {
        this.selected_total = this.options.length;
        for (var i = 0; i < this.options.length; ++i) {
            if (this.options[i].selected) {
                this.selected_index = i+1;
                this.render_path = this.options[i].render_path;
                this.name = this.options[i].name;
            }
        }
    }

}
