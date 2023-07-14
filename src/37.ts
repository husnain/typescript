function make_new_shirt(size: string = 'Large', text: string = 'I love TypeScript'): string {
    return `The size of the t-shirt is ${size} and the text on the t-shirt is ${text}`;
}

console.log(make_new_shirt());
console.log(make_new_shirt('Medium'));
console.log(make_new_shirt('Small', 'I love JavaScript'));