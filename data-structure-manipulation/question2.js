const swap = (a, b) => {
  let temp = a.age
  a.age = b.age
  b.age = temp
}

const dog1 = {
  name: 'Fido',
  age: 11,
  favoritToys: ['ball', 'frisby'],
}

const dog2 = {
  name: 'Spot',
  age: 7,
  favoritToys: ['frisby'],
}

console.log(`Dog 1: ${dog1.age}, Dog 2: ${dog2.age}`)

swap(dog1, dog2)

console.log(`Dog 1: ${dog1.age}, Dog 2: ${dog2.age}`)

/**
 * TODO Alter the `swap` function so that the swapping of age values persists
 * in the given objects after the function has finished executing
 */  