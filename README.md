# Employee Tracker

## Description

A command line application using node.js. It allows a user to create a database for their company structure. It allows them to add departments, roles, and employees in a relational data structure. To accomplish this goal I used the npm packages inquirer and mysql2, and MySQL. I learned about SQL syntax, querying databases with javascript, callback functions/promises/synchronicity, and how to use .gitignore files. 

Click [here](here) to see a video walkthrough of the application.

## Installation

1. Clone the repo found at this link: employee-tracker-sql !!!!
2. Install MySQL following this guide: 
3. Run the command 'mysql -u root -p' in the terminal while in the root directory of the cloned repo to open mysql.
4. From the root directory of the repo, run 'SOURCE db/schema.sql;' then 'SOURCE db/seeds.sql;' to create the data structure for your application and seed them with data.
5. Run the command 'exit;' to exit mysql.
6. Run npm i to install the node modules.
7. You're all set!!


## Usage

Run 'node index.js' to run the command line application. When you have finished, choose the 'quit' option in the menu to exit the application. If you would like to seed your own data into the database, skip using the 'SOURCE db/seeds.sql;' command in MySQL.