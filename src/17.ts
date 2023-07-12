let guest_list_17: string[] = ["Arsalan", "Faizan", "Riaz", "Murtaza"];

let guest_List_can_not_come_17: string[] = [guest_list_17[1]];
// Faizan is not coming so let's invite Husnain
guest_list_17.splice(1, 1, "Husnain");

guest_list_17.unshift("Peter"); // adding a new guest at the start of the list

let middle_of_array_17: number = Math.floor(guest_list_17.length / 2);
guest_list_17.splice(middle_of_array_17, 0, "John"); // adding guest in the middle of the list

guest_list_17.push("Tony"); // adding a new guest at the end of the list


console.log("I appologize! My dinner table won't arrive in time for dinner.");
console.log("I can only invite two people for dinner.");

guest_list_17.splice(2, guest_list_17.length - 2);

guest_list_17.forEach((item) => {
    console.log(`Hello ${item} ! You are still invited to dinner.`);
});

export default guest_list_17;