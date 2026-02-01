// Secret Agent Password

// secretPassword("mubashirh") ➞ "hsajsi13u2"

// 1 - mub -> mub = 13u2
// 2 - ash ->  ash = hsa
// 3 - irh -> irh = jsi

// 2 3 1 = hsajsi13u2

// NOTE: in the third z will be replaced with a

// let str = "mubashirh";

console.log(secretPassword("mubashirha"))

function secretPassword(str) {

    if (str.length === 9) {
        let dictionary = 'abcdefghijklmnopqrstuvwxyz'

        let p1 = str.substring(0, 3);
        let p2 = str.substring(3, 6);
        let p3 = str.substring(6, 9);

        let rp1 = (dictionary.indexOf(p1[0]) + 1) + (p1[1]) + (dictionary.indexOf(p1[2]) + 1);

        let rp2 = p2[2] + p2[1] + p2[0];

        let rp3 = dictionary[(dictionary.indexOf(p3[0]) + 1) % 26] +
            dictionary[(dictionary.indexOf(p3[1]) + 1) % 26] +
            dictionary[(dictionary.indexOf(p3[2]) + 1) % 26];

        return rp2 + rp3 + rp1
    }
    else {
        return console.log("Provide 9 chars string only")
    }

}


// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(dictionary.indexOf(p3[0]) + 1)
// console.log(dictionary[9]);

