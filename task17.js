Create a function to move nested object keys to parent(main) object, please review the aspected result.const user = {
  name: "Ramu Kaka",
  birthDate: "05-09-1982",
  address: {
    city: "Surat",
    state: "Gujarat",
    country: "India",
  },
}Aspected result:{
  name: "Ramu Kaka",
  birthDate: "05-09-1982",
  address.city: "Surat",
  address.state: "Gujarat",
  address.country: "India",
}