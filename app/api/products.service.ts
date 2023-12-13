import axios from 'axios';
import { PostProduct, Product } from '../entities/product.entity';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
  );
  return response.data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
  );
  return response.data;
};

export const createProduct = async (product: PostProduct): Promise<Product> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    product,
  );
  return response.data;
};
