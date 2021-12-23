import { LoadingButton } from '@mui/lab'
import { Box, Card, FormControl, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/login-bg.jpg'

const Login = () => {

    const navigate = useNavigate()

    const [loginErr, setLoginErr] = useState()
    const [username, setUsername] = useState('')
    const [usernameErr, setUsernameErr] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordErr, setPasswordErr] = useState(false)

    const [onSubmit, setOnSubmit] = useState(false)

    const loginSubmit = async () => {
        if (onSubmit) return
        setLoginErr(undefined)

        const checkErr = {
            username: username.trim().length === 0,
            password: password.trim().length === 0
        }
        setUsernameErr(checkErr.username)
        setPasswordErr(checkErr.password)
        if (checkErr.username || checkErr.password) return

        const params = {
            username,
            password
        }
        setOnSubmit(true)
        try {
            const res = await authApi.login(params)
            localStorage.setItem('token', res.token)
            setOnSubmit(false)
            navigate('/')
        } catch(err) {
            if (err.response.status === 401) {
                setLoginErr('success')
            }
            setOnSubmit(false)
        }
    }

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'flex-start',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right'
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: '600px'
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '400px',
                        '& .MuiTextField-root': { mb: 5 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        margin: 'auto',
                        padding: '5rem 1rem'
                    }}
                >   
                    <Typography
                        variant='h5'
                        textAlign='center'
                        mb='4rem'
                        fontWeight='700'
                        color='#f50057'
                    >
                        LOGIN SYSTEM
                    </Typography>

                    <FormControl fullWidth>
                        <TextField
                            label='Username'
                            variant='outlined'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            error={usernameErr}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            label='Password'
                            type='password'
                            variant='outlined'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={passwordErr}
                        />
                    </FormControl>
                    
                    {
                        loginErr && <FormControl>
                            <Typography color="error">
                                {loginErr}
                            </Typography>
                        </FormControl>
                    }

                    <LoadingButton
                        variant='contained'
                        fullWidth
                        size='large'
                        sx={{ marginTop: '1rem' }}
                        onClick={loginSubmit}
                    >
                        Sign in
                    </LoadingButton>
                </Box>
            </Card>
        </Box>
    )
}

export default Login
