'use client';
import Sidebar from './components/sidebar';
import { ThemeProvider } from '@emotion/react';
import { PaperbaseTheme } from './theme/paperbase';
import Header from './components/header';
import { Box, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Products from './products/page';
import { useAuthStore } from './stores/auth.store';
import Login from './login/page';
interface WithChildrenProps {
  children: React.ReactNode;
}

export default function App({ children }: WithChildrenProps) {
  const { user } = useAuthStore();
  const drawerWidth = 256;
  return (
    <>
      {user ? (
        <>
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
                <Box
                  component="main"
                  sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
                >
                  <div className="content">
                    {children ? children : <Products />}
                  </div>
                </Box>
              </Box>
            </Box>

            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ThemeProvider>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}
