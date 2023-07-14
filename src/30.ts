let usernames_30: string[] = ["admin", "Eric", "Robert", "Peter", "Andras"];

if(usernames_30.includes("admin")){
    console.log("Hello admin, do you want to see a status report?");
} else {
    console.log("Hello " + usernames_30[1] + ", thank you for logging in again.");
}

export default usernames_30;