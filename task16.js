// Create a function to get total of count from below object , if any nested object are added in future, the function should work same
// const dummyCounts = {
//     count: 2,
//     inner: {
//         count: 4,
//         inner: {
//       count: 2,
//         }
//     }
// }

const dummyCounts = {
    count: 2,
    inner: {
        count: 4,
        inner: {
            count: 2,
            inner: {
                count: 10
            }
        }
    }
}

function totalCounts(obj) {

    let total = obj.count || 0;

    if (obj.inner) {
        total += totalCounts(obj.inner)
    }

    return total
}

console.log(totalCounts(dummyCounts))
// console.log(dummyCounts.count +"," +dummyCounts.inner.count +"," + dummyCounts.inner.inner.count)
// console.log(Object.keys(dummyCounts.inner).length)

// console.log(dummyCounts)
