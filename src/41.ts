let magicians: string[] = ["Harry Houdini", "David Blaine", "Teller"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

// 42
function make_great(magicians: string[]): string[] {
    magicians = magicians.map(magician => {
        return "The Great " + magician;
    });
    return magicians;
}

magicians = make_great(magicians);
show_magicians(magicians);

//43: Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians_copy: string[] = [...magicians];
magicians_copy = make_great(magicians_copy);
show_magicians(magicians_copy);