import GameController from './scripts/engine/GameController.ts'
import FoodBehaviour from './scripts/FoodBehaviour.ts';
import SnakeBehaviour from "./scripts/SnakeBehaviour.ts";

const gameController: GameController = new GameController();
const snakeBehaviour: SnakeBehaviour = new SnakeBehaviour();
const foodBehaviour: FoodBehaviour = new FoodBehaviour();

gameController.start((): void => {
    snakeBehaviour.render(gameController.render);
    foodBehaviour.render(gameController.render);
    snakeBehaviour.keyEventListener();
});

gameController.update((): void => {
    snakeBehaviour.render(gameController.render);
});