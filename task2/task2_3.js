abbrev_name = function (str1) {
    let split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0].charAt(0).toUpperCase() + "." + split_names[1].charAt(0).toUpperCase() + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("olena halenok"));