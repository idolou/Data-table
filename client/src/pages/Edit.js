import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Typography,
  TextField,
  Paper,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Edit({ handleAlert }) {
  const baseURL = 'http://localhost:8080';
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: '',
    country: '',
    city: '',
    email: '',
    phone_number: '',
    job_title: '',
    years_of_experience: '',
  });

  useEffect(() => {
    axios
      .get(`${baseURL}/user/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((error) => {
        handleAlert(error.message, true, 'error');
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`${baseURL}/user/${id}`, formData)
      .then((res) => {
        handleAlert('user edited successfully!', true, 'success');
        navigate('/');
      })
      .catch((error) => {
        handleAlert(error.message, true, 'error');
      });

    // Reset form data after submission
    setFormData({
      full_name: '',
      country: '',
      city: '',
      email: '',
      phone_number: '',
      job_title: '',
      years_of_experience: '',
    });
  };

  return (
    <div style={{ marginTop: '2vh', marginBottom: '2vh' }}>
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          maxWidth: '20vw',
          margin: 'auto',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        <IconButton
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: '1',
          }}
          onClick={() => navigate('/')}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Edit User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="full_name"
            label="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="country"
            label="Country"
            value={formData.country}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
            type="email"
          />
          <TextField
            name="phone_number"
            label="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="job_title"
            label="Job Title"
            value={formData.job_title}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            name="years_of_experience"
            label="Years of Experience"
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            value={formData.years_of_experience}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Edit;
