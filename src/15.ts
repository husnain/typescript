/**
 * Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
 */

let guest_list_15: string[] = ["Arsalan", "Faizan", "Riaz", "Murtaza"];

// Faizan is not coming so let's invite Husnain
guest_list_15.splice(1, 1, "Husnain");

guest_list_15.forEach((item) => {
    console.log(`Hello ${item} ! You are invited to dinner.`);
});