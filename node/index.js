//internal js module
/*const fs = require("fs");

fs.copyFileSync("file1.txt", "file1copy.txt");

console.log("Hello world"); */

var superheroes = require("superheroes");

var mySuperHeroesName = superheroes.random();
 console.log(mySuperHeroesName);

const supervillains = require("supervillains");
console.log(supervillains.all);
var mySuperVillain = supervillains.random();
console.log(mySuperVillain);
