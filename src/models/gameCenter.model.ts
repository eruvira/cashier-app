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
    status: String;
    uuid: String;

    constructor({mapX, mapY, number, status, uuid}:{mapX: Number, mapY: Number, number: Number, status: String, uuid: String}){
        this.mapX = mapX
        this.mapY = mapY
        this.number = number
        this.status = status
        this.uuid = uuid
    }

    static serialize({
        map_x: mapX, map_y: mapY, number, status, uuid
    }:{map_x: Number, map_y: Number, number: Number, status: String, uuid: String}){
        return new PC({mapX, mapY, number, status, uuid})
    }

    static serializeList(computers: any){
        return computers.map(PC.serialize) || []
    }
}

export class Zone{
    name: String;
    computers: Array<Object>;

    constructor({name, computers}:{name: String, computers: Array<Object>}){
        this.name = name
        this.computers = computers
    }

    static serialize({name, computers}:{name: String, computers: Array<Object>}){
        return new Zone({name, computers: PC.serializeList(computers)})
    }

    static serializeList(zones: any){
        return zones.map(Zone.serialize) || []
    }
}