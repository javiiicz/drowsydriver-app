import React, { useRef, useState, useEffect } from 'react';

const Camera = () => {

    const handleButtonClick = async () => {
        try {
            const response = await fetch('http://localhost:5000/execute', {
                method: 'POST', // Use POST to call the endpoint
                headers: {
                    'Content-Type': 'application/json', // Specify the content type
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
        <div className='p-[5%]'>
            <h2 className='text-xl'>Try it Out</h2>
            <button onClick={handleButtonClick}>Execute</button>
        </div>
    );
};

export default Camera;
