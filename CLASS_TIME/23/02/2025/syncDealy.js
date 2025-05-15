
function delay1sec() {
    let currentTime = new Date().getTime(); // Corrected `Data` to `Date`

    while (new Date().getTime() - currentTime < 1000) { //web time-1 sec ka pause le kr loop chal raha hai
        // Busy-waiting for 1 second
    }
}

function delayNsec(n) {
    for (let i = 0; i < n; i++) { // Fixed loop condition (`i < 0` → `i < n`)
        delay1sec();
    }
}

delayNsec(1); // Waits for 1 second
console.log("Hello World! 1 sec is over");
