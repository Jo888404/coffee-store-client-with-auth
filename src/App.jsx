
import { useLoaderData } from 'react-router'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Header from './components/Header';

function App() {

  const loadCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadCoffees);

  return (
    <div className='m-20'>

      <h1 className=' text-4xl font-bold text-center mb-8'>Our Popular Products:- {coffees.length}</h1>

      <Header></Header>
      

      <div className='grid md:grid-cols-2 gap-4 '>
        {
          coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees ={setCoffees}
          
          ></CoffeeCard>)
        }
      </div>

      

    </div>
  )
}

export default App
