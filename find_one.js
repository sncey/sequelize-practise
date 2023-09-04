// Use Sequelize to find the first row where description includes the word 'Visit'
// Try to use async/await instead of promises this time
// Enter your code below

const Sequelize = require('sequelize');

const path = 'mysql://root:ceyda@localhost:3306/practice';
const sequelize = new Sequelize(path);

const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
}); 

(async () => {
    try {
        const toFind = await Todo.findOne({
            where: {
                description : {
                    [Sequelize.Op.like]: '%Visit%'
                }
            }
        }) 
        console.log(toFind)
    } catch (error) {
        console.error('Error finding todo:', error);
    } finally {
        sequelize.close();
    }
    
})()
