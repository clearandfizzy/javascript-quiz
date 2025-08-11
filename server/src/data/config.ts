import {DataConfigType} from "@/types/DataConfigType";

export const config: Array<DataConfigType> = [
	{key: 'javascript', label: 'JavaScript', path: '@/data/javascript/questions', questions: [], description: 'JavaScript is a versatile programming language commonly used for web development.'},
	{key: 'tailwind', label: 'Tailwind CSS', path: '@/data/tailwind/questions', questions: [], description: 'Tailwind CSS is a utility-first CSS framework for creating custom designs.'},
	{key: 'react', label: 'React', path: '@/data/react/questions', questions: [], description: 'React is a JavaScript library for building user interfaces, particularly single-page applications.'},
	{key: 'magento2', label: 'Magento 2', path: '@/data/magento2/questions', questions: [], description: 'Magento 2 is an open-source e-commerce platform written in PHP, widely used for online stores.'},
	{key: 'flowers', label: 'European Flowers', path: '@/data/flowers/questions', questions: [], description: `European flowers are diverse and beautiful, ranging from wildflowers to cultivated varieties found across Europe.`},
	{key: 'trees', label: 'European Trees', path: '@/data/trees/questions', questions: [], description: `Learn to identify European trees. They include a wide variety of species, each with unique characteristics and ecological importance.`},
];
