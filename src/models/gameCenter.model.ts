export class GameCenter{
    uuid: String;
    name: String;
    zones:  Array<object>;

    constructor({uuid, name, zones}:{uuid: String, name: String, zones: Array<object>}){
        this.uuid = uuid
        this.name = name
        this.zones = zones 
    }

    static serialize({
        uuid,
        name,
        zones
    } :{
        uuid: String, name: String, zones: Array<object>
    }){
        return new GameCenter({
            uuid, name, zones
        })
    }
}