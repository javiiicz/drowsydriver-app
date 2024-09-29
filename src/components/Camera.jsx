import React, { useRef, useState, useEffect } from 'react';

const Camera = () => {

    const handleButtonClick = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/execute', {
                method: 'POST', // Use POST to call the endpoint
                headers: {
                    'Content-Type': 'application/json', 
                    'Access-Control-Allow-Origin': '*'// Specify the content type
                },
                body: JSON.stringify({ /* any data you want to send */ }), // Send data if needed
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Response from Flask:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className='flex flex-row items-center justify-center p-[5%] '>
            <div className='text-center text-3xl font-bold bg-gray-800 p-4 rounded '>
                <button onClick={handleButtonClick} className='text-white'>Try it Out</button>
            </div>
        </div>
    );
};

export default Camera;
