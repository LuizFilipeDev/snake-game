import Render from "../Render";
import IEntity from "../interface/IEntity";

export default abstract class EntityBase implements IEntity{

    size: number;

    constructor(){
        this.size = 30;
    }

    abstract render(_render: Render): void;
    abstract keyEventListener(): void;
}