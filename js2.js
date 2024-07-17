// 1) ededin menfi yoxsa musbet ya da 0 olmasi if else
var number1 = "1"
if (number1 < 0) {
    console.log("menfidir");
} else if (number1 == 0) {
    console.log("0dir");
}
else if (number1 > 0) {
    console.log("musbetdir");
} else {
    console.log("reqem daxil et");
}
// 2) istifadeci rolunda mesaj qaytarahnssscgss swich case
let admin = "welcome admin";
switch (admin) {
    case admin:
        console.log(admin);
        break;
    default: console.log("bir deyer yaz");
        break;
}
// 3) ededin cut ve ya tek olmasi if else
var number2 = 19;
var number_2_division = 2;
var result_division = number2 % number_2_division;
if (result_division == 0) {
    console.log("cutdur");
} else if (result_division == 1) {
    console.log("tekdir");
} else {
    console.log("reqem daxil et pls");
}
// 4) ternary musbet ve menfi
result_division == 0 ? console.log("cut reqemdir(ternary)") : console.log("tek reqemdir(ternary)");

// 5) == ve === arasindaki ferq nov ferqidir 

// 6) !==operatoru 10a beraber olub-olmadigini yoxlayan ifade
var number_10 = 1;
if (number_10 !== 1) {
    console.log("10 deyil");
} else {
    console.log("10dur");
}
// 7) 5den boyuk 10dan kicik ededleri teyin etmek
var number_check = 9;
if (number_check >= 6 && number_check <= 9) {
    console.log("Bu eded 5 ile 10un arasinda yerlesir");
} else {
    console.log("Diqqet !!! Bu eded 5 ile 10un arasinda yerlesmir");
}
// 8) ??
let user = "";

// 9) boolean deyerinin tersi
let class1 = true;
if (class1 !== true) {
    console.log("musiqi oxu");
} else {
    console.log("javascript yaz😎");
}
// 10) her iki sert dogru olub olmadigini yoxla && vasitesile
let condition1 = "5 reqemdir";
let condition2 = "a herfdir";
if (condition1 == "5 reqemdir" && condition2 == "a herfdir") {
    console.log("her ikisi dogrudur");
} else {
    console.log("sehvdir");
}
// 11) en az 1nin duz olub olmamasi
if (condition1 == "5 reqemdir" || condition2 == "a herfdir") {
    console.log("her iki fikir de  duzdu");
} else {
    console.log("sehvdir!");
}
// 12) hem musbet hem de cut olub-olmamagi
var numbers = ""; // yoxlamaq istediyiniz ededi bura yazin
var numbers_2 = 2;
var num_result = numbers % numbers_2;
if (numbers > 0 && num_result == 1) {
    console.log("bu eded musbet ve tekdir");
} else if (numbers > 0 && num_result == 0) {
    console.log("bu eded musbet ve cutdur");
}else if (numbers < 0){
    console.log("bu eded menfidir");
}else{
    console.log("cut ve musbet oldugunu oyrenmek ucun bir reqem yazin");
}
// username ve password 
let alert1 = prompt("Zehmet olmasa istifadeci adii yazin")
let username = "Ruhicenet";
let alert2 = prompt("Zehmet olmasa parol yazin")
let password = "ruhibaba1234";
if (alert1 == username) {
    console.log("Username : Ruhi cenet");
} else {
    console.log("teyin olunmadi");
}
if (alert2 == password) {
    console.log("Password : ruhibaba1234");
} else {
    console.log("teyin olunmadi");
}

