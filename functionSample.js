function add1(v1, v2) {
  return v1 + v2;
}

const result1 = add1(1, 2)
console.log(`add1: ${result1}`)

const add2 = function add2(v1, v2) {
  return v1 + v2;
}
console.log(`add2: ${add2(1, 2)}`)

const add3 = (v1, v2) => {
  return v1 + v2
}
console.log(`add3: ${add3(1, 2)}`)
