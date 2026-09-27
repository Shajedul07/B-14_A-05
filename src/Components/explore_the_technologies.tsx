import { use } from "react"
import type { cardType } from "../Types/data_promise_types";
import { DisplayCard } from "./Display_card/displayCard";

interface dataPromiseProps {
    dataPromise: Promise<cardType[]>
}
export function Explore_the_technologies({dataPromise}:dataPromiseProps) {
        const cards  = use(dataPromise);
        console.log(cards);
        


    return (
        <div className="container mx-auto">
                <div className="my-8 mb-4">
                <h1 className="font-bold  text-4xl">Explore The <span className="text-[#cf4eb5]">Technologist</span></h1>
                <p className="text-black/30">Pick one technology per category to build your ideal stack.</p>
                </div>

            <div className="flex">
                {/* Left Side */}
                <div className="grid grid-cols-3 gap-3 w-3/4 p-6">
                    {
                        cards.map((singleCard)=>(
                            <DisplayCard key ={singleCard.id} card ={singleCard} ></DisplayCard>
                        ))
                    }
                </div>

                {/* Right Side */}
                <div className="w-1/4 p-6">
                    <div className="border border-black/30 shadow p-4" >

                        <h1 className=" text-2xl text-black/80 font-bold">Your Stack</h1>
                        <div className="flex justify-center">
                            <button className="  text-red-500 border border-red-400 rounded-xl p-2 px-10 my-4">Remove All</button>
                        </div>
                    </div>
                </div>

            </div>    
        </div>
    )
}


                
