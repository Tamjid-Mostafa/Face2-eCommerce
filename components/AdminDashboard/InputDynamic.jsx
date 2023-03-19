import React, { useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { HiPlus, HiPlusCircle } from 'react-icons/hi2';

const InputDynamic = ({ children }) => {
    const [inputs, setInputs] = useState([""]);

    const handleInputChange = (e, index) => {
        const newInputs = [...inputs];
        newInputs[index] = e.target.value;
        setInputs(newInputs);
        console.log(inputs)
    };

    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    return (
        <div className="mb-4">
            <h3
                className="block text-accent-7 bg-inherit text-sm font-bold mb-2"
                htmlFor="productTags"
            >
                {children}
            </h3>
            {inputs.map((input, index) => (
                <div key={index} className="flex my-2">
                    <input
                        type="text"
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-accent-7 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
                        value={input}
                        onChange={(e) => handleInputChange(e, index)}
                    />
                    {inputs.length >= 2 ?
                        <button button type="button" onClick={() => handleRemoveInput(index)}>
                            <HiOutlineX className='text-xl -ml-8'></HiOutlineX>
                        </button> : ""}
                    <button onClick={handleAddInput}><HiPlusCircle className="text-3xl ml-3" /></button>
                </div>
            ))
            }

        </div >
    );
};

export default InputDynamic;