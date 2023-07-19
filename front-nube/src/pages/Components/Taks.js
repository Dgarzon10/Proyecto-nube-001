import React, { useState } from 'react';

export default function Taks() {

    return(
        <>
        <div class="flex mb-4 items-center">
                <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-400">Done</button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-600">Remove</button>
            </div>
        </>

    );




};