# Database Normalization + TypeORM

[Back](/README.md#cims-interview-skills-tests)

## Background

Databases are integral to any project you're working on. Anyone who's worked with a poorly constructed database knows the absolute frustration involved with querying, managing, and just dealing with it on a daily basis.

CIMS is not immune to this, but we don't want to introduce anymore jank than already exists.

This execise is intended to test both your database normalization skills and ability to set up entities using TypeORM.

I like Pokemon, so the database schema in question is a simple Pokemon game database.

## Requirements

1. Create database entity classes in `/src/entity/` using TypeORM decorators, satisfying the following.
   - Pokemon have a numeric level and list of attack moves.
   - Trainers collect one or more wild Pokemon from various locations. The same Pokemon could appear in multiple locations.
   - When Trainers collect a Pokemon, the trainer may give them a nickname, making them distinct from a wild Pokemon.
   - Boss challenges can occur in the same locations where wild Pokemon may be collected.
   - Multiple bosses may challenge the trainer in the same location.
   - These bosses have one or more Pokemon, but we don't care about the nickname. We do want to store the numeric level of the boss' highest level Pokemon.
   - Each boss may award the trainer with a badge for defeating them in battle.
1. Each class should have its own file in `/src/entity/`
1. Each class should extend `BaseEntity`, so we can use the Active Record pattern.
1. All relations should be bi-directional.
1. Custom Base classes are allowed.
1. Don't worry about implementing any game logic, we just care about the entities.
1. Resolve as many TODOs as possible.

## Getting Started

``` bash
yarn database-normalization-typeorm
```

Since this test uses a database connection. It's possible the connection won't be ready by the time the application starts. If you see a Connection Error, just save a file for `nodemon` to trigger a change to reconnect.

## Resources

- [TypeORM](https://typeorm.io/)
- Database Normalization
  - [Wikipedia](https://en.wikipedia.org/wiki/Database_normalization)
  - [DataModel.org](https://web.archive.org/web/20080805014412/http://www.datamodel.org/NormalizationRules.html)
