import React from 'react';


export default function Pagestitles({ text }) {
  return (
    <div className=" bg-[#ffeeee] h-[100px] flex justify-center items-center mt-[56px]">
      <h2 className={ `text-center font-bold text-[22px] ` }>{text}</h2>
    </div>
  );
}