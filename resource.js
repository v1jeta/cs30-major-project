class Resources{
    constructor(){
        // everything i plan to download
        this.toLoad = {
            sky: "./assets/sky.png",
            ground: "./assets/ground.png",
            hero: "./assets/hero-sheet.png",
            shadow: "./assets/shadow.png",
        };

        // a bucket to keep all the images
        this.images = {};

        // load each image
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            };
            img.onload = () => {
                this.images[key].isLoaded = true;
            };
            });
        }
    }
// create one instance to use for the whole project
export const resources = new Resources();