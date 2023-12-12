'use client'
import { Box, Divider, Drawer, DrawerProps, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import ReviewsIcon from '@mui/icons-material/Reviews';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupIcon from '@mui/icons-material/Group';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useRouter } from 'next/navigation';

export default function Sidebar(props: DrawerProps) {
  const { ...other } = props;
  const router = useRouter()

  const categories = [
    {
      id: 'Scrapper',
      children: [
        {
          id: 'Products',
          icon: <CategoryIcon />,
          url: '/products',
        },
        { id: 'Reviews', icon: <ReviewsIcon />, url: '/reviews' },
        { id: 'Requests', icon: <FormatListBulletedIcon />, url: '/requests' },
      ],
    },
    {
      id: 'Users',
      children: [
        { id: 'Users', icon: <GroupIcon /> , url: '/users'},
        { id: 'Companies', icon: <ApartmentIcon />, url: '/companies' },
      ],
    },
  ];

  const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
      bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
  };
  
  const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
  };
  
  return (
    <>
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{...item, ...itemCategory,fontSize: 22, color: '#fff' }}>
          Reviews Hub
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map((category) => (
              <ListItem disablePadding key={category.id}>
                <ListItemButton sx={item} onClick={()=>{router.push(category.url)}}>
                  <ListItemIcon>{category.icon}</ListItemIcon>
                  <ListItemText>{category.id}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
     
    </>
  );
}
