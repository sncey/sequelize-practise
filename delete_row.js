// Use Sequelize to delete a row in the todo table
// For example, delete the todo with description: Watch Netlfix
// Enter your code below

const Sequelize = require('sequelize');

const path = 'mysql://root:ceyda@localhost:3306/practice';
const sequelize = new Sequelize(path);

const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
}); 

(async () => {
    try {
        const deleted = await Todo.destroy({
            where: {description: "Watch Netlfix"},
            returning: true // return the deleted rows 
        }
        )
        
        console.log("Task successfully deleted", deleted)
    } catch (error) {
        console.error("Error deleting todos:" ,error)
    }
    finally {
        sequelize.close()
    }
})()