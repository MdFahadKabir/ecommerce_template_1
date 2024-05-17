import ProductCard from '@/components/flashSaleProductCard/ProductCard';
import React from 'react';

const FlashSales = () => {
  return (
    <div className='min-h-[60vh]'>
      <h2 className='text-center text-3xl font-semibold'>Flash Sales</h2>
      <ProductCard></ProductCard>
    </div>
  );
};

export default FlashSales;