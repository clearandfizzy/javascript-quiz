'use client';

import React from "react";
import {config as dataConfig} from "@/data/config";
import {useQuestions} from "@/components/context/QuestionProvider";
import {useRouter} from "next/navigation";
import {urlConfig} from "@/url.config";

export const TableBody = () => {
	const {setQuestionKey} = useQuestions();
	const router = useRouter();

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

	const handleQuestionClick = (key: string) => {
		setQuestionKey(key);
		router.push(`${urlConfig.endPoints.questions}`);
	}

	return (<tbody>{
		dataConfig.map((item) => (
			<tr key={item.key} className="">
				<td className="text-left px-4 py-2">
					<button
						onClick={() => handleQuestionClick(item.key)}
						className="hover:cursor-pointer rounded bg-[var(--color-button)] text-white p-4 w-full transition-colors hover:bg-[var(--color-button-hover)]"
					>{item.label}</button>
				</td>
				<td className="px-4 py-2">
					{item.description || "No description available."}
				</td>
			</tr>
		))
	}</tbody>);
}
