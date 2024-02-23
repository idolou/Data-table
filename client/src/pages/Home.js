import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  TextField,
  Autocomplete,
} from '@mui/material';

function Home({ handleAlert }) {
  const baseURL = 'http://localhost:8080';
  const [usersData, setUsersData] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(baseURL)
      .then((res) => setUsersData(res.data))
      .catch((error) => {
        handleAlert(error.message, true, 'error');
      });
  };

  //delete spesific user by id
  const handleDelete = (id) => {
    axios
      .delete(`${baseURL}/delete/` + id)
      .then((res) => {
        fetchData();
        handleAlert('User deleted', true, 'success');
      })
      .catch((error) => console.log(error.message));
  };

  const handleSort = (column) => {
    //sort users by the job title(Lexicography)
    const sortedUsers = [...usersData].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });

    setUsersData(sortedUsers);
  };

  // create list of filtered users by fullname
  const filteredUsers = usersData.filter((user) => {
    if (filterName) {
      return user.full_name.toLowerCase().includes(filterName.toLowerCase());
    } else {
      return true;
    }
  });

  const handleFilterChange = (event, newValue) => {
    setFilterName(newValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5vh',
        marginBottom: '5vh',
      }}
    >
      <div>
        <TableContainer component={Paper} style={{ borderRadius: '10px' }}>
          <h1>Users Table</h1>
          <div
            style={{
              display: 'flex',
              marginLeft: '1vw',
            }}
          >
            <Autocomplete
              value={filterName}
              onChange={handleFilterChange}
              options={usersData.map((user) => user.full_name)}
              renderInput={(params) => (
                <TextField
                  sx={{ width: 200 }}
                  {...params}
                  label="Filter by Name"
                />
              )}
            />
          </div>

          <Table aria-label="users table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    onClick={() => handleSort('full_name')}
                    className="table-Header"
                  >
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    onClick={() => handleSort('country')}
                    className="table-Header"
                  >
                    Country
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    onClick={() => handleSort('city')}
                    className="table-Header"
                  >
                    City
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    onClick={() => handleSort('email')}
                    className="table-Header"
                  >
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    onClick={() => handleSort('phone_number')}
                    className="table-Header"
                  >
                    Phone
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    onClick={() => handleSort('job_title')}
                    className="table-Header"
                  >
                    Job Title
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    onClick={() => handleSort('years_of_experience')}
                    className="table-Header"
                  >
                    Years Of Experience
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to="/add"
                    variant="contained"
                    color="success"
                    fullWidth
                  >
                    + Add User
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell
                    style={{
                      color:
                        user.years_of_experience < 2 ? 'orange' : 'inherit',
                      textAlign: 'center',
                    }}
                  >
                    {user.full_name}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {user.country}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {user.city}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {user.email}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {user.phone_number}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {user.job_title}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {user.years_of_experience}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/edit/${user.id}`}
                      sx={{ width: '47%' }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ marginLeft: '8px' }}
                      onClick={() => handleDelete(user.id)}
                      sx={{ width: '47%' }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Home;
