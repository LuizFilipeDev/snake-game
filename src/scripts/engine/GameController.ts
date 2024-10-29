import { GameState } from './enums/GameState'
import Render from './Render';

export default class GameController {

    private _intervalId: number = 0;
    
    public render: Render;
    public intervalToUpdate: number;

    public static gameState: GameState;

    constructor(){

        this.render = new Render();
        this.intervalToUpdate = 250;
        GameController.gameState = GameState.Pause;

    }

    public start(runFunction: Function): void {
        this.render.canvasContext.clearRect(0, 0, this.render.canvas.width, this.render.canvas.height);
        this.keyEventListener();
        runFunction();
    }

    public update(runFunction: Function): void {

        clearInterval(this._intervalId);

        this._intervalId = setInterval(() => { 

            runFunction();
            this.update(runFunction);

        }, this.intervalToUpdate);
    }

    private keyEventListener(): void {

        document.addEventListener("keydown", (event: KeyboardEvent) => {

            event.preventDefault();
        
            if(event.key == " " && GameController.gameState == GameState.Running){
                GameController.gameState = GameState.Pause;
                return;
            }
        
            if(event.key == " " && GameController.gameState == GameState.Pause){
                GameController.gameState = GameState.Running;
                return;
            }
        
        });

    }
}