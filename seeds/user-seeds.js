const bcrypt = require('bcrypt');
const { User } = require('../models');

const userData = [
    { username: 'Manuel', password: bcrypt.hashSync('mh1987', 10) },
    { username: 'Ernesto', password: bcrypt.hashSync('eh1983', 10) },
    { username: 'Ismael', password: bcrypt.hashSync('ih1990', 10) }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;