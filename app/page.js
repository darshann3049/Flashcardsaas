"use client"; 
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, AppBar, Toolbar, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs'; 
import firebase from "firebase/app"
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";


export default function HomePage() {
  const router = useRouter();
  const { signOut } = useAuth(); 

  const handleGetStarted = async () => {
    await signOut(); 
    router.push('/sign-in');
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <AppBar position="static" sx={{ backgroundColor: '#797EF6', boxShadow: 'none', width: '100%' }}> 
        <Toolbar sx={{ justifyContent: 'center', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white', paddingTop: 2 }}>
            Welcome to FlashCardSaaS
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
       
        <Grid item xs={12} sm={3} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ backgroundColor: '#000', height: '300px', width: '100%', borderRadius: 4, mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Typography variant="h6">Features</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>Easy Text Input</Typography>
            <Typography variant="body2">Simply input your text and let our AI generate your flashcards</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#000', height: '300px', width: '100%', borderRadius: 4, mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Typography variant="h6">Basic Plan</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>$5/month</Typography>
            <Typography variant="body2">Limited access to flashcards</Typography>
          </Box>
        </Grid>

        {/* Center Section */}
        <Grid item xs={12} sm={5} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#f6f6f6', 
                fontWeight: 'bold', 
                letterSpacing: '0.3rem', 
                mb: 4,
              }}
            >
              Make flashcard from text now!!
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#7C4DFF', 
                color: 'white',
                mt: 4,
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: '10px 20px',
                borderRadius: 4,
                '&:hover': {
                  backgroundColor: '#5E35B1', 
                },
              }}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ backgroundColor: '#ff4d4d', height: '300px', width: '100%', borderRadius: 4, mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>Access your flashcards anywhere.</Typography>
            <Typography variant="body2">Multiple Devices</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#ff4d4d', height: '300px', width: '100%', borderRadius: 4, mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Typography variant="h6">Pro Plan</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>$10/month</Typography>
            <Typography variant="body2">Unlimited access to flashcards</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
