# Typescript Generic Method + Object Merging

[Back](/README.md#cims-interview-skills-tests)

## Background

Projects are big part of CIMS. Most objects are only one or two relations away from a Project.

Users are not directly associated with Projects, they are associated with one or more User Groups and each User Group is associated with one or more Projects. A User only gets access to a Project once they have at least one Role or Permission, granted by another Admin User.

Each Project should have a list of Users for Admins to manage, but we have to do a little bit of work to get the Users organized the way we want in the UI.

## Requirements

1. Implement a method called `projectUsers` in `index.ts` using Typescript generic types. This method will merge data from two lists into a single list of `ProjectUser` records. The data source is defined in `data.json` and is an example of a response from our API. Generic types give the method the flexibility to accept _any_ object which contains the minimum required properties to make it work. A JSDoc and some initial types have been provided for you.
1. Resolve as many TODOs as possible.

## Getting Started

``` bash
yarn generic-object-mapping
```

## References

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
