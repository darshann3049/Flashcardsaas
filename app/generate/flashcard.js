'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const FlashCard = ({ front, back, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      sx={{
        perspective: '1000px',
        width: '100%',
        height: '200px', 
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color, // Set background color based on prop
          }}
        >
          <CardContent>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '1rem', textAlign: 'center' }}>
              {front}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color, // Set background color based on prop
          }}
        >
          <CardContent>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '1rem', textAlign: 'center' }}>
              {back}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FlashCard;