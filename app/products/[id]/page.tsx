'use client'
import { useEffect, useState } from "react";
import { Product } from "../../entities/product.entity";

export default function ProductForm({ params }: { params: { id: string } }) {
  const [productId, setProductId] = useState<string>(params.id);
  const [product, setProduct] = useState<Product>()
  useEffect(()=>{
    const getData= async ()=>{
      if(productId!=='new'){

      }
    }
  },[productId])


  return <>
  ProductForm: {productId}
  
  </>;
}
