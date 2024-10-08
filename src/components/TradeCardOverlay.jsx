import React from 'react';
import { Box, Typography, Card, CardContent, IconButton, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TradeCardOverlay = ({ card, onClose }) => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight white tint
      backdropFilter: 'blur(10px)', // Blur effect
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1300,
      padding: '20px',
    }}
  >
    <Card
      sx={{
        maxWidth: '600px',
        width: '100%',
        height: '95vh', // Fixed height
        borderRadius: '20px',
        padding: '15px',
        backgroundColor: card.color,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Row: Close Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          top: 25,
          right: 15,
        }}
      >
        <IconButton onClick={onClose} sx={{ mr: 1 }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Emoji */}
      <Box
        sx={{
          position: 'absolute',
          top: 18,
          left: 30,
          fontSize: '3rem',
        }}
      >
        {card.emoji}
      </Box>

      {/* Card Content with Scrollable Area */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto', // Enable scrolling for content
          paddingTop: '80px', // Space for the emoji and buttons
          paddingBottom: '40px', // Space for the fixed time and tags
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {card.reason}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip
            label={card.instrument}
            size="small"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              fontWeight: 'bold',
              fontSize: '0.75rem',
            }}
          />
          <Chip
            label={card.profitLoss}
            size="small"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              fontWeight: 'bold',
              fontSize: '0.75rem',
            }}
          />
          <Chip
            label={card.entryPoint}
            size="small"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              fontSize: '0.75rem',
            }}
          />
          <Chip
            label={card.exitPoint}
            size="small"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              fontSize: '0.75rem',
            }}
          />
          <Chip
            label={card.positionSize}
            size="small"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.7)',
              fontSize: '0.75rem',
            }}
          />
        </Box>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {card.description}
        </Typography>
      </CardContent>

      {/* Fixed Time and Tags */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          right: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="caption"
          sx={{ display: 'block', mb: 1, color: 'text.secondary' }}
        >
          {card.time}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {card.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.7)',
                fontSize: '0.7rem',
                height: '20px',
              }}
            />
          ))}
        </Box>
      </Box>
    </Card>
  </Box>
);

export default TradeCardOverlay;
