import { use, useState } from "react";
import type { cardType } from "../Types/data_promise_types";
import { DisplayCard } from "./Display_card/displayCard";

interface dataPromiseProps {
    dataPromise: Promise<cardType[]>;
}

export function Explore_the_technologies({
    dataPromise
}: dataPromiseProps) {

    const cards = use(dataPromise);

    // Selected cards
    const [selectedCards, setSelectedCards] = useState<cardType[]>([]);


    // Add card
    const handleAdd = (card: cardType) => {


         const alreadyAdded = selectedCards.some(
        (selectedCard) => selectedCard.id === card.id
    );

    if (alreadyAdded) {
        return;
    }

        setSelectedCards([
            ...selectedCards,
            card
        ]);

    };


    // Remove card
    const handleRemove = (id: string) => {

        const remainingCards = selectedCards.filter(
            (card) => card.id !== id
        );

        setSelectedCards(remainingCards);

    };


    // Remove all
    const handleClearAll = () => {

        setSelectedCards([]);

    };


    return (
        <div className="container mx-auto">

            <div className="my-8 mb-4">

                <h1 className="font-bold text-4xl">
                    Explore The{" "}
                    <span className="text-[#cf4eb5]">
                        Technologist
                    </span>
                </h1>

                <p className="text-black/30">
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>


            <div className="flex">


                {/* LEFT SIDE */}

                <div className="grid grid-cols-3 gap-3 w-3/4 p-6">

                    {
                        cards.map((singleCard) => (

                            <DisplayCard
                                key={singleCard.id}
                                card={singleCard}
                                onAdd={handleAdd}
                                isAdded={selectedCards.some(
                                        (selectedCard) => selectedCard.id === singleCard.id
                                )}

                            />

                        ))
                    }

                </div>



                {/* RIGHT SIDE */}

                <div className="w-1/4 p-6">

                    <div className="border border-black/30 shadow p-4">

                        <h1 className="text-2xl text-black/80 font-bold">
                            Your Stack
                        </h1>


                        {
                            selectedCards.map((card) => (

                                <div
                                    key={card.id}
                                    className="flex justify-between items-center border-b py-3"
                                >

                                    <div className="flex items-center gap-2">

                                        <img
                                            src={card.icon}
                                            alt={card.name}
                                            className="w-8 h-8"
                                        />

                                        <p>{card.name}</p>

                                    </div>


                                    <button
                                        onClick={() =>
                                            handleRemove(card.id)
                                        }
                                        className="text-red-500"
                                    >
                                        ❌
                                    </button>

                                </div>

                            ))
                        }


                        <div className="flex justify-center">

                            <button
                                onClick={handleClearAll}
                                className="text-red-500 border border-red-400 rounded-xl p-2 px-10 my-4"
                            >
                                Remove All
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}