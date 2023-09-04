// Use Sequelize to display all rows in the todo table in ascending order of description (alphabetic order)
// Enter your code below

const Sequelize = require('sequelize');

const path = 'mysql://root:ceyda@localhost:3306/practice';
const sequelize = new Sequelize(path); 

const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
});
(async()=>{
    try {
        const ordered = await Todo.findAll({
            order: [['description', 'ASC']]
        })
        console.log("Todo list ordered alphabetically look like") 
        ordered.forEach(element => {
            console.log(element.description)
        })
    } catch (error) {
        console.error('Error getting todos:', error);
    }
    finally{
        sequelize.close()
    }
})()