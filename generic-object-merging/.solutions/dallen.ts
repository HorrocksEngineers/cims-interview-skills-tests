type WithName = { name: string };

type UserGroup = WithName;

type Role = WithName;

type Permission = WithName;

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

type ProjectToUserGroup = { userGroup: UserGroup & { users: User[] } };

type UserToProject = {
  userId: string;
  roles: Role[];
  additionalPermissions: Permission[];
};

/**
 * Merges `projectToUserGroups` and `userToProjects` into a list of `Project` `User` records
 *
 * @param projectToUserGroups a list of `ProjectToUserGroup` records for a given `Project`
 * @param userToProjects a list of `UserToProject` records for a given `Project`
 * @returns {User[]} a list of `User` records with their associated `UserGroup`, `Role`, and additional `Permission` records
 */
export function projectUsers<T extends ProjectToUserGroup, U extends UserToProject>(
  projectToUserGroups: T[],
  userToProjects: U[]
): ProjectUser[] {
  // contains duplicates
  const groupUsers = projectToUserGroups
    .map(({ userGroup: { users } }) => users)
    .flat()
    .map(user => JSON.stringify(user));
  // de-duplicate
  const users = [...new Set(groupUsers)].map(user => JSON.parse(user));

  users.forEach(user => {
    const { additionalPermissions, roles } =
      userToProjects.find(({ userId }) => userId === user.id) ?? {};
    user.roles = roles ?? [];
    user.additionalPermissions = additionalPermissions ?? [];
  });

  // re-group to userId => UserGroup[]
  const userGroups = projectToUserGroups.reduce((map, { userGroup }) => {
    userGroup.users.forEach(({ id }) => {
      const userGroups = map.get(id) ?? [];
      map.set(id, [{ name: userGroup.name }, ...userGroups]);
    });
    return map;
  }, new Map<string, UserGroup[]>());

  return users.map(user => ({ ...user, userGroups: userGroups.get(user.id) ?? [] }));
}
