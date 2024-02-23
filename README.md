Users Table Web App

1. Use Mysql to create database called exam:
   CREATE DATABASE exam

2. Create new Table called users:
   CREATE TABLE USERS (
   id INT AUTO_INCREMENT PRIMARY KEY,
   full_name VARCHAR(255) NOT NULL,
   country VARCHAR(255),
   city VARCHAR(255),
   email VARCHAR(255) UNIQUE NOT NULL,
   phone_number VARCHAR(255),
   job_title VARCHAR(255),
   years_of_experience INT
   );

3. go to server\dbUtils.js and change the password to to your own db root password.

4. open a terminal and navigate to this project's dir

- run `npm install`
- run `npm start`

# Users Table Web Application

This readme provides instructions for setting up and running the Users Table Web Application.

## Database Setup

1. Utilize MySQL to create a database named `exam` by executing the following SQL command:

   ```sql
   CREATE DATABASE exam;

   ```

2. Create a new table named users within the exam database by executing the following SQL command:
   ```sql
   CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    city VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(255),
    job_title VARCHAR(255),
    years_of_experience INT
   );
   ```
3. Create new .env file.
   1. Add: `DBpassword=root` (change this to your database password)
   2. Add: `database=exam`

## Project Setup

- Open a terminal and navigate to the directory where the project is located.
- run `npm install`
- run `npm start`
