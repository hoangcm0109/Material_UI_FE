import { LoadingButton } from '@mui/lab'
import { Box, Card, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import bgImage from '../assets/login-bg.png'

const Login = () => {
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
                        color='secondary'
                    >
                        LOGIN SYSTEM
                    </Typography>

                    <FormControl fullWidth>
                        <TextField
                            label='Username'
                            variant='outlined'
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            // error={usernameErr}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            label='Password'
                            type='password'
                            variant='outlined'
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            // error={passwordErr}
                        />
                    </FormControl>

                    <LoadingButton
                        variant='contained'
                        fullWidth
                        size='large'
                        sx={{ marginTop: '1rem' }}
                        // onClick={loginSubmit}
                    >
                        Sign in
                    </LoadingButton>
                </Box>
            </Card>
        </Box>
    )
}

export default Login
