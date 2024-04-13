const inquirer = require("inquirer")
const fs = require("fs")
const createLogo = require("./lib/svgcreator")


const userData = {}
const questions = [
    {
    type: "input",
    name: "usertext",
    message: "Please enter your text.",

    validate: (input) => input.length <=3,},

        {
            type: "input",
            name: "color",
            message: "Please enter your text color.",
        },
        {
            type: "input",
            name: "shape",
            message: "Please enter a shape.",
        },
{
    type: "input",
    name: "shapecolor",
    message: "Please enter a shape color.",

},


]
function writeToFile(filename, data){
    fs.writeFile(filename, data, (err)=>{
        if(err){
            console.log(err)
        return
        }
    })
}

function init(){
    inquirer.prompt(questions).then((data)=>
    {
       const logo =  createLogo(data)
  writeToFile("logo.svg", logo)
    })

}
    init()


