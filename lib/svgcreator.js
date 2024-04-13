const {Circle, Triangle, Square} = require("./shapes")

function createLogo (data){
    let shape 
    switch(data.shape){
        case "circle":
        shape = new Circle(data.shapecolor)

        break;
        case "triangle":
            shape = new Triangle(data.shapecolor)
            break;
            case "square":
                shape = new Square(data.shapecolor)
                break;
                default: 
                console.log ("Please enter a circle, triangle, or square.")
                                return

    }
    
    return `
    <svg width = "200" height = "200" xmlns = "http://www.w3.org/2000/svg">
    ${shape.create()}
    <text x = "50" y = "50" fill = "${data.color}">${data.usertext}</text>
</svg>
    `
}
module.exports= createLogo
