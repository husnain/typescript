/**
 * Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 */

let rivers: string[] = [];
rivers.push("Nile");
rivers.push("Amazon");
rivers.push("Yangtze");
rivers.push("Mississippi");
rivers.push("Yenisei");

console.log(rivers[5]); // intentional error
if(rivers[5] === undefined) {
    rivers.push("Congo");
}

console.log(rivers[5]);

export default rivers;

