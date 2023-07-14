function sandwich(items: string[]): string {
    let result: string = "";
    items.forEach(item => {
        result += item + " ";
    });
    return result;
}


let items: string[] = ["Bread", "Cheese", "Ham", "Tomato"];
console.log(sandwich(items));
console.log(sandwich(["Bread", "Cheese", "Ham"]));
console.log(sandwich(["Bread", "Cheese"]));
