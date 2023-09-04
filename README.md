# Sequelize Practice
The objectives of this assignment are:
1. Understanding the use of an ORM
2. Executing queries on a MySQL database using Sequelize

## Getting Started
Follow these installation instructions to install MySQL on your computer.
1. [Install MySQL on WSL or Linux](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mysql)
2. [Install MySQL on MacOS](https://flaviocopes.com/mysql-how-to-install/)

After completing the installation, make sure to run the security script and then start the MySQL service, all mentioned in the installation links above.

**Please Note**: Keep a note of the password you created while executing the security script.

Now, start the MySQL prompt by running the command: `mysql -u root -p`

It will ask you to enter the password which you created to secure your MySQL installation.

After entering the password you should see the MySQL prompt `mysql>`

Let's create a database for practice. Enter the query: `create database practice;`

Once our practice database is created, we can exit the prompt: `exit`

### Sequelize Setup
Sequelize is available via npm. Navigate to your cloned assignment folder and run the command: `npm install sequelize`

To use sequelize on a Node.js project, we will also have to install the database driver, so run the command: `npm install mysql2`

### Sequelize database connection
First, let's create a connection to our practice database and test it out.

In the assignment folder, you will find a file called `connect.js`. Enter these lines of code here.
```js
const Sequelize = require('sequelize');

const path = 'mysql://root:yourpassword@localhost:3306/practice';
const sequelize = new Sequelize(path);

sequelize.authenticate()
    .then(() => {
        console.log('Connection established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database: ', err);
    }).finally(() => {
        sequelize.close();
    });
```
**Note**: Add your MySQL password in the path for the database connection, by replacing `yourpassword`.

Now, let's run this file: `node connect.js`. You should see the output as:
```
Executing (default): SELECT 1+1 AS result
Connection established successfully.
```

From this piece of code, you can tell the following:
1. Sequelize requires a MySQL connection path which contains the username, password, the host name, database port and database name.
2. The authenticate method tests the connection by trying to authenticate to the database. We show a message when the connection was established OK.
3. In case of an error, we show an error message.
4. In the end, we close the database connection.

### Sequelize model definition
A Model represents a table in the database. Let's create a model representing a table called `todo` for a todo list application.

In the assignment folder, you will find a file called `model.js`. Enter these lines of code here.
```js
const Sequelize = require('sequelize');

const path = 'mysql://root:yourpassword@localhost:3306/practice';
const sequelize = new Sequelize(path);

// The table will have a column called description of type string
const Todo = sequelize.define('todo', {
    description: Sequelize.STRING
});

Todo.sync()
    .then(() => {
        console.log('New table "todo" created');
    }).catch(err => {
        console.error('Unable to create table: ', err);
    }).finally(() => {
        sequelize.close();
    });
```
Once again add your password in the connection path and then run `node model.js`. You should see the query being executed in the output and the todo table will be created. You can even verfy this on the MySQL Prompt.

## Practice Time
Now that we have written some code utilizing Sequelize, let's explore some more of what can be acheived through this ORM by performing some more operations on our Todo table.

In this assignment folder, you will find the following files:
```
insert_todo.js
find_by_id.js
multi_insert_todo.js
find_one.js
count_rows.js
update_row.js
delete_row.js
order_by.js
```
In each file, you will find a comment describing an SQL operation to be done using Sequelize. You must write the required code for each operation in these files one by one.

Note: You will have to add the SQL connection and model definition on each file, since we will be running each file independently.

Refer to the [Sequelize documentation](https://sequelize.org/) for support.

## Submission
Once you're ready to submit the assignment, follow these steps on your terminal:
1. Stage your changes to all the JS files to be committed: `git add .`
2. Commit your final changes: `git commit -m "solve assignment"`
3. Push your commit to the main branch of your assignment repo: `git push origin main`

After your changes are pushed, return to this assignment on Canvas for the final step of submission.

## Conclusion
So far we knew how to directly execute queries on a MySQL database. This assignment gave us the chance to work with a MySQL database using Node.js. Of course we will not be writing separate files for each operation in our actual projects. When building a CRUD API, we will simply execute the Sequelize functions within our API endpoint handlers depending on the required operation. All of this coming soon in Module 3, so stay tuned!