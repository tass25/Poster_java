import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, votes, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();
  
   console.log("product",product)

  const handleNavigate=()=>{
    navigate(`/product/${product?.id || product?._id || 2}`)
  }

  return (
   <div onClick={handleNavigate} className='productCard w-[15rem] border m-3 transition-all cursor-pointer '>
    <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        <p  className='font-bold opacity-60'>{product.votes}</p>
            <p className=''>{product.title}</p>
        
        <p className='font-semibold opacity-50'>{product.color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'> TND {product.discountedPrice}</p>
            <p className='opacity-50 line-through'> TND {product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
        </div>
        
    </div>
   </div>
  );
};

export default ProductCard;
