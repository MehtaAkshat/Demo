import React from 'react';

const Input = (props)  => {
    const {name , type, lable} = props;
    return (
        <>
            {lable}
            <input type={type} name={name} />
        </>
    );
};

export default Input;