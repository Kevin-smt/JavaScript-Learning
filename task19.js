// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.
// Create a function that takes in the current time as a string and determines the duration of time before Jake's next meal. Represent this as an array with the first and second elements representing hours and minutes, respectively.

// EXAMPLE:

// timeToEat("2:00 p.m.") ➞ [5, 0]
// // 5 hours until the next meal, dinner

// timeToEat("5:50 a.m.") ➞ [1, 10]
// // 1 hour and 10 minutes until the next meal, breakfast

// let time = '7:01 p.m.'


function timeToEat(time) {

    let devide = time.split(' ')
    let temptime = devide[0].split(':');

    let hr = Number(temptime[0]);
    let min = Number(temptime[1]);


    console.log(hr, min)

    if (devide[1] === 'p.m.' && hr !== 12) hr += 12;
    if (devide[1] === 'a.m.' && hr === 12) hr = 0;

    let currtime = hr * 60 + min;

    let breakfast = 7 * 60;
    let lunch = 12 * 60;
    let dinner = 19 * 60;

    let rmtime;

    if (currtime < breakfast) {
        rmtime = breakfast;
    }
    else if (currtime < lunch) {
        rmtime = lunch;
    }
    else if (currtime < dinner) {
        rmtime = dinner;
    }
    else {
        rmtime = breakfast + 1440;
    }


    let diff = rmtime - currtime;

    let rmhr = Math.floor(diff / 60)
    let rmMn = diff % 60

    let finaltime = [rmhr, rmMn]

    return finaltime
}
console.log(timeToEat("5:50 a.m."));