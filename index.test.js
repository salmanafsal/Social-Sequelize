const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const UsersData = require('./seed/users.json'); 
const ProfileData = require('./seed/profiles.json'); 
const PostData = require('./seed/posts.json'); 
const LikeData = require('./seed/likes.json'); 
const CommentData = require('./seed/comments.json'); 
async function seedComments() {
    try {
      await User.bulkCreate(UsersData);  // Directly use Comment model
      console.log('User seeded successfully!');


      await Profile.bulkCreate(ProfileData);  // Directly use Comment model
      console.log('User seeded successfully!');


      await Post.bulkCreate(PostData);  // Directly use Comment model
      console.log('User seeded successfully!');


      await Like.bulkCreate(LikeData);  // Directly use Comment model
      console.log('User seeded successfully!');

      await Comment.bulkCreate(CommentData);  // Directly use Comment model
      console.log('User seeded successfully!');
  

    } catch (error) {
      console.error('Error seeding comments:', error);
    }
}

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
        await seedComments();
    })
    
    // Write your tests here
    // Comment, Like, Post, Profile,
    test("should seed users correctly", async () => {
        const comments = await User.findAll();
        expect(comments.length).toBeGreaterThan(0);
    });

    test("should seed users correctly", async () => {
        const comments = await Profile.findAll();
        expect(comments.length).toBeGreaterThan(0);
    });

    test("should seed users correctly", async () => {
        const comments = await Post.findAll();
        expect(comments.length).toBeGreaterThan(0);
    });

    test("should seed users correctly", async () => {
        const comments = await Like.findAll();
        expect(comments.length).toBeGreaterThan(0);
    });

    test("should seed users correctly", async () => {
        const comments = await Comment.findAll();
        expect(comments.length).toBeGreaterThan(0);
    });

    test('should have correct associations', () => {
        // User hasOne Profile
        expect(User.associations.Profile).toBeDefined();
        expect(Profile.associations.User).toBeDefined();
    
        // User hasMany Posts
        expect(User.associations.Posts).toBeDefined();
        expect(Post.associations.User).toBeDefined();
    
        // Post hasMany Comments
        expect(Post.associations.Comments).toBeDefined();
        expect(Comment.associations.Post).toBeDefined();
    
        // User belongsToMany Like
        expect(User.associations.Likes).toBeDefined();
        expect(Like.associations.Users).toBeDefined();
    });

})