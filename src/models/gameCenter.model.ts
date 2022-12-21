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
            uuid, name, zones: Zone.serializeList(zones)
        })
    }
}

export class PC{
    mapX: Number;
    mapY: Number;
    number: Number;
    isBusy: Boolean;
    uuid: String;

    constructor({mapX, mapY, number, isBusy, uuid}:{mapX: Number, mapY: Number, number: Number, isBusy: Boolean, uuid: String}){
        this.mapX = mapX
        this.mapY = mapY
        this.number = number
        this.isBusy = isBusy
        this.uuid = uuid
    }

    static serialize({
        map_x: mapX, map_y: mapY, number, is_busy: isBusy, uuid
    }:{map_x: Number, map_y: Number, number: Number, is_busy: Boolean, uuid: String}){
        return new PC({mapX, mapY, number, isBusy, uuid})
    }

    static serializeList(computers: any){
        return computers.map(PC.serialize) || []
    }
}

export class Zone{
    uuid: String;
    name: String;
    computers: Array<Object>;

    constructor({uuid, name, computers}:{uuid: String, name: String, computers: Array<Object>}){
        this.uuid = uuid
        this.name = name
        this.computers = computers
    }

    static serialize({uuid, name, computers}:{uuid: String; name: String, computers: Array<Object>}){
        return new Zone({uuid, name, computers: PC.serializeList(computers)})
    }

    static serializeList(zones: any){
        if(zones !=undefined)
        return zones.map(Zone.serialize) || []
    }
}