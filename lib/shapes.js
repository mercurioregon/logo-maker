class Triangle{
    constructor(color){
        this.shapecolor=color

}
color(color){
    this.shapecolor=color
}
create(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`
}
}

class Circle{
    constructor(color){
        this.shapecolor=color
    }
    color(color){
        this.shapecolor=color
    }
    create(){
        return `<circle cx="50" cy="50" r= "50" fill="${this.shapecolor}" />`
    }
}

class Square{
    constructor(color){
        this.shapecolor=color
    }
    color(color){
        this.shapecolor=color
    }
    create(){
        return `<rect x="50" y = "50" width ="100" height = "100" fill="${this.shapecolor}" />`
    }
}

module.exports = {Circle,Triangle,Square}