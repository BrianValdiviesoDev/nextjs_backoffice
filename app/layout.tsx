'use client'
import Sidebar from './components/sidebar';
import { ThemeProvider } from '@emotion/react';
import { PaperbaseTheme } from './theme/paperbase';
import Header from './components/header';
import './global.scss';
import { Box, CssBaseline } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const drawerWidth = 256;
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={PaperbaseTheme}>

        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          <div className="content">{children}</div>
          </Box>

        </Box>
      </Box>


      
        </ThemeProvider>
      </body>
    </html>
  );
}
