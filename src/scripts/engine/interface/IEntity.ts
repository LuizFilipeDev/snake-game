import Render from "../Render";

export default interface IEntity{

    size: number;

    render (render: Render): void;
    keyEventListener (): void;
}