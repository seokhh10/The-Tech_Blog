const { User } = require('../models');

const userData = [{
        username: 'Manuel',
        password: 'mh1987'

    },
    {
        username: 'Ernesto',
        password: 'eh1983'
    },
    {
        username: 'Ismael',
        password: 'ih1990'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;