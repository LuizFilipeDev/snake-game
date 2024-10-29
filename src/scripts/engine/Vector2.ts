import IVector2 from './interface/IVector2'

export default class Vector2 implements IVector2 {
    
    x: number = 0;
    y: number = 0;
    
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}