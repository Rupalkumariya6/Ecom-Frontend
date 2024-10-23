import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormGroup, Checkbox, FormControlLabel, FormLabel, InputAdornment, IconButton } from '@mui/material';
import { RadioGroup, Radio } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: null,
        gender: '',
        hobbies: [],
        address: '',
        city: '',
        pincode: '',
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        age: false,
        email: false,
        password: false,
        confirmPassword: false,
        gender: false,
        hobbies: false,
        address: false,
        city: false,
        pincode: false,
    });


    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            password: '',
            confirmPassword: '',
            dateOfBirth: null,
            gender: '',
            hobbies: [],
            address: '',
            city: '',
            pincode: '',
        });
    };

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

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: value === '' || (id === 'age' && value <= 0) || (id === 'pincode' && value.length !== 6),
        }));
    };

    const handleGenderChange = (e) => {
        setFormData((prev) => ({ ...prev, gender: e.target.value }));
        setErrors((prevErrors) => ({ ...prevErrors, gender: e.target.value === '' }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            const updatedHobbies = checked
                ? [...prev.hobbies, value]
                : prev.hobbies.filter((hobby) => hobby !== value);
            setErrors((prevErrors) => ({ ...prevErrors, hobbies: updatedHobbies.length === 0 }));
            return { ...prev, hobbies: updatedHobbies };
        });
    };

    const handleDateChange = (newValue) => {
        const today = new Date(); // Get today's date
        const selectedDate = newValue ? newValue.toDate() : null; // Convert the selected date to JavaScript Date

        // Check if the selected date is today or in the future
        const isInvalidDate = selectedDate && (selectedDate >= today);

        setErrors((prevErrors) => ({
            ...prevErrors,
            dateOfBirth: isInvalidDate, // Set error if the date is today or in the future
        }));

        setFormData((prev) => ({ ...prev, dateOfBirth: newValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {
            firstName: formData.firstName === '',
            lastName: formData.lastName === '',
            age: formData.age === '' || formData.age <= 0,
            email: formData.email === '' || !/\S+@\S+\.\S+/.test(formData.email),
            password: formData.password === '' || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
            confirmPassword: formData.confirmPassword !== formData.password,
            gender: formData.gender === '',
            hobbies: formData.hobbies.length === 0,
            address: formData.address === '',
            city: formData.city === '',
            pincode: formData.pincode === '' || formData.pincode.length !== 6,
            dateOfBirth: formData.dateOfBirth === null || formData.dateOfBirth.toDate() >= new Date(),
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).includes(true)) {
            const newUser = {
                ...formData,
                dateOfBirth: formData.dateOfBirth ? formData.dateOfBirth.toISOString() : null,

            };
            console.log(typeof (newUser.dateOfBirth));
            console.log(newUser)

            try {
                let url = 'http://localhost:5000/api/register'
                const response = await axios.post(url, newUser);

                if (response.status === 201) {

                    triggerSnackbar('User registered successfully!', 'success');
                    // alert('User registered successfully!');
                    setTimeout(() => {
                        navigate('/signin');
                        resetForm();
                    }, 2000);
                } else {
                    triggerSnackbar('Failed to register user. Please try again.', 'error');
                }
            } catch (error) {
                console.error('Error while registering the user:', error.response ? error.response.data : error.message);

                triggerSnackbar('User Already Exist', 'error');
            }
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConformPassword, setShowConformPassword] = useState(false);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="container mx-auto my-5 p-6 bg-gradient-to-br from-indigo-100 to-pink-100 bg-gray-50 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Register Here!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField
                            className='w-full'
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            error={errors.firstName}
                            helperText={errors.firstName ? 'First Name is required' : ''}
                        />
                        <TextField
                            className='w-full'
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            error={errors.lastName}
                            helperText={errors.lastName ? 'Last Name is required' : ''}
                        />
                        <TextField
                            className='w-full'
                            id="age"
                            label="Age"
                            type="number"
                            variant="outlined"
                            value={formData.age}
                            onChange={handleInputChange}
                            error={errors.age}
                            helperText={errors.age ? 'Age must be greater than 0' : ''}
                        />
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
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            value={formData.password}
                            onChange={handleInputChange}
                            error={errors.password}
                            helperText={errors.password ? 'Password must contain at least one special character' : ''}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onMouseDown={() => setShowPassword(true)}
                                            onMouseUp={() => setShowPassword(false)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            className="w-full"
                            id="confirmPassword"
                            label="Confirm Password"
                            type={showConformPassword ? "text" : "password"}
                            variant="outlined"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            error={errors.confirmPassword}
                            helperText={errors.confirmPassword ? 'Passwords do not match' : ''}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onMouseDown={() => setShowConformPassword(true)}
                                            onMouseUp={() => setShowConformPassword(false)}
                                            edge="end"
                                        >
                                            {showConformPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <DatePicker
                            className='w-full'
                            label="Date of Birth"
                            value={formData.dateOfBirth}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField
                                {...params}
                                variant="outlined"
                                error={errors.dateOfBirth}
                                helperText={errors.dateOfBirth ? 'Date of birth cannot be today or a future date' : ''}
                            />}
                        />
                        <FormControl className='w-full' error={errors.gender}>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup
                                row
                                value={formData.gender}
                                onChange={handleGenderChange}
                            >
                                <FormControlLabel
                                    value="Male"
                                    control={<Radio />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    value="Female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="Others"
                                    control={<Radio />}
                                    label="Others"
                                />
                            </RadioGroup>
                            {errors.gender && <p style={{ color: 'red' }}>Gender is required</p>}
                        </FormControl>
                        <FormControl error={errors.hobbies} className='w-full' sx={{ marginLeft: '5px' }}>
                            <FormLabel sx={{ color: 'black' }}>Hobbies</FormLabel>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={formData.hobbies.includes('Swimming')} onChange={handleCheckboxChange} />}
                                    label="Swimming"
                                    value="Swimming"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={formData.hobbies.includes('Gymming')} onChange={handleCheckboxChange} />}
                                    label="Gymming"
                                    value="Gymming"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={formData.hobbies.includes('Gaming')} onChange={handleCheckboxChange} />}
                                    label="Gaming"
                                    value="Gaming"
                                />
                            </FormGroup>
                            {errors.hobbies && <p style={{ color: 'red' }}>At least one hobby is required</p>}
                        </FormControl>
                        <TextField
                            className='w-full'
                            id="address"
                            label="Address"
                            variant="outlined"
                            value={formData.address}
                            onChange={handleInputChange}
                            error={errors.address}
                            helperText={errors.address ? 'Address is required' : ''}
                        />
                        <TextField
                            className='w-full'
                            id="city"
                            label="City"
                            variant="outlined"
                            value={formData.city}
                            onChange={handleInputChange}
                            error={errors.city}
                            helperText={errors.city ? 'City is required' : ''}
                        />
                        <TextField
                            className='w-full'
                            id="pincode"
                            label="Pincode"
                            type="number"
                            variant="outlined"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            error={errors.pincode}
                            helperText={errors.pincode ? 'Pincode must be 6 digits' : ''}
                        />
                    </div>
                    <Button variant="contained" color="primary" type="submit" sx={{
                        marginTop: '16px',
                        borderRadius: '20px',
                        backgroundColor: '#6b46c1',
                        '&:hover': {
                            backgroundColor: '#553c9a',
                        },
                        transition: 'background-color 0.3s',
                    }}>
                        Register
                    </Button>
                </form>

                <div className='mt-5 ml-2'>
                    <h1>Already have an account?<Link to="/signin"><span className='ml-2 text-[#6b46c1] font-semibold'>Sign In</span></Link> </h1>
                </div>
            </div>
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

        </LocalizationProvider>

    );
};

export default Register;
