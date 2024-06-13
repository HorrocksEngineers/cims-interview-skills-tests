import dataJSON from './data.json';
import { test } from './test';

type User = {
  id: string;
  displayName: string;
  mail: string;
};

type ProjectUser = User & {
  // TODO userGroups: UserGroup[];
  // TODO roles: Role[];
  // TODO additionalPermissions: Permission[];
};

/**
 * Merges `projectToUserGroups` and `userToProjects` into a list of `Project` `User` records
 *
 * @param projectToUserGroups a list of `ProjectToUserGroup` records for a given `Project`
 * @param userToProjects a list of `UserToProject` records for a given `Project`
 * @returns {ProjectUser[]} a list of `User` records with their associated `UserGroup`, `Role`, and additional `Permission` records
 */
function projectUsers(...args: any[]) {
  // todo implement projectUsers
  return;
}

const { projectToUserGroups, userToProjects } = dataJSON.data.project;
test(projectUsers(projectToUserGroups, userToProjects));
