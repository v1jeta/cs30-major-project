export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"



export class Input{
    constructor(){

        this.heldDirections = [];

        document.addEventListener("keydown", (e) =>{
            // check for dedicated direction list

            if (e.code === "ArrowUp"){
                this.onArrowPressed(UP);
            }
            if (e.code === "ArrowDown"){
                this.onArrowPressed(DOWN);
            }
            if (e.code === "ArrowLeft"){
                this.onArrowPressed(LEFT);
            }
            if (e.code === "ArrowRight"){
                this.onArrowPressed(RIGHT);
            }

        })

        document.addEventListener("keyup", (e) =>{
            // check for dedicated direction list

            if (e.code === "ArrowUp"){
                this.onArrowReleased(UP);
            }
            if (e.code === "ArrowDown"){
                this.onArrowReleased(DOWN);
            }
            if (e.code === "ArrowLeft"){
                this.onArrowReleased(LEFT);
            }
            if (e.code === "ArrowRight"){
                this.onArrowReleased(RIGHT);
            }

        })
    }

    get direction(){
        return this.heldDirections[0];
    }

    onArrowPressed(direction) {
        if (this.heldDirections.indexOf(direction) === -1){
            this.heldDirections.unshift(direction);
        }

    }

    onArrowReleased(direction){
        const index = this.heldDirections.indexOf(direction);
        if (index === -1){
            return;
        }

        // remove this key from the list
        this.heldDirections.splice(index,1);


    }
}