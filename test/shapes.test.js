
const Shapes = require("../lib/shapes")

const Triangle = require("../lib/shapes").Triangle
const Circle = require("../lib/shapes").Circle
const {Square} = require("../lib/shapes")


// describe("Shapes" , () =>{

describe("Triangle", ()=>{
    it("should be a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })});

describe("Circle", ()=>
    it("should be a red circle"), ()=> {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="50" cy="50" r= "50"  fill="red" />');

    });

 describe("Square", ()=>
    it("should be a green square"), ()=> {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="50" y = "50" width ="100" height = "100" fill="green" />');
    });

    // });



