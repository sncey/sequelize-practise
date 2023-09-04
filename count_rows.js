// Use Sequelize to count the number of rows in the todo table
// Enter your code below

const Sequelize = require('sequelize');

const path = 'mysql://root:ceyda@localhost:3306/practice';
const sequelize = new Sequelize(path);

const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
}); 

(async () => {
    try {
        const count = await Todo.count()
        console.log('Number of todos: ' ,count);
    } catch (error) {
        console.error('Error counting todos: ',error)
    }
    finally {
        sequelize.close()
    }
})()