<!-- TODO Make this a mandatory "Read Only" portion. no writing code. just reading and explaining -->
<!-- TODO order questions by "difficulty" if that's even feasible -->
<!-- TODO add more leet-cde so seniors don't run out of things to do -->
<!-- TODO Add the questions we want to ask as comments beneath the code so we don't forget -->

# JavaScript Data Structure Manipulation

[Back](/README.md#cims-interview-skills-tests)

## Background

Underneath every framework, npm package, API route, and database migration, lies the basic data structures of JavaScript and their various uses/methods.

In CIMS we use TypeScript, which is essentially a superset of JavaScript with some added "syntactic sugar" that makes JS code a lot more clearly defined and maintainable through type safety. For the purposes of this exercise we'll be skipping the sugar, and using plain ol' JavaScript to get straight to the meat and potatoes. If you know JavaScript, it doesn't matter if you know Typescript.

## Resources

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

## Snippets

For next 15 or so minutes, we'll go through as many of these code snippets as possible. You will not be judged on how many you can get through, but how well you can parse what's going on, answer the related questions, and answer any other questions we may have in the moment.

### Filtering

```javascript
const dogs = [
  {
    name: 'Clifford',
    age: 7,
    favoriteTreats: ['steak', 'bacon'],
  },
  {
    name: 'Gypsy',
    age: 10,
    favoriteTreats: ['chewy bone', 'bacon'],
  },
  {
    name: 'Scooby',
    age: 55,
    favoriteTreats: ['scooby snack'],
  },
]

/**
 * TODO Using the `dogs` array, print to the console the names of all dogs that 
 * do not have 'bacon' in their list of favorite treats
 */
```

### Pass by Reference vs Pass by Value

```javascript
const swap = (a, b) => {
  let temp = a
  a = b
  b = temp
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

swap(dog1.age, dog2.age)

console.log(`Dog 1: ${dog1.age}, Dog 2: ${dog2.age}`)

/**
 * TODO Alter the `swap` function so that the swapping of age values persists
 * in the given objects after the function has finished executing
 */  
```

### Maps Vs Arrays

```javascript
const dogs = [
  {
    name: 'Clifford',
    age: 7,
    favoriteTreats: ['steak', 'bacon'],
  },
  {
    name: 'Scooby',
    age: 55,
    favoriteTreats: ['scooby snack', 'bacon'],
  },
  {
    name: 'Gypsy',
    age: 10,
    favoriteTreats: ['chewy bone', 'bacon'],
  },
  {
    name: 'Scooby',
    age: 55,
    favoriteTreats: ['bacon', 'cheese', 'peanuts'],
  },
  {
    name: 'Jasper',
    age: 11,
    favoriteTreats: ['steak', 'chewy bone'],
  },
  {
    name: 'Gypsy',
    age: 10,
    favoriteTreats: ['steak', 'cheese', 'peanuts'],
  },
]

const dogMap = dogs.reduce((map, { name, favoriteTreats }) => {
  for (let treat of favoriteTreats) {
    if (map.has(treat)) map.set(treat, [...map.get(treat), name])
    else map.set(treat, [name])
  }
  return map
}, new Map())

/**
 * TODO Using `dogMap`, print to the console a single, de-duplicated array 
 * containing the names of all dogs that have 'chewy bone' or 'steak' in 
 * their favorite treats
 */
```

### Closures

```javascript
function func1(x) {
  let count = x ?? 0
  function func2(y) {
    return (count += y ?? 1)
  }
  return func2
}

/**
 * TODO Using the function defined above, print the numbers 21, 25, 26, and 32
 * to the console
 */
```
