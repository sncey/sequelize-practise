// Use Sequelize to insert a new row in the todo table
// Enter your code below

const Sequelize = require('sequelize');

const path = 'mysql://root:ceyda@localhost:3306/practice';
const sequelize = new Sequelize(path); 

const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
});

Todo.create({
    description: 'Buy groceries'
})
    .then(todo => {
        console.log('New todo created:', todo);
    })
    .catch(err => {
        console.error('Error creating todo:', err);
    })
    .finally(() => {
        sequelize.close();
    });
