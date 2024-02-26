// Question 25

let alianColor: string = 'green';

// Version that passes the if test (green alien)

if (alianColor === 'green') {
    console.log("player just earned 5 points!");
}

//  Version that fails the if test (red alien)

alianColor = 'red';

if (alianColor === 'green') {
    console.log("player just earned 5 points!");
}