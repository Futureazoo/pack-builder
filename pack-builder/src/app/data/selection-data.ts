export class SelectionData {

    name:string;
    render_path:string;
    description:string;
    database_location:string;
    selected:boolean;

    // constructor(name:string, render_path:string, description:string, database_location:string = "/") {
    //     this.name = name;
    //     this.render_path = render_path;
    //     this.description = description;
    //     this.database_location = database_location;
    // }

    constructor(obj:any) {
        this.name = obj.name;
        this.render_path = obj.render_path;
        this.description = obj.description;
        this.database_location = obj.database_location;
        this.selected = (obj.selected == "true" || obj.selected == true);
    }

}
