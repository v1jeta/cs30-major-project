import { Vector2 } from "./vector2.js";

export class Sprite {
    constructor({
        resource, // image to draw
        frameSize, // how much to crop from the spritesheet
        hFrames,
        vFrames,
        frame, // which frame to show
        scale, // how large of an image to use
        position, // where to draw sprite
    }){
        this.resource = resource;
        this.frameSize = frameSize ?? new Vector2(16,16);
        this.hFrames = hFrames ?? 1;
        this.vFrames = vFrames ?? 1;
        this.frame = frame ?? 0;
        this.frameMap = new Map();
        this.scale = scale ?? 1;
        this.position = position ?? new Vector2(0,0);
        this.buildFrameMap();
    }

    buildFrameMap(){
        let frameCount = 0;
        for (let v = 0; v<this.vFrames; v++){
            for (let h = 0; h<this.hFrames; h++){
                this.frameMap.set(
                    frameCount,
                    new Vector2(this.frameSize.x * h, this.frameSize.y * v)
                )
                frameCount++;
            }
        }
    }

    drawImage(ctx, x, y){
        if (!this.resource.isLoaded){
            return;
        }
    

    // find the correct frame to use
    let frameCoordX = 0;
    let frameCoordY = 0;
    const frame = this.frameMap.get(this.frame);
    if (frame){
        frameCoordX = frame.x;
        frameCoordY = frame.y;
    }
    const frameSizeX = this.frameSize.x;
    const frameSizeY = this.frameSize.y;

    ctx.drawImage(
        this.resource.image,
        frameCoordX,
        frameCoordY, // top left coordinate of frame
        frameSizeX, // how much to crop from the sprite sheet
        frameSizeY, 
        x, // where to place image on canvas tag
        y,
        frameSizeX * this.scale, // how karge to scale the image to
        frameSizeY * this.scale, 
    );
    }
}

