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
    if (treat == 'steak' || treat == 'chewy bone') {
      if (map.has(treat)) map.set(treat, [...map.get(treat), name])
      else map.set(treat, [name])
    }
  }
  return map
}, new Map())

const dogArray = [] 

dogMap.forEach((dogNameList) => {
  dogNameList.forEach((dogName) => {
    if (!dogArray.includes(dogName)) {
      dogArray.push(dogName)
    }
})
})

console.log(dogArray)

console.log(dogMap);

/**
 * TODO Using `dogMap`, print to the console a single, de-duplicated array 
 * containing the names of all dogs that have 'chewy bone' or 'steak' in 
 * their favorite treats
 */
