import React, { useState } from 'react';
import Taks from './Components/Taks';



const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch('http://localhost:3001/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email }),
    // });
    const res = await fetch('http://localhost:3001/');

    if (res.ok) {
      // const data = await response.json();
      
        console.log("FUNCIONA");
    }
  };

  return (
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white  rounded-lg shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest font-bold text-3xl">Todo List</h1>
            <div class="flex mt-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
                <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500" onClick={handleSubmit}>Add</button>
            </div>
        </div>
        <div>
          <Taks/>
          <Taks/> 
        </div>
    </div>
</div>
  );
};

export default Home;
