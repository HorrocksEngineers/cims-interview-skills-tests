# CIMS Interview Skills Tests <!-- omit in toc -->

We have come up with a few exercises to help our team get a feel for how you write code and solve problems.

You should have already gotten a list of prerequesites to make sure your environment is set up to complete any exercise.

You will need to fork this repository, go over getting started instructions, and create a branch to work out of. For 15 minutes, you'll be able to check out each exercise, look over resources, and come up with a game plan. After that time, you'll get 30 minutes to complete as much of your selected exercise as possible. If you start working before the first 15 minutes is up, we'll start the 30 minute timer; so make the most of it.

Not finishing an exercise in 30 minutes will not result in a disqualification of any kind. Completion is nice, but we're more interested in how you work through the problem. With that in mind, we will be "looking over your shoulder" as you prepare and attempt to complete your selected exercise; expecting to hear your thoughts as you go.

At the end, we'll have you create a pull request against the `main` upstream branch so we can review it later.

- [Prerequesites](#prerequesites)
- [Getting Started](#getting-started)
- [Choose Your Own Adventure](#choose-your-own-adventure)
  - [Database Normalization + TypeORM](#database-normalization--typeorm)
  - [React + Apollo Client + Ant Design](#react--apollo-client--ant-design)
  - [Typescript Generic Method + Object Merging](#typescript-generic-method--object-merging)
- [When we finish](#when-we-finish)

## Prerequesites

We recognize how annoying it can be to have to set up an environment that doesn't exactly match your preferred defaults. We recommend running everything out of WSL in a new Linux environment, or in another virtualized Linux environment.

- [node LTS/Gallium][node]
- [yarn][yarn]
- [Docker & Docker Compose][docker]

## Getting Started

[Fork][fork] the repository. Only copy the `main` branch

Use the following code block to clone and get setup

``` bash
# clone forked repo
git clone https://github.com/{username}/cims-interview-skills-tests.git
# gh repo clone {username}/cims-interview-skills-tests
# git clone git@github.com:{username}/cims-interview-skills-tests.git

# go into repo
cd cims-interview-skills-tests

# install dependencies
yarn

# create a branch for PR
git checkout -b {username or name}_skills_test
```
<!-- 
TODO pre-requesitite checker script
TODO better test cases for generic-object-merging
 -->

## Choose Your Own Adventure

### Database Normalization + TypeORM

Use TypeORM to define a normalized database schema

[README](/database-normalization-typeorm/README.md#background)

### React + Apollo Client + Ant Design

Build a React component to display a Project's Asphalt Lots from the database

[README](/react-apollo-ant/README.md#background)

### Typescript Generic Method + Object Merging

Write a function to merge and organize a list of Users

[README](/generic-object-merging/README.md#background)

## When we finish

Navigate to the [Pull Requests][pull] menu and create a Pull Request against the `main` branch. Don't worry if it's rejected. This just gives us an easy way to review things later.

<!-- links -->
[node]: https://nodejs.org/download/release/v16.20.0/
[yarn]: https://yarnpkg.com/getting-started/install
[docker]: https://docs.docker.com/get-docker
[fork]: https://github.com/HorrocksEngineers/cims-interview-skills-tests/fork
[pull]: https://github.com/HorrocksEngineers/cims-interview-skills-tests/pulls
