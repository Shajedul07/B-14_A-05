import { Suspense } from "react";
import { Explore_the_technologies } from "./Components/explore_the_technologies";
import { Hero } from "./Components/Hero";
import { Nav } from "./Components/Nav";
import type { cardType } from "./Types/data_promise_types";


export const dataPromise = async():Promise<cardType[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

// const dataPromise = dataFetch();


function App(){

 

  return(
    <>
    <Nav/>
    <Hero/>
    
    <Suspense fallback ={<div>Please Wait...</div>}>
      <Explore_the_technologies  dataPromise = {dataPromise()} ></Explore_the_technologies>
    </Suspense>
   </>
  )
}

export default App;
    
    
  

