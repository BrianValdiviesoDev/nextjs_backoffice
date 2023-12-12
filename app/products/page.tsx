'use client';

import { useEffect, useState } from 'react';
import { Product } from '../entities/product.entity';
import { getAllProducts } from '../api/products.service';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/navigation';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter()
  
  useEffect(() => {
    const getData = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    getData();
  }, []);
  return (
    <>
      <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography variant='h2'>
          Products
        </Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid container  justifyContent='flex-end'>
          <Button variant="contained" onClick={() => {router.push('/products/new')}}>
            Add product
          </Button>
          </Grid>
          </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>

                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <EditIcon onClick={() =>  router.push(`/products/${product._id}`)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableHead>
      </Table>

      
    </>
  );
}
