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
				<td colSpan={2} className="px-4 py-2 text-center text-gray-500">
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
			<tr key={item.key} className="bg-white hover:bg-gray-50 transition-colors">
				<td className="text-left px-4 py-2">
					<button
						onClick={() => handleQuestionClick(item.key)}
						className="hover:cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
					>{item.label}</button>
				</td>
				<td className="px-4 py-2 text-gray-700">
					{item.description || "No description available."}
				</td>
			</tr>
		))
	}</tbody>);
}
