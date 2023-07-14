let current_users: string[] = ["admin", "Eric", "Robert", "Peter", "Andras"];
let new_users: string[] = ["Arslan", "Husnain", "Peter", "Andras", "John"];

new_users.forEach( (new_user) => {
    new_user = new_user.toLowerCase();
    // make current_users array lowercase
    current_users = current_users.map( (current_user) => {
        return current_user.toLowerCase();
    });
    
    if (current_users.includes(new_user)) {
        console.log("Username " + new_user + " is already taken, please enter a new username");
    } else {
        console.log("Username " + new_user + " is available");
    }
});