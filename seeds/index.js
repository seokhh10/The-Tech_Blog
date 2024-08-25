const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synchronized.');
        
        await seedUsers();
        console.log('Users seeded.');
        
        await seedPosts();
        console.log('Posts seeded.');
        
        await seedComments();
        console.log('Comments seeded.');
        
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        process.exit(0);
    }
};

seedAll();