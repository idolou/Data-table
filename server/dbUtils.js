import mysql2 from 'mysql2';

//create db connection
const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: env.DBpassword,
  database: env.database,
});

export const getAllUsers = (callback) => {
  const query = 'SELECT * FROM users';
  db.query(query, callback);
};

export const addUser = (userData, callback) => {
  const sql =
    'INSERT into users (`full_name`, `country`, `city`, `email`, `phone_number`, `job_title`, `years_of_experience`) VALUES(?)';
  db.query(sql, [userData], callback);
};

export const getUserById = (userId, callback) => {
  const query = 'SELECT * FROM users WHERE id= ?';
  db.query(query, [userId], callback);
};

export const editUser = (userId, newData, callback) => {
  const query = 'UPDATE users SET ? WHERE id = ?';
  db.query(query, [newData, userId], callback);
};

export const deleteUserById = (userId, callback) => {
  const query = 'DELETE FROM users WHERE ID = ?';
  db.query(query, [userId], callback);
};
