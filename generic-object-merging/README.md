# Typescript Generic Method + Object Merging

[Back](/README.md#cims-interview-skills-tests)

## Background

Projects are big part of CIMS

Most objects are only one or two relations away from a Project

Users are not directly associated with Projects, they are associated with one or more UserGroups and each UserGroup is associated with one or more Projects

A User only gets access to a Project once they have at least one Role or Permission

A Project has a list of Users, but we have to do a little bit of work to get the Users organized the way we want in the UI

## Requirements

- Use Typescript's Generic Types

## Test Prompt

This GraphQL query returns two lists; one holds user roles and one-off permissions for a given project, while the other holds all user groups associated with a project

The query isn't the important part, but the fact that we need to get all the Project's users

``` graphql
query($globalId: String!) {
  project(globalId: $globalId) {
    userToProjects {
      userId
      roles {
        name
        permissions {
          name
        }
      }
      additionalPermissions {
        name
      }
    }
    projectToUserGroups {
      userGroup {
        name
        users {
          id
          displayName
          mail
        }
      }
    }
  }
}
```
