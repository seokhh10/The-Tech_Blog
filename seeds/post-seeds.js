const { Post } = require('../models');

const postData = [
    {
        title: 'Title I',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1
    },
    {
        title: 'Title II',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 2
    },
    {
        title: 'Title III',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 3
    }
];

const seedPosts = async () => {
    try {
        await Post.bulkCreate(postData, {
            returning: true, // Optional, returns created instances
        });
        console.log('Posts seeded successfully');
    } catch (error) {
        console.error('Error seeding posts:', error);
    }
};

module.exports = seedPosts;
