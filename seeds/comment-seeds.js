const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Comment number one",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Comment number two",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Comment number three",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = async () => {
    try {
        await Comment.bulkCreate(commentData, {
            returning: true, // Optional, returns created instances
        });
        console.log('Comments seeded successfully');
    } catch (error) {
        console.error('Error seeding comments:', error);
    }
};

module.exports = seedComments;