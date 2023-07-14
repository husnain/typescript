let ordinal_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinal_numbers.forEach(function (ordinal_number) {
    if (ordinal_number == 1) {
        console.log(ordinal_number + "st");
    }
    else if (ordinal_number == 2) {
        console.log(ordinal_number + "nd");
    }
    else if (ordinal_number == 3) {
        console.log(ordinal_number + "rd");
    }
    else {
        console.log(ordinal_number + "th");
    }
});