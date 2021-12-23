import { Box, colors, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Loading, TopNav } from '../components'

const AppLayout = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        isLoading ? (
            <Box sx={{
                width: '100%', height: '100vh'
            }}>
                <Loading /> 
            </Box>

        ) : (
            <Box>
                <TopNav />
                <Box sx={{display: 'flex'}}>
                    <Box 
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            backgroundColor: colors.grey['100'],
                            width: 'max-content'
                        }}
                    >
                        <Toolbar />
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        )

    )
}

export default AppLayout
