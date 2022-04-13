// 1
let a = 100;
while (a <= 200) {
    console.log(`a = ${a}`);
    a++;
}

// 2
let b = 100;
while (b <= 200) {
    if (b % 2 == 0) {
        console.log("-")
    } else {
        console.log("*")
    }
    b++;
}

// 3
for (let c = 0; c < 10; c++) {
    for (let d = 1; d <= 10; d++)
        console.log(d)
}

// 4
for (let e = 100; e <= 200; e++) {
    console.log(`e = ${e}`);
}

// 5
for (let f = 100; f <= 200; f++) {
    if (f % 2 == 0) {
        console.log("-")
    } else {
        console.log("*")
    }
}

let now = new Date();
let day = now.getDay();
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a weekday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("What?!")
        break;
} 