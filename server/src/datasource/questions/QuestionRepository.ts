import {Question} from "@/types/QuestionType";

type getByKeyType = (key: string) => Promise<Question[]>;

export const getByKey: getByKeyType = async () => {
	return new Promise((resolve) => {
		resolve([{
			id: 1,
			text: 'What is the output of typeof null in JavaScript?',
			choices: ['null', 'object', 'undefined', 'boolean'],
			correctIndex: 1,
			explanation: `
<ul>
  <li><strong>object</strong>: JS quirk—typeof null reports "object".</li>
</ul>
`
		},
			{
				id: 2,
				text: 'Which array method adds one or more elements to the end?',
				choices: ['pop', 'push', 'shift', 'unshift'],
				correctIndex: 1,
				explanation: `
<ul>
  <li><strong>push</strong>: adds items to the end.</li>
  <li>pop: removes the last item.</li>
  <li>shift: removes the first item.</li>
  <li>unshift: adds items to the front.</li>
</ul>
`
			}]);
	});
}