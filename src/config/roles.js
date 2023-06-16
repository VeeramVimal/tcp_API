const allRoles = {
  candidate: [],
  admin: ['getUsers', 'manageUsers'],
  employee:['getUsers'],
  sudo: ['getUsers', 'manageUsers'],
  ceo: ['getUsers', 'manageUsers'],
  hr: ['getUsers', 'manageUsers'],
  clients: ['getUser'],
  trainee: []
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
