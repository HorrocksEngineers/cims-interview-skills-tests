# CIMS Interview Skills Tests <!-- omit in toc -->

We have come up with a few exercises to help our team get a feel for how you write code and solve problems.

You will need to fork to clone this repository, go over getting started instructions, and create a branch to work out of. For 15 minutes, you'll be able to check out each exercise, look over resources, and come up with a game plan. After that time, you'll get 30 minutes to complete as much of your selected exercise as possible. If you start working before the first 15 minutes is up, we'll start the 30 minute timer; so make the most of your preparation time.

Not finishing an exercise in 30 minutes will not result in a disqualification of any kind. Completion is nice, but we're more interested in how you work through the problem. With that in mind, we will be "looking over your shoulder" as you prepare and attempt to complete your selected exercise; expecting to hear your thoughts as you go.

At the end, we'll have you create a pull request against the `main` branch so we can review it later.

## Prerequisites <!-- omit in toc -->

We recognize how annoying it can be to have to set up an environment that doesn't exactly match your preferred defaults. We recommend running everything out of WSL in a new Linux environment, or in another virtualized Linux environment.

- [git](https://git-scm.com/downloads)
- [node](https://nodejs.org)
  - [LTS/Gallium](https://nodejs.org/download/release/v16.20.0/)
  - [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- [yarn](https://yarnpkg.com/getting-started/install)
- [Docker & Docker Compose](https://docs.docker.com/get-docker)

## Getting Started <!-- omit in toc -->

Use the following steps to fork to clone the repository and get set up.

### Fork <!-- omit in toc -->

[Fork](https://github.com/HorrocksEngineers/cims-interview-skills-tests/fork) this repository.

Copy the `main` branch only.

### Clone <!-- omit in toc -->

HTTPS

```bash
git clone https://github.com/{username}/cims-interview-skills-tests.git
```

SSH

```bash
git clone git@github.com:{username}/cims-interview-skills-tests.git
```

GitHub CLI

```bash
gh repo clone {username}/cims-interview-skills-tests
```

### Set Up <!-- omit in toc -->

```bash
# go into repo
cd cims-interview-skills-tests

# install dependencies
yarn

# create a branch for PR
NAME=EnterYourNameHere
git checkout -b "${NAME}_skills_test"
```

## Choose Your Own Adventure <!-- omit in toc -->

- [Database Normalization + TypeORM](#database-normalization--typeorm)
- [React + Apollo Client + Ant Design](#react--apollo-client--ant-design)
- [Typescript Generic Method + Object Merging](#typescript-generic-method--object-merging)

### Database Normalization + TypeORM

Use TypeORM to define a normalized database schema.

[README](/database-normalization-typeorm/README.md#background)

### React + Apollo Client + Ant Design

Build a React component to display a Project's Asphalt Lots from the database.

[README](/react-apollo-ant/README.md#background)

### Typescript Generic Method + Object Merging

Write a function to merge and organize a list of Users.

[README](/generic-object-merging/README.md#background)

## When we finish <!-- omit in toc -->

Navigate to the [Pull Requests](https://github.com/HorrocksEngineers/cims-interview-skills-tests/pulls) menu and create a Pull Request against the upstream `main` branch. Don't worry if it's rejected. This just gives us a fast and easy way to review things later.
