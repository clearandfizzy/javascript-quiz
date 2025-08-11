'use client';

import React from "react";
import {config as dataConfig} from "@/data/config";
import {useOnKeyDown} from "@/components/landing/lib/useOnKeyDown";
import {useQuestionClick} from "@/components/landing/lib/useQuestionClick";

export const TableBody = () => {
	const {onKeyDown} = useOnKeyDown();
	const {onQuestionClick} = useQuestionClick();

	if (!dataConfig || dataConfig.length === 0) {
		return (
			<tbody>
			<tr>
				<td colSpan={2} className="px-4 py-2 text-center text-[var(--color-header)]">
					No data available.
				</td>
			</tr>
			</tbody>
		);
	}

	return (<tbody>{
		dataConfig.map((item, index) => (
			<tr key={item.key}
				onKeyDown={(e) => onKeyDown(e, item.key)}
				tabIndex={index + 1}
				className="focus-ring">
				<td tabIndex={-1}
					className="text-left px-4 py-2 w-[250]">
					<button
						tabIndex={-1}
						onClick={() => onQuestionClick(item.key)}
						onKeyDown={(e) => onKeyDown(e, item.key)}
						className="hover:cursor-pointer rounded bg-[var(--color-button)] text-white p-4 w-full transition-colors hover:bg-[var(--color-button-hover)] "
					>{item.label}</button>
				</td>
				<td className="px-4 py-2">
					{item.description || "No description available."}
				</td>
			</tr>
		))
	}</tbody>);
}
