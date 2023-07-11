/**
 * Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
 */

let guest_list_16: string[] = ["Arsalan", "Faizan", "Riaz", "Murtaza"];

let guest_List_can_not_come_16: string[] = [guest_list_16[1]];
// Faizan is not coming so let's invite Husnain
guest_list_16.splice(1, 1, "Husnain");

guest_list_16.unshift("Peter"); // adding a new guest at the start of the list

let middle_of_array_16: number = Math.floor(guest_list_16.length / 2);
guest_list_16.splice(middle_of_array_16, 0, "John"); // adding guest in the middle of the list

guest_list_16.push("Tony"); // adding a new guest at the end of the list


console.log("I found a bigger dinner table so let's invite more people.");

guest_list_16.forEach((item) => {
    console.log(`Hello ${item} ! You are invited to dinner.`);
});

guest_List_can_not_come_16.forEach((item) => {
    console.log(`Sorry ${item} ! You were invited but cannot make it.`);
})