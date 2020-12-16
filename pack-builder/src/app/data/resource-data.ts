import { SelectionData } from './selection-data';

export class ResourceData {

    name:string;
    selections:SelectionData[];

    constructor( name:string, selections:SelectionData[]) {
        this.name = name;
        this.selections = selections;
    }
}
