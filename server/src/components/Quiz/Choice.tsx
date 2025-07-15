import React from "react";

interface ChoiceProps {
    i: number;
    selected: number | undefined;
    answered: boolean;
    choose: (choiceIndex: number) => void;
    item: string;
}

export const Choice: React.FC<ChoiceProps> = ({ i, selected, answered, choose, item }) => {
    return (
        <label key={i} className="block cursor-pointer">
            <input
                type="radio"
                name="choice"
                value={i}
                checked={selected === i}
                disabled={answered}
                onChange={() => choose(i)}
                className="hidden peer"
            />
            <span
                className={`inline-block w-full px-4 py-3 rounded-lg border text-base transition
                                        peer-checked:bg-green-100 peer-checked:border-green-500
                                        peer-disabled:opacity-60
                                        bg-white border-gray-300 hover:bg-gray-50
                                    `}
            >{item}</span>
        </label>
    );
};
