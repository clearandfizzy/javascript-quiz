'use client';
import React from 'react';
import {config as dataConfig} from "@/data/config";
import {useOnKeyDown} from "@/components/landing/lib/useOnKeyDown";
import {useQuestionClick} from "@/components/landing/lib/useQuestionClick";

export const List = () => {
	const {onKeyDown} = useOnKeyDown();
	const {onQuestionClick} = useQuestionClick();

	return (<>
		{
			dataConfig.map((item, index) => (
				<div key={index}
					 onKeyDown={(e) => onKeyDown(e)}
					 onClick={() => onQuestionClick(item.key)}
					 tabIndex={index + 1}
					 className={'grid grid-cols-1 md:grid-cols-3 gap-4 p-4 focus-ring-hover focus-ring-active'}>
					<div className={'col-span-1'} key={item.key}>
						<button
							tabIndex={-1}
							onClick={() => onQuestionClick(item.key)}
							onKeyDown={(e) => onKeyDown(e)}
							className="hover:cursor-pointer rounded bg-[var(--color-button)] text-white p-4 w-full transition-colors hover:bg-[var(--color-button-hover)] "
						>{item.label}</button>
					</div>
					<div className={'col-span-2'}>
						<p className="px-4">
							{item.description || "No description available."}
						</p>
					</div>
				</div>
			))
		}
	</>);
}