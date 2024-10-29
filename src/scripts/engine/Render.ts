import IRender from "./interface/IRender";

export default class Render implements IRender {

    public canvasContext: CanvasRenderingContext2D;
    public canvas: HTMLCanvasElement;

    constructor(){
        this.canvas = document.querySelector<HTMLCanvasElement>("#canvas") as HTMLCanvasElement;
        this.canvasContext = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    }
}