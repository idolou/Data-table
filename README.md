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
3. Go to `server\dbUtils.js`.
   1. Change: `DBpassword=root` (change this to your database password)

## Project Setup

- Open a terminal and navigate to the directory where the project is located.
- run `npm install`
- run `npm start`

## Demo



https://github.com/idolou/Data-table/assets/63515984/5574350c-8ada-4e5d-bef8-3b5d66043657


