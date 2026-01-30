// Create a function to move nested object keys to parent(main) object, please review the aspected result.
// const user = {
//   name: "Ramu Kaka",
//   birthDate: "05-09-1982",
//   address: {
//     city: "Surat",
//     state: "Gujarat",
//     country: "India",
//   },
// }
// Aspected result:{
//   name: "Ramu Kaka",
//   birthDate: "05-09-1982",
//   address.city: "Surat",
//   address.state: "Gujarat",
//   address.country: "India",
// }

const user = {
  name: "Ramu Kaka",
  birthDate: "05-09-1982",
  address: {
    city: "Surat",
    state: "Gujarat",
    country: "India",
  },
}

function MovetoMain(obj){

  const result = {}
  const keys = Object.keys(obj)

  for(let i=0;i<keys.length;i++){

    const key = keys[i];

    if(typeof obj[key] === 'object'){

      const innerKeys = Object.keys(obj[key])

      for(let j=0;j<innerKeys.length;j++){
          const innerKey = innerKeys[j];
          result[key + "."+ innerKey] = obj[key][innerKey]
      }
    }

    else{
      result[key] = obj[key];
    }
  }
  return result

}

console.log(MovetoMain(user))

// console.log(user.address.city, user.address.state,user.address.country)
