// Use Sequelize to insert multiple rows in the todo table
// Insert the values from given array below

const Sequelize = require('sequelize');

const path = 'mysql://root:ceyda@localhost:3306/practice';
const sequelize = new Sequelize(path);

const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
});

const todosToInsert = [
    { description: 'Tai chi in the morning' },
    { description: 'Visit friend' },
    { description: 'Visit grocery store' },
    { description: 'Listen to music' },
    { description: 'Watch Netlfix' },
    { description: 'Walk for an hour' }
];

// Enter your code below

Todo.bulkCreate(todosToInsert)
    .then(() => {
        console.log('Todos inserted');
    })
    .catch(err => {
        console.error('Error inserting todos:', err);
    })
    .finally(() => {
        sequelize.close();
    });
