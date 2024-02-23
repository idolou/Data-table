import express from 'express';
import cors from 'cors';
import {
  getAllUsers,
  addUser,
  getUserById,
  editUser,
  deleteUserById,
} from './dbUtils.js';

//create the server
const app = express();
app.use(cors());
app.use(express.json());

//Home page, get all users data
app.get('/', (req, res) => {
  getAllUsers((error, data) => {
    if (error) return res.json({ message: 'error in server' });
    return res.json(data);
  });
});

//Add new User
app.post('/user', (req, res) => {
  const values = [
    req.body.full_name,
    req.body.country,
    req.body.city,
    req.body.email,
    req.body.phone_number,
    req.body.job_title,
    req.body.years_of_experience,
  ];
  addUser(values, (err, result) => {
    if (err) {
      return res.status(400).json({ message: 'Duplicate entry for email' });
    }
    return res.status(200).json(result);
  });
});

//Get spesific user data for edit page
app.get('/user/:id', (req, res) => {
  const userID = req.params.id;
  getUserById(userID, (err, data) => {
    if (err) return res.status(500).json({ message: 'User not found' });
    return res.json(data[0]);
  });
});

//Edit user by id
app.put('/user/:id', (req, res) => {
  const userID = req.params.id;
  const newData = req.body;
  editUser(userID, newData, (err, result) => {
    if (err) {
      console.log('error updating');
      return res.status(500).json({ message: 'Error updating' });
    }
    return res.status(200).json({ message: 'User updated successfully' });
  });
});

//Delete User
app.delete('/delete/:id', (req, res) => {
  const userID = req.params.id;
  deleteUserById(userID, (err, result) => {
    if (err) return res.json({ message: 'error with server' });
    return res.json({ message: 'User deleted' });
  });
});
app.listen(8080, () => {
  console.log('listening on port 8080');
});
