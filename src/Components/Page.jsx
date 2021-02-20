import React from "react";
import MyForm from './Form'
import MyButton from './Button'

const Page = ({ title }) =>
    <>
        <h1>{title}</h1>
       <MyForm/>
        {/* <MyButton btnName='click 1st' />
        <MyButton btnName='click 2st' />
        <MyButton btnName='click 3rd' /> */}
    </>

export default Page;
