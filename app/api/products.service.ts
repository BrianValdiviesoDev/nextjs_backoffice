import axios from 'axios';
import { Product } from '../entities/product.entity';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
  );
  return response.data;
};
