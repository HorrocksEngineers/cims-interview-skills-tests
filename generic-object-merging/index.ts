import dataJSON from './data.json';
import { test } from './.solutions';

type UserGroup = {};

type Role = {};

type Permission = {};

type User = {
  id: string;
  displayName: string;
  mail: string;
};

type ProjectUser = User & {
  userGroups: UserGroup[];
  roles: Role[];
  additionalPermissions: Permission[];
};

/**
 * Merges `projectToUserGroups` and `userToProjects` into a list of `Project` `User` records
 *
 * @param projectToUserGroups a list of `ProjectToUserGroup` records for a given `Project`
 * @param userToProjects a list of `UserToProject` records for a given `Project`
 * @returns {ProjectUser[]} a list of `User` records with their associated `UserGroup`, `Role`, and additional `Permission` records
 */
// TODO projectUsers

const { projectToUserGroups, userToProjects } = dataJSON.data.project;
test(projectUsers(projectToUserGroups, userToProjects));
