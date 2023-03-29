# Database Normalization + TypeORM

[Back](/README.md#cims-interview-skills-tests)

## Background

Databases are integral to any project you're working on. Anyone who's worked with a poorly constructed database knows the absolute frustration involved with querying, managing, and just dealing with it on a daily basis.

CIMS is not immune to this, but we don't want to introduce anymore jank than already exists.

This execise is intended to test both your database normalization skills and ability to set up entities using TypeORM.

I like Pokemon, so the database schema in question is a simple Pokemon game database.

## Requirements

1. Create database entity classes using TypeORM decorators, satisfying the following
   - Trainers collect one or more wild Pokemon from various locations
   - Each trainer's caught Pokemon has a level and list of moves
   - Boss challenges can occur in these locations
   - Multiple bosses may challenge the trainer in the same location
   - These bosses have one or more Pokemon with a level and list of moves
   - We want to know the highest level of each Boss' Pokemon
   - Each boss may award the trainer with a badge for beating them in battle
1. Resolve as many TODOs as possible

## Getting Started

``` bash
yarn database-normalization-typeorm
```

## Resources

- [TypeORM](https://typeorm.io/)
- Database Normalization
  - [Wikipedia](https://en.wikipedia.org/wiki/Database_normalization)
  - [DataModel.org](https://web.archive.org/web/20080805014412/http://www.datamodel.org/NormalizationRules.html)
