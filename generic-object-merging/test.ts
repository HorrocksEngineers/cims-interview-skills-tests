export function test(users: unknown) {
  try {
    if (!Array.isArray(users)) throw new Error('users must be an array');
    if (users.length !== new Set(users.map(({ id }) => id)).size)
      throw new Error('Incorrect user count. did you forget to de-duplicate?');
    users.forEach(user => {
      const stringified = JSON.stringify(user);
      if (user.additionalPermissions?.length > 0)
        throw new Error(
          'No users should have additional Permission records in this list'
        );
      if (!user.id) throw new Error(`No id was found for ${stringified}`);
      const BRETT = '6a2c6156-80cf-4701-9310-91ec0f1a96ea';
      if (user.id === BRETT && user.roles?.length !== 2)
        throw new Error('Brett Daniels should have 2 roles');
    });
  } catch (err) {
    if (err instanceof Error) console.error(`\nFAIL!\n-----\n${err.message}\n`);
    else throw err;
  }
}
