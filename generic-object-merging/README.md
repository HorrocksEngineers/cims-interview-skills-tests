# Typescript Generic Method + Object Merging

[Back](/README.md#cims-interview-skills-tests)

## Background

Projects are big part of CIMS. Most objects are only one or two relations away from a Project.

Users are not directly associated with Projects, they are associated with one or more UserGroups and each UserGroup is associated with one or more Projects. A User only gets access to a Project once they have at least one Role or Permission.

Each Project should have a list of Users for Admins to manage, but we have to do a little bit of work to get the Users organized the way we want in the UI.

You'll need to implement a method called `projectUsers` in `index.ts` using Typescript Generics. This method will merge data from two lists into a single list of `ProjectUser` records. The data source is defined in `data.json` and is an example of a response from our GraphQL API.

We want to use Typescript Generics to give our method the flexibilty to accept _any_ object which contains the minimum required properties to make it work.

A JSDoc and some initial types have been provided for you.

## Requirements

1. Resolve as many TODOs as possible

## References

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
