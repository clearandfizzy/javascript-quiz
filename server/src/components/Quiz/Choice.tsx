import React from "react";

interface ChoiceProps {
    index: number;
    selected: number | undefined;
    answered: boolean;
    choose: (choiceIndex: number) => void;
    item: string;
}

export const Choice: React.FC<ChoiceProps> = ({index, selected, answered, choose, item}) => {
    return (
        <label key={index} className="block cursor-pointer">
            <input
                type="radio"
                name="choice"
                value={index}
                checked={selected === index}
                disabled={answered}
                onChange={() => choose(index)}
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
