// Pokémon Recreation - CS30 Major Project
// Vijeta Thakur
// January 23, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
import { GameLoop } from "./GameLoop.js";
import { resources } from "./resource.js";
import { Sprite } from "./sprite.js";
import { Vector2 } from "./vector2.js";
import { Input, LEFT, RIGHT, UP, DOWN} from "./Input.js";

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
    resource: resources.images.sky,
    frameSize: new Vector2(320,180),
})
const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(320,180),
})
const hero = new Sprite({
    resource: resources.images.hero,
    frameSize: new Vector2(32,32),
    hFrames: 3,
    vFrames: 8,
    frame: 1,
})

const shadow = new Sprite({
    resource: resources.images.shadow,
    frameSize: new Vector2(32,32)
})

const heroPos = new Vector2(16 * 5, 16 * 5);

const input = new Input();

const update = () => {
    if (input.direction === DOWN){
        heroPos.y += 1;
        hero.frame = 0;
    }
    if (input.direction === UP){
        heroPos.y -= 1;
        hero.frame = 6;
    }
    if (input.direction === LEFT){
        heroPos.x -= 1;
        hero.frame = 9;
    }
    if (input.direction === RIGHT){
        heroPos.x += 1;
        hero.frame = 3;
    }
};

const draw = () => {
    skySprite.drawImage(ctx, 0, 0);
    groundSprite.drawImage(ctx, 0, 0);

    // center hero in the cell
    const heroOffset = new Vector2(-8, -21);
    const heroPosX = heroPos.x + heroOffset.x;
    const heroPosY = heroPos.y+1 + heroOffset.y;

    shadow.drawImage(ctx, heroPosX, heroPosY);
    hero.drawImage(ctx, heroPosX, heroPosY);

}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();