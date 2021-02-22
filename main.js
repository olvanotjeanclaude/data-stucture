import CustomArray from "./CustomArray.js";
import { charToArray, reverse } from "./customString.js";

let array = new CustomArray();


let olvanot = reverse("olvanot");

array.push("salut");
array.push("olvanot");
array.push("Jean claude");
array.push("Jean");
//console.log(array);

//console.log(olvanot);

const myArray = new CustomArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();

myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
//console.log(reverse(""));