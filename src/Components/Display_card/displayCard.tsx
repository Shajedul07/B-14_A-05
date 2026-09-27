import type { cardType } from "../../Types/data_promise_types"

interface cardProps {
    card: cardType
}
export function DisplayCard({ card }: cardProps) {

    return (
        <div className="card border border-black/20 shadow rounded p-4">
            {/* Left Side */}
            <div>
                <div className="flex justify-between">

                    <div>
                        <img
                            src={card.icon}
                            alt="card_image"
                            className="h-10 w-10"
                            />
                    </div>

                    <div className="">{card.badge}</div>

                </div>

                <div className="font-bold text-xl">{card.name} </div>

                <p className="text-black/40">{card.description}</p>

                <div className="flex justify-between">
                    <p className="bg-gray-100 p-1  border border-black/2 rounded" >{card.category}</p>
                    <p>{card.difficulty}</p>
                    <p>⭐{card.rating}</p>
                </div>

                <button className="btn text-white bg-black w-full p-2.5 border rounded-2xl ">Add to Stack</button>
            </div>
            {/* Right Side */}
            <h1>Your Stack</h1>
        </div>
    )
}

            