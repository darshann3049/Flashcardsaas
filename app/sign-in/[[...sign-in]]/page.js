"use client";

import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar } from '@mui/material';
import { SignIn, useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function SignInPage() {
  const { isSignedIn } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
     
      router.push('/generate');
    }
  }, [isSignedIn, router]);

  return (
    <div style={{ backgroundColor: '#B7E892', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    
      <AppBar position="static" sx={{ backgroundColor: '#DBF3C9', boxShadow: 'none', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center', padding: 0, paddingTop: 4 }}>
          <Box
            sx={{
              backgroundColor: '#',
              padding: '10px 30px',
              borderRadius: '8px',
            }}
          >
            <Typography variant="h4" component="h1" color="Black" sx={{ letterSpacing: '0.1rem' }}>
              SIGN IN
            </Typography>
          </Box>
        </Toolbar>
      </AppBar> <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: 'center', my: 4 }}
        >
          <SignIn afterSignInUrl="/generate" />
        </Box>
      </Container>
    </div>
  );
}