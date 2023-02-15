import { useState } from 'react'
import './App.css'
import ArrayFilter from './components/arrayFilter';
import ArraySort from './components/ArraySort';
import ArrayReduce from './components/ArrayReduce';
import ArrayShow from './components/ArrayShow';

  function App() {

    const [componentToShow, setComponentToShow] = useState('filter');
    
    const arrayFilterHandler = () =>{
        setComponentToShow('filter');
    }
  
    const arrayReducedHandler = () =>{
      setComponentToShow('reduce');
  }
  
  const arraySortHandler = () =>{
    setComponentToShow('sort');
  }

  const arrayShowHandler = () =>{
    setComponentToShow('show');
  }
  
    return (
      <div className="App w-[50%] mx-auto py-5">
        <nav class="flex justify-center gap-5">
        <button onClick={arrayShowHandler} className="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Array Show</span>
    </span>
  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
  </button>
  
  <button onClick={arrayReducedHandler} className="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Array Reduce</span>
    </span>
  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
  </button>
  
  <button onClick={arraySortHandler} className="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Array Sort</span>
    </span>
  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
  </button>
  <button onClick={arrayFilterHandler} className="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Array Filter</span>
    </span>
  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
  </button>
  </nav>
  <section className='py-5'>
    {componentToShow == 'filter' && <ArrayFilter />}
    {componentToShow == 'reduce' && <ArrayReduce />}
    {componentToShow == 'sort' && <ArraySort /> }
    {componentToShow == 'show' && <ArrayShow /> }
  </section>
      </div>
    )
  }
  
  export default App
