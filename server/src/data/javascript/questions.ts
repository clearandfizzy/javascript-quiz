import {Question} from "@/types/questionType";

export const questions: Question[] = [
    {
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
    },
    {
        id: 3,
        text: 'What does [] + [] evaluate to in JS?',
        choices: ['""', '0', '[]', 'NaN'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>""</strong>: two empty arrays become an empty string.</li>
</ul>
`
    },
    {
        id: 4,
        text: 'Which keyword declares a block-scoped variable?',
        choices: ['var', 'let', 'const', 'function'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>let</strong>: declares a variable visible only inside its block.</li>
</ul>
`
    },
    {
        id: 5,
        text: 'Which is a truthy value?',
        choices: ['0', '""', 'null', '"false"'],
        correctIndex: 3,
        explanation: `
<ul>
  <li><strong>"false"</strong>: any non-empty string counts as truthy.</li>
</ul>
`
    },
    {
        id: 6,
        text: 'What is the result of 2 == "2"?',
        choices: ['true', 'false', 'TypeError', 'undefined'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>true</strong>: == does loose comparison, converting types first.</li>
</ul>
`
    },
    {
        id: 7,
        text: 'What about 2 === "2"?',
        choices: ['true', 'false', 'TypeError', 'undefined'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>false</strong>: === checks both type and value, so number ≠ string.</li>
</ul>
`
    },
    {
        id: 8,
        text: 'Which method creates a new array with elements that pass a test?',
        choices: ['map', 'filter', 'reduce', 'forEach'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>filter</strong>: builds a new array containing only items that match the condition.</li>
</ul>
`
    },
    {
        id: 9,
        text: 'What does Promise.resolve(5).then(x => x * 2) return?',
        choices: ['5', '10', 'Promise<5>', 'Promise<10>'],
        correctIndex: 3,
        explanation: `
<ul>
  <li><strong>Promise&lt;10&gt;</strong>: the .then callback produces a new promise resolving to 10.</li>
</ul>
`
    },
    {
        id: 10,
        text: 'Which lifecycle phase does a JS promise run callbacks in?',
        choices: ['call stack', 'microtask queue', 'macrotask queue', 'render queue'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>microtask queue</strong>: promise callbacks run right after the current stack finishes.</li>
</ul>
`
    },
    {
        id: 11,
        text: 'What is the default value of an uninitialized variable?',
        choices: ['0', 'null', 'undefined', 'NaN'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>undefined</strong>: declared but not assigned variables start as undefined.</li>
</ul>
`
    },
    {
        id: 12,
        text: 'Which operator spreads elements of an iterable?',
        choices: ['...', '::', '**', '&&'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>...</strong>: the spread operator expands an iterable into individual elements.</li>
</ul>
`
    },
    {
        id: 13,
        text: 'What’s the output of (() => this.value).call({ value: 42 })?',
        choices: ['42', 'undefined', 'TypeError', '""'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>undefined</strong>: arrow functions don’t bind their own this, so call() has no effect.</li>
</ul>
`
    },
    {
        id: 14,
        text: 'Which of these is not a JS primitive?',
        choices: ['string', 'number', 'object', 'symbol'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>object</strong>: objects are complex types, not primitives.</li>
</ul>
`
    },
    {
        id: 15,
        text: 'How do you define an interface in TypeScript?',
        choices: ['type X = {}', 'interface X {}', 'class X {}', 'enum X {}'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>interface X {}</strong>: interfaces describe object shapes in TS.</li>
</ul>
`
    },
    {
        id: 16,
        text: 'What does the ? after a TS property name denote?',
        choices: ['optional property', 'nullable', 'readonly', 'private'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>optional property</strong>: the property may be omitted when creating the object.</li>
</ul>
`
    },
    {
        id: 17,
        text: 'Which TS type accepts any value but still type-checks usage?',
        choices: ['unknown', 'any', 'never', 'void'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>unknown</strong>: accepts all values but forces you to check before using.</li>
</ul>
`
    },
    {
        id: 18,
        text: 'What’s the type of Symbol() in TS?',
        choices: ['string', 'symbol', 'Symbol', 'object'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>symbol</strong>: Symbol() produces a unique symbol primitive.</li>
</ul>
`
    },
    {
        id: 19,
        text: 'Which utility type makes all props of T readonly?',
        choices: ['Partial<T>', 'Required<T>', 'Readonly<T>', 'Pick<T>'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>Readonly&lt;T&gt;</strong>: converts every property of T into a read-only one.</li>
</ul>
`
    },
    {
        id: 20,
        text: 'What’s the TS way to combine types A and B into one?',
        choices: ['A & B', 'A | B', '&<A,B>', '|<A,B>'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>A &amp; B</strong>: intersection type that has all properties of both A and B.</li>
</ul>
`
    },
    {
        id: 21,
        text: 'Which Generic constraint ensures T has a length?',
        choices: ['T extends {}', 'T extends any[]', 'T extends { length: number }', 'T extends object'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>T extends { length: number }</strong>: enforces a length property on T.</li>
</ul>
`
    },
    {
        id: 22,
        text: 'What’s the output of 0.1 + 0.2 === 0.3?',
        choices: ['true', 'false', 'TypeError', 'undefined'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>false</strong>: floating-point math isn’t exact, so they don’t match exactly.</li>
</ul>
`
    },
    {
        id: 23,
        text: 'Which method executes a reducer on array elements?',
        choices: ['reduce', 'filter', 'map', 'flatMap'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>reduce</strong>: runs a function on each item to boil the array down to one value.</li>
</ul>
`
    },
    {
        id: 24,
        text: 'How to stop further propagation of an event?',
        choices: ['preventDefault()', 'stopImmediatePropagation()', 'stopPropagation()', 'cancel()'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>stopPropagation()</strong>: halts the event from bubbling up the DOM.</li>
</ul>
`
    },
    {
        id: 25,
        text: 'Which is NOT a valid TS access modifier?',
        choices: ['public', 'private', 'protected', 'internal'],
        correctIndex: 3,
        explanation: `
<ul>
  <li><strong>internal</strong>: TS only supports public, private, and protected.</li>
</ul>
`
    },
    {
        id: 26,
        text: 'What does as keyword do in TS?',
        choices: ['type assertion', 'runtime cast', 'module alias', 'import rename'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>type assertion</strong>: tells TS to treat a value as a specific type without changing it at runtime.</li>
</ul>
`
    },
    {
        id: 27,
        text: 'What’s the return type of an async function by default?',
        choices: ['T', 'Promise<T>', 'void', 'async<T>'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>Promise&lt;T&gt;</strong>: async functions always return a promise.</li>
</ul>
`
    },
    {
        id: 28,
        text: 'Which loop is guaranteed to call the body at least once?',
        choices: ['for', 'while', 'do…while', 'for…of'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>do…while</strong>: checks the condition after running the loop body once.</li>
</ul>
`
    },
    {
        id: 29,
        text: 'What value does parseInt("08") return in modern JS?',
        choices: ['8', 'NaN', '0', 'undefined'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>8</strong>: parseInt treats "08" as decimal, giving 8.</li>
</ul>
`
    },
    {
        id: 30,
        text: 'Which keyword creates a copy of an object’s properties?',
        choices: ['Object.assign', 'clone()', 'copy()', 'spread (`{...}`)'],
        correctIndex: 3,
        explanation: `
<ul>
  <li><strong>spread</strong>: copies properties via <code>{...}</code> syntax.</li>
</ul>
`
    },
    {
        id: 31,
        text: 'What does void 0 evaluate to?',
        choices: ['0', 'undefined', 'null', 'NaN'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>undefined</strong>: void 0 always produces undefined.</li>
</ul>
`
    },
    {
        id: 32,
        text: 'How do you declare a tuple in TS?',
        choices: ['[string, number]', 'array<string, number>', 'tuple<string, number>', '<string, number>'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>[string, number]</strong>: tuple literal syntax in TypeScript.</li>
</ul>
`
    },
    {
        id: 33,
        text: 'Which keyword binds this permanently?',
        choices: ['bind', 'call', 'apply', 'arrow'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>bind</strong>: fixes the this context for a function.</li>
</ul>
`
    },
    {
        id: 34,
        text: 'What is a “closure”?',
        choices: ['Function inside object', 'Function with access to its scope', 'Global function', 'Anonymous function'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>Function with access to its scope</strong>: retains access to variables where it was defined.</li>
</ul>
`
    },
    {
        id: 35,
        text: 'Which of these is NOT a Promise state?',
        choices: ['pending', 'fulfilled', 'rejected', 'failed'],
        correctIndex: 3,
        explanation: `
<ul>
  <li><strong>failed</strong>: valid states are pending, fulfilled, or rejected.</li>
</ul>
`
    },
    {
        id: 36,
        text: 'What’s the purpose of export default?',
        choices: ['Named export', 'Module side-effect', 'Primary export of module', 'Namespace export'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>Primary export of module</strong>: marks the main value exported by the file.</li>
</ul>
`
    },
    {
        id: 37,
        text: 'Which TS feature enforces the shape of an object?',
        choices: ['enum', 'interface', 'namespace', 'module'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>interface</strong>: defines the structure objects must follow in TS.</li>
</ul>
`
    },
    {
        id: 38,
        text: 'What’s the output of typeof NaN?',
        choices: ['number', 'NaN', 'undefined', 'object'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>number</strong>: NaN is considered a number by JavaScript.</li>
</ul>
`
    },
    {
        id: 39,
        text: 'Which operator returns the right-hand value if left is null/undefined?',
        choices: ['||', '&&', '??', '?:'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>??</strong>: nullish coalescing operator handles null/undefined only.</li>
</ul>
`
    },
    {
        id: 40,
        text: 'How to mark a class property as read-only in TS?',
        choices: ['protected', 'readonly', 'const', 'immutable'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>readonly</strong>: prevents reassignment of the property after initialization.</li>
</ul>
`
    },
    {
        id: 41,
        text: 'Which built-in object pairs keys to values and preserves insertion order?',
        choices: ['Object', 'Map', 'WeakMap', 'Set'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>Map</strong>: maintains key-value pairs in insertion order.</li>
</ul>
`
    },
    {
        id: 42,
        text: 'What does JSX compile to?',
        choices: ['HTML strings', 'React.createElement calls', 'Direct DOM nodes', 'Template literals'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>React.createElement calls</strong>: JSX is transformed into these function calls.</li>
</ul>
`
    },
    {
        id: 43,
        text: 'Which TS type extracts the keys of another type?',
        choices: ['Record<T>', 'Pick<T>', 'keyof T', 'Omit<T>'],
        correctIndex: 2,
        explanation: `
<ul>
  <li><strong>keyof T</strong>: produces a union of the property names of T.</li>
</ul>
`
    },
    {
        id: 44,
        text: 'What’s the value of ([].length = 5, [].length)?',
        choices: ['5', '0', 'undefined', 'Error'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>0</strong>: the second empty array’s length remains zero.</li>
</ul>
`
    },
    {
        id: 45,
        text: 'Which method returns a shallow copy of a portion of an array?',
        choices: ['splice', 'slice', 'split', 'map'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>slice</strong>: extracts a section into a new array without altering the original.</li>
</ul>
`
    },
    {
        id: 46,
        text: 'What is a “mapped type” in TS?',
        choices: ['Type with conditional properties', 'Type generated by looping over keys', 'Type alias', 'Interface extension'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>Type generated by looping over keys</strong>: creates new types by iterating over property names.</li>
</ul>
`
    },
    {
        id: 47,
        text: 'Which value is returned by {} + {} in JS?',
        choices: ['"[object Object][object Object]"', '"[object Object]"', '"{}{}"', 'NaN'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>"[object Object]"</strong>: each object turns into "[object Object]" when added.</li>
</ul>
`
    },
    {
        id: 48,
        text: 'How do you define a generic function in TS?',
        choices: ['function foo<T>(arg: T): T {}', 'function foo(arg: T): T {}', 'function<T> foo(arg: T) {}', 'def foo<T>(arg: T): T {}'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>function foo&lt;T&gt;(arg: T): T {}</strong>: TS syntax for generic functions.</li>
</ul>
`
    },
    {
        id: 49,
        text: 'Which operator checks existence of a property in an object?',
        choices: ['in', 'hasOwnProperty', 'exists', '?.'],
        correctIndex: 0,
        explanation: `
<ul>
  <li><strong>in</strong>: tests whether the given property key is present in the object.</li>
</ul>
`
    },
    {
        id: 50,
        text: 'What’s the TS utility to make all properties optional?',
        choices: ['Readonly<T>', 'Partial<T>', 'Required<T>', 'Pick<T>'],
        correctIndex: 1,
        explanation: `
<ul>
  <li><strong>Partial&lt;T&gt;</strong>: converts every property of T into an optional one.</li>
</ul>
`
    }
];
