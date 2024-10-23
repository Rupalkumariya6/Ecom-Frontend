import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SignIn = () => {

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const triggerSnackbar = (message, severity = 'success') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const navigate = useNavigate();

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
        });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === 'email') {
            const isValidEmail = /\S+@\S+\.\S+/.test(value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: !isValidEmail || value === '',
            }));
        }

        if (id === 'password') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: value === '',
            }));
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSignin = async (e) => {
        e.preventDefault();

        const newErrors = {
            email: formData.email === '' || !/\S+@\S+\.\S+/.test(formData.email),
            password: formData.password === '',
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).includes(true)) {
            try {
                const response = await axios.post('http://localhost:5000/api/signin', formData);

                if (response.status === 201) {
                    triggerSnackbar('Sign in successful!', 'success');
                    setTimeout(() => {
                        navigate('/dashboard');
                        resetForm();
                    }, 2000);
                } else {
                    triggerSnackbar('Invalid email or password.', 'error');
                }
            } catch (error) {
                console.error('Error during sign in:', error.response ? error.response.data : error.message);
                triggerSnackbar('Sign in failed. Please check your email and password.', 'error');
            }
        }
    };

    return (
        <div className="container mx-auto my-5 p-6 bg-gradient-to-br from-indigo-100 to-pink-100 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">SIGN IN</h1>
            <form onSubmit={handleSignin}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextField
                        className='w-full'
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        helperText={errors.email ? 'Valid email is required' : ''}
                    />
                    <TextField
                        className="w-full"
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={formData.password}
                        onChange={handleInputChange}
                        error={errors.password}
                        helperText={errors.password ? 'Password is required' : ''}
                    />
                </div>
                <div className='flex gap-5'>
                    <Button variant="contained" color="primary" type="submit" sx={{
                        marginTop: '16px',
                        borderRadius: '20px',
                        backgroundColor: '#6b46c1',
                        '&:hover': {
                            backgroundColor: '#553c9a',
                        },
                        transition: 'background-color 0.3s',
                    }}>Sign in
                    </Button>
                    <Link to="/">
                        <Button variant="contained" color="primary" type="submit" sx={{
                            marginTop: '16px',
                            borderRadius: '20px',
                            backgroundColor: '#6b46c1',
                            '&:hover': {
                                backgroundColor: '#553c9a',
                            },
                            transition: 'background-color 0.3s',
                        }}>Wanna Register?
                        </Button>
                    </Link>
                </div>
            </form>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>

    );
};

export default SignIn;

