import React from 'react';
import { Input } from "@nextui-org/react";

export const CustomInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="relative w-full">
      <Input
        type={type}
        label={placeholder}
        value={value}
        onChange={onChange}
        id={placeholder}
        
        className=' overflow-hidden rounded-lg bg-transparent'
      />
    </div>
  );
};
