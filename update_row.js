// Use Sequelize to update the description for an existing row in the todo table
// For example, update the todo with description: Visit friend to Visit doctor
// Enter your code below

const Sequelize = require('sequelize');

const path = 'mysql://root:ceyda@localhost:3306/practice';
const sequelize = new Sequelize(path);

const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
}); 

(async () => {
    try {
        const updated = await Todo.update(
            {description: 'Visit doctor'},
            {where: {description: 'Visit friend'}}
        )
        console.log('updated to ' ,updated[0]);
    } catch (error) {
        console.error('Error updating todos: ',error)
    }
    finally {
        sequelize.close()
    }
})()