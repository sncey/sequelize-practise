// Use Sequelize to find a row in the todo table by ID
// Enter your code below

const Sequelize = require('sequelize');

const path = 'mysql://ceyda@localhost:3306/practice';
const sequelize = new Sequelize(path);

const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
});

// Find a todo by ID
Todo.findOne({
    where: {
        id: 1
    }
})
    .then(todo => {
        console.log('Todo found:', todo);
    })
    .catch(err => {
        console.error('Error finding todo:', err);
    })
    .finally(() => {
        sequelize.close();
    });