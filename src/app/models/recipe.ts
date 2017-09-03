export class Recipe {

    public _id: string
    public name: string 
    public numberOfServings: string
    public description: string
    public preperation: string
    public img_small: string
    public images: [string]
    public ingredients: [string]
    public categories: [string]
    public quote: string

    constructor() {
        this.name = ""
        this.quote = ""
    }
}
