/**
 * Seeder: Demo users (like Laravel seeders).
 */

export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('users', [
      { name: 'John Doe', email: 'john@example.com', password: null, created_at: now, updated_at: now },
      { name: 'Jane Smith', email: 'jane@example.com', password: null, created_at: now, updated_at: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
