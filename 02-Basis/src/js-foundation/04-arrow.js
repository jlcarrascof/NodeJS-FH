const users = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
];


const getUserById = ( id, callback ) => {
    const user = users.find( ( user ) => user.id === id );

    ( user) ?
      callback(null, user) :
      callback(`USER not found: ${id}`);

}


module.exports = {
    getUserById
};
