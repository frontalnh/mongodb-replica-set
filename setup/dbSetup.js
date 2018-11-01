db['admin'].createUser({
  user: 'root',
  pwd: 'test1234',
  roles: [{ role: 'root', db: 'admin' }]
});

db['test'].createUser({
  user: 'test',
  pwd: 'test1234',
  roles: ['readWrite', 'userAdmin']
});
