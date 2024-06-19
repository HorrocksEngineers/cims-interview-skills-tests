# CIMS Interview Skills Tests <!-- omit in toc -->

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Fork](#fork)
  - [Clone](#clone)
  - [Set Up](#set-up)
- [Reading](#reading)
- [Writing](#writing)
  - [Database Normalization + TypeORM](#database-normalization--typeorm)
  - [React + Apollo Client + Ant Design](#react--apollo-client--ant-design)
  - [Typescript Generic Method + Object Merging](#typescript-generic-method--object-merging)
- [When we finish](#when-we-finish)

## Introduction

This skills test is comprised of 2 parts

1. Reading
1. Writing

In the Reading portion, we'll spend 15 or so minutes going through various code examples. You'll be expected to read the code, understand what's going on, and answer some related questions.

In the Writing portion, you'll be given 10 minutes to fork a repository, look through a selection of activities and associated resources, and prepare your thoughts and ideas. You'll then be given 30 minutes to implement your plans and create a GitHub pull request against the main upstream branch. We're not concerned if you can't finish your plan; we're more concerned with your problem solving, style, and general vibe.

## Prerequisites

We recognize how annoying it can be to have to set up a development environment that doesn't exactly match your preferred defaults. If we were to set this all up again, we'd do so online. For now, we recommend running everything out of WSL in a new Linux environment, or in another virtualized Linux environment in MacOS or Linux. If you aren't worried about messing with your daily driver, feel free to use it.

- [git](https://git-scm.com/downloads)
- [node](https://nodejs.org)
  - [LTS/Gallium](https://nodejs.org/download/release/v16.20.0/)
  - [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- [yarn](https://yarnpkg.com/getting-started/install)
- [Docker & Docker Compose](https://docs.docker.com/get-docker)

## Getting Started

Use the following steps to fork to clone the repository and get set up.

### Fork

[Fork](https://github.com/HorrocksEngineers/cims-interview-skills-tests/fork) this repository.

Copy the `main` branch only.

### Clone

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

### Set Up

```bash
# go into repo
cd cims-interview-skills-tests

# install dependencies
yarn

# create a branch for PR
NAME=MalcolmReynolds
git checkout -b "${NAME}_skills_test"
```

## Reading

Open up this [README](/reading-javascript/README.md) to go through the reading portion

## Writing

### Database Normalization + TypeORM

Use TypeORM to define a normalized database schema.

[README](/database-normalization-typeorm/README.md#background)

### React + Apollo Client + Ant Design

Build a React component to display a Project's Asphalt Lots from the database.

[README](/react-apollo-ant/README.md#background)

### Typescript Generic Method + Object Merging

Write a function to merge and organize a list of Users.

[README](/generic-object-merging/README.md#background)

## When we finish

Navigate to the [Pull Requests](https://github.com/HorrocksEngineers/cims-interview-skills-tests/pulls) menu and create a Pull Request against the upstream `main` branch. Don't worry if it's rejected. This just gives us a fast and easy way to review things later.
