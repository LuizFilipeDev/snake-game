import Render from "./engine/Render";
import Vector2 from "./engine/Vector2";
import EntityBase from "./engine/base/EntityBase";

export default class FoodBehaviour extends EntityBase{

    private _position: Vector2; 
    private image: HTMLImageElement;

    constructor(){
        super();
        this.image = new Image();
        this._position = new Vector2(0, 0);
    }

    public render(render: Render): void {

        this.image.src = "/src/assets/foods/food-01.svg";
        render.canvasContext.drawImage(this.image, 0, 0)
        this.image.onload = () => {  
            this.generatePosition(render);
            render.canvasContext.drawImage(this.image, this._position.x, this._position.y); 
        };


        // switch (GameController.gameState) {
        //     case GameState.Running:

        //     break;
            
        //     case GameState.Pause:
            
        //     break;
        
        //     default:
        //         break;
        // }
    }

    public keyEventListener(): void {}

    public getPosition(): Vector2{
        return this._position;
    }

    private generatePosition(render: Render){
        this._position = new Vector2(this.randomPosition(render), this.randomPosition(render));
    }

    private randomNumber(min: number, max: number): number{
        return Math.round(Math.random() * (max - min) + min);
    }

    private randomPosition(reder: Render): number{
        let number = this.randomNumber(0, reder.canvas.width - this.size);
        return Math.round(number / this.size) * this.size;
    }
} 