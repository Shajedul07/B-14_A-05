import type { cardType } from "../Types/data_promise_types"

type listProps = {
    Cards : cardType[]
}


export function List({Cards}:listProps) {
    
    return (
        <div className="border border-black/20 h-[25%]  p-2.5">
            <h1 className="font-bold">Your Stack</h1>
            <p className="text-black/40"> No Technologist selected yet</p>
            <h1 className="border border-dotted border-black/40">Your Stack is empty</h1>
            <button>Clear All</button>
        </div>

    )
}