export function test<T extends ProjectUser>(users: T[]) {
  try {
    if (users.length !== new Set(users.map(({ id }) => id)).size)
      throw new Error('Incorrect user count. did you forget to de-duplicate?');
    if (users.some(({ additionalPermissions }) => additionalPermissions.length))
      throw new Error('No users should have additional Permission records in this list');
    const BRETT = '6a2c6156-80cf-4701-9310-91ec0f1a96ea';
    const brett = users.find(({ id }) => id === BRETT);
    if (!brett) throw new Error('Brett Daniels is missing from users');
    if (brett.roles.length !== 2) throw new Error('Brett Daniels should have 2 Roles');
    const TESTERS = 'CIMS Testing - Testers';
    if (
      users.some(({ userGroups }) => userGroups.map(({ name }) => name).includes(TESTERS))
    )
      return;
    else throw new Error(`${TESTERS} UserGroup is missing`);
  } catch (err) {
    console.error(`\nFAIL!\n-----\n${err.message}\n`);
  }
}

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
