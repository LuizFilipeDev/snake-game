import { GameState } from "./engine/enums/GameState.ts";
import { Direction } from "./engine/enums/Direction.ts";

import GameController from "./engine/GameController.ts";
import Vector2 from "./engine/Vector2.ts";
import Render from "./engine/Render.ts";
import EntityBase from "./engine/base/EntityBase.ts";

export default class SnakeBehaviour extends EntityBase {

    private _body: Array<Vector2>;

    public direcion: Direction;

    constructor(){
        super();

        this._body = new Array<Vector2>;
        this.size = 30;

        //Initial direction
        this.direcion = Direction.Down;

        //Initial size
        this._body.push({x: 300, y: 150}, {x: 300, y: 120}, {x: 300, y: 90});
    }

    public render(render: Render): void {

        switch (GameController.gameState) {
            case GameState.Running:

                render.canvasContext.clearRect(this._body[0].x, this._body[0].y, this.size, this.size);

                this.movement();

                this._body.forEach((item: Vector2, _index: number): void => {
                    render.canvasContext.beginPath();
                    render.canvasContext.roundRect(item.x, item.y, this.size, this.size, 10);
                    render.canvasContext.fillStyle = "#201E20";
                    render.canvasContext.fill();
                });

            break;
            
            case GameState.Pause:

                this._body.forEach((item: Vector2, _index: number): void => {
                    render.canvasContext.beginPath();
                    render.canvasContext.roundRect(item.x, item.y, this.size, this.size, 10);
                    render.canvasContext.fillStyle = "#333033";
                    render.canvasContext.fill();
                });
            
            break;
        
            default:
                break;
        }
    }

    public keyEventListener(): void {

        document.addEventListener("keydown", (event: KeyboardEvent) => {

            event.preventDefault();

            if((event.key == "w" || event.key == "ArrowUp") && this.direcion != Direction.Down){
                this.direcion = Direction.Up;
                return;
            }

            if((event.key == "s" || event.key == "ArrowDown") && this.direcion != Direction.Up){
                this.direcion = Direction.Down;
                return;
            }

            if((event.key == "a" || event.key == "ArrowLeft") && this.direcion != Direction.Right){
                this.direcion = Direction.Left;
                return;
            }

            if((event.key == "d" || event.key == "ArrowRight") && this.direcion != Direction.Left){
                this.direcion = Direction.Right;
                return;
            }
        });
    }

    private movement(): void {

        const head = this._body[this._body.length - 1];

        if(this.direcion == Direction.Up)
            this._body.push({ x: head.x, y: head.y - this.size})

        if(this.direcion == Direction.Down)
            this._body.push({ x: head.x, y: head.y + this.size})

        if(this.direcion == Direction.Left)
            this._body.push({ x: head.x - this.size, y: head.y})

        if(this.direcion == Direction.Right)
            this._body.push({ x: head.x + this.size, y: head.y})
        
        this._body.shift();
    }
}