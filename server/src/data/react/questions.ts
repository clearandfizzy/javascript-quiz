import {Question} from "@/types/questionType";

export const questions: Question[] = [
    // State Management (5)
    {
        id: 1,
        text: 'Which React hook allows complex state logic management similar to Redux patterns?',
        choices: ['useState', 'useReducer', 'useContext', 'useMemo'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>useReducer</strong>: manages complex state logic via reducer functions.</li>
      </ul>
    `
    },
    {
        id: 2,
        text: 'To share state across deeply nested components without prop drilling, which should you use?',
        choices: ['useState', 'useReducer', 'Context API', 'useCallback'],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>Context API</strong>: provides global-like state to any descendant component.</li>
      </ul>
    `
    },
    {
        id: 3,
        text: 'Which browser API can you use to sync state across multiple tabs?',
        choices: ['sessionStorage', 'localStorage', 'BroadcastChannel', 'IndexedDB'],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>BroadcastChannel</strong>: enables messaging between tabs of the same origin.</li>
      </ul>
    `
    },
    {
        id: 4,
        text: 'When state updates depend on the previous state value, which hook signature is preferred?',
        choices: [
            'setCount(count + 1)',
            'setCount(prev => prev + 1)',
            'useEffect(() => {}, [])',
            'useMemo(() => count + 1, [count])'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>setCount(prev => prev + 1)</strong>: safely updates based on prior state.</li>
      </ul>
    `
    },
    {
        id: 5,
        text: 'Which hook would you pair with Context to read context value in a component?',
        choices: ['useContext', 'useRef', 'useState', 'useLayoutEffect'],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>useContext</strong>: accesses the nearest matching Context value.</li>
      </ul>
    `
    },

    // useEffect Essentials (5)
    {
        id: 6,
        text: 'To avoid stale closures, where should all dependencies of an effect be declared?',
        choices: ['Inside the effect body', 'In the deps array', 'In useState', 'In useRef'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>In the deps array</strong>: React re-runs effect when any dep changes.</li>
      </ul>
    `
    },
    {
        id: 7,
        text: 'Which cleanup function pattern correctly clears a timer?',
        choices: [
            'return () => clearTimeout(id)',
            'clearTimeout(id)',
            'useCleanup(clearTimeout)',
            'return clearTimeout(id)'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>return () => clearTimeout(id)</strong>: unregisters timer on unmount or deps change.</li>
      </ul>
    `
    },
    {
        id: 8,
        text: 'To fetch data on mount only, how should you write useEffect?',
        choices: [
            'useEffect(fetchData)',
            'useEffect(fetchData, [])',
            'useEffect(() => { fetchData(); }, [])',
            'useEffect(() => fetchData())'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>useEffect(() => { fetchData(); }, [])</strong>: runs once after first render.</li>
      </ul>
    `
    },
    {
        id: 9,
        text: 'Which pattern prevents state updates on unmounted components in async effects?',
        choices: [
            'AbortController',
            'let mounted = true; if (mounted) setState()',
            'try/catch',
            'useLayoutEffect'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>let mounted = true; … if (mounted) setState()</strong>: checks before updating.</li>
      </ul>
    `
    },
    {
        id: 10,
        text: 'To add and remove an event listener in effect, what is needed?',
        choices: [
            'Add in effect, remove in return cleanup',
            'Add in cleanup, remove outside',
            'Add in component body',
            'No cleanup needed'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>Add in effect, remove in return cleanup</strong>: avoids leaks on unmount.</li>
      </ul>
    `
    },

    // Performance (5)
    {
        id: 11,
        text: 'Which HOC prevents re-rendering when props haven’t changed?',
        choices: ['React.lazy', 'React.memo', 'useMemo', 'useCallback'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>React.memo</strong>: shallowly compares props to skip updates.</li>
      </ul>
    `
    },
    {
        id: 12,
        text: 'To memoize a callback function between renders, use:',
        choices: ['useState', 'useMemo', 'useCallback', 'useRef'],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>useCallback</strong>: returns a memoized version of callback.</li>
      </ul>
    `
    },
    {
        id: 13,
        text: 'Which technique defers loading components until needed?',
        choices: ['useReducer', 'lazy loading', 'Context', 'debouncing'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>lazy loading</strong>: splits code and loads on demand.</li>
      </ul>
    `
    },
    {
        id: 14,
        text: 'To limit how often a fast-firing event handler runs, apply:',
        choices: ['throttling', 'debouncing', 'memoization', 'SSR'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>debouncing</strong>: delays invocation until events pause.</li>
      </ul>
    `
    },
    {
        id: 15,
        text: 'Rendering only visible list items uses:',
        choices: ['virtualization', 'pagination', 'filtering', 'hydration'],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>virtualization</strong>: renders viewport subset for performance.</li>
      </ul>
    `
    },

    // Forms (5)
    {
        id: 16,
        text: 'Controlled form inputs in React mean value is tied to:',
        choices: ['DOM only', 'component state', 'localStorage', 'Context'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>component state</strong>: input value comes from state and onChange.</li>
      </ul>
    `
    },
    {
        id: 17,
        text: 'Which library simplifies form state and validation?',
        choices: ['Formik', 'react-hook-form', 'Redux', 'Axios'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>react-hook-form</strong>: lightweight, performant form handling.</li>
      </ul>
    `
    },
    {
        id: 18,
        text: 'Dynamic fields in forms can cause issues when:',
        choices: [
            'keys change unexpectedly',
            'using controlled inputs',
            'using useEffect',
            'no cleanups'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>keys change unexpectedly</strong>: remounts inputs losing their state.</li>
      </ul>
    `
    },
    {
        id: 19,
        text: 'To handle async validation on submit, you should:',
        choices: [
            'setTimeout in onSubmit',
            'use async/await inside handler',
            'use useLayoutEffect',
            'useContext'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>use async/await inside handler</strong>: waits for validation promise.</li>
      </ul>
    `
    },
    {
        id: 20,
        text: 'Uncontrolled inputs rely on:',
        choices: ['refs', 'state', 'Context', 'reducers'],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>refs</strong>: read values directly from DOM elements.</li>
      </ul>
    `
    },

    // Error Handling (5)
    {
        id: 21,
        text: 'Which component catches rendering errors in its subtree?',
        choices: ['ErrorBoundary', 'Suspense', 'Profiler', 'Fragment'],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>ErrorBoundary</strong>: implements componentDidCatch to show fallback UI.</li>
      </ul>
    `
    },
    {
        id: 22,
        text: 'To catch rejected promises in an async effect, you should:',
        choices: [
            'add .catch on promise',
            'wrap in try/catch inside useEffect',
            'use ErrorBoundary',
            'useMemo'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>wrap in try/catch inside useEffect</strong>: handles async errors in effects.</li>
      </ul>
    `
    },
    {
        id: 23,
        text: 'For showing a fallback while lazy-loading, use:',
        choices: ['ErrorBoundary', 'Suspense', 'fallbackUI', 'Profiler'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>Suspense</strong>: accepts a fallback prop during code-split loads.</li>
      </ul>
    `
    },
    {
        id: 24,
        text: 'You should avoid uncaught errors by always:',
        choices: [
            'using error boundaries',
            'ignoring promise rejections',
            'never using async',
            'disabling strict mode'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>using error boundaries</strong>: prevents the entire app from crashing.</li>
      </ul>
    `
    },
    {
        id: 25,
        text: 'To report errors to an external service, integrate in:',
        choices: ['ErrorBoundary', 'Profiler', 'useEffect', 'Context'],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>ErrorBoundary</strong>: call service in componentDidCatch.</li>
      </ul>
    `
    },

    // Cross-tab + SSR Safe (5)
    {
        id: 26,
        text: 'Before accessing window.localStorage in SSR, you should:',
        choices: [
            'check typeof window !== "undefined"',
            'wrap in try/catch',
            'use useEffect',
            'no check needed'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>check typeof window !== "undefined"</strong>: ensures code runs only client-side.</li>
      </ul>
    `
    },
    {
        id: 27,
        text: 'Hydration mismatch errors often arise from:',
        choices: [
            'different server vs client markup',
            'missing dependencies',
            'unclosed tags',
            'wrong state'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>different server vs client markup</strong>: ensure deterministic render output.</li>
      </ul>
    `
    },
    {
        id: 28,
        text: 'In Safari private mode, localStorage may:',
        choices: [
            'throw QuotaExceededError',
            'work normally',
            'be null',
            'auto-clear'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>throw QuotaExceededError</strong>: handle exceptions when writing.</li>
      </ul>
    `
    },
    {
        id: 29,
        text: 'To avoid syncing in SSR, wrap event listeners in:',
        choices: ['useEffect', 'useLayoutEffect', 'useMemo', 'useCallback'],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>useEffect</strong>: runs only on the client after mount.</li>
      </ul>
    `
    },
    {
        id: 30,
        text: 'BroadcastChannel should be used inside:',
        choices: ['component body', 'useEffect', 'render', 'useMemo'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>useEffect</strong>: to set up and clean up channel listeners client-side.</li>
      </ul>
    `
    },

    // Security (5)
    {
        id: 31,
        text: 'To prevent XSS when rendering user HTML, you should:',
        choices: [
            'use dangerouslySetInnerHTML',
            'sanitize input first',
            'escape backticks',
            'encode URLs'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>sanitize input first</strong>: remove malicious scripts before rendering.</li>
      </ul>
    `
    },
    {
        id: 32,
        text: 'Storing JWT tokens in localStorage can risk:',
        choices: [
            'CSRF',
            'XSS-based token theft',
            'race conditions',
            'SSR errors'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>XSS-based token theft</strong>: scripts can read localStorage.</li>
      </ul>
    `
    },
    {
        id: 33,
        text: 'A more secure alternative to localStorage for auth tokens is:',
        choices: [
            'sessionStorage',
            'httpOnly cookies',
            'IndexedDB',
            'Context'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>httpOnly cookies</strong>: not accessible to JavaScript.</li>
      </ul>
    `
    },
    {
        id: 34,
        text: 'To avoid exposing API keys in client bundle, use:',
        choices: [
            'env vars in frontend',
            'server-side proxy',
            'inline scripts',
            'local JSON file'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>server-side proxy</strong>: keeps secrets on the server.</li>
      </ul>
    `
    },
    {
        id: 35,
        text: 'When fetching over HTTPS, ensure you also:',
        choices: [
            'disable CORS',
            'serve cookies secure flag',
            'use POST only',
            'minify JS'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>serve cookies secure flag</strong>: sends cookies only over HTTPS.</li>
      </ul>
    `
    },

    // Data Fetching (5)
    {
        id: 36,
        text: 'Which library helps manage server state and caching?',
        choices: ['Redux', 'React Query', 'Axios', 'mobx'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>React Query</strong>: handles fetching, caching, and updates automatically.</li>
      </ul>
    `
    },
    {
        id: 37,
        text: 'To avoid race conditions when refetching, you should:',
        choices: [
            'cancel previous requests',
            'use useMemo',
            'batch setState',
            'useContext'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>cancel previous requests</strong>: prevents outdated data overwrites.</li>
      </ul>
    `
    },
    {
        id: 38,
        text: 'SWR’s stale-while-revalidate strategy means:',
        choices: [
            'show cached data then update',
            'never revalidate',
            'always fetch twice',
            'batch requests'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>show cached data then update</strong>: UI is fast and stays fresh.</li>
      </ul>
    `
    },
    {
        id: 39,
        text: 'Preventing “zombie” requests in React Query uses:',
        choices: ['refetchOnWindowFocus', 'keepPreviousData', 'queryFn', 'mutationKey'],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>keepPreviousData</strong>: retains old data until new arrives.</li>
      </ul>
    `
    },
    {
        id: 40,
        text: 'For paginated data, which React Query feature is helpful?',
        choices: [
            'infinite queries',
            'parallel queries',
            'select option',
            'mutation cache'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>infinite queries</strong>: fetches pages as the user scrolls.</li>
      </ul>
    `
    },

    // Component Design (5)
    {
        id: 41,
        text: 'A good component responsibility is to:',
        choices: [
            'handle both UI and data logic',
            'be as large as possible',
            'be focused and reusable',
            'avoid props'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>be focused and reusable</strong>: single responsibility for clarity.</li>
      </ul>
    `
    },
    {
        id: 42,
        text: 'Separating UI and logic often uses:',
        choices: ['custom hooks', 'HOCs', 'inline styles', 'Context'],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>custom hooks</strong>: encapsulate logic, keeping components clean.</li>
      </ul>
    `
    },
    {
        id: 43,
        text: 'To avoid prop drilling, you might:',
        choices: [
            'useContext',
            'pass props manually',
            'duplicate state',
            'useMemo'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>useContext</strong>: provides data without passing through every level.</li>
      </ul>
    `
    },
    {
        id: 44,
        text: 'A “dumb” component is one that:',
        choices: [
            'uses Redux',
            'contains no hooks',
            'only renders UI from props',
            'has local state'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>only renders UI from props</strong>: has no side effects or logic.</li>
      </ul>
    `
    },
    {
        id: 45,
        text: 'Compound components pattern improves:',
        choices: [
            'bundle size',
            'logic reuse',
            'API ergonomics',
            'testing complexity'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>API ergonomics</strong>: offers flexible composition for users.</li>
      </ul>
    `
    },

    // TypeScript (5)
    {
        id: 46,
        text: 'To ensure a prop is one of a set of strings, use:',
        choices: ['any', 'string', 'enum', 'unknown'],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>enum</strong>: defines a set of named constants.</li>
      </ul>
    `
    },
    {
        id: 47,
        text: 'Avoiding the any type helps with:',
        choices: [
            'bundling speed',
            'type safety',
            'JSX parsing',
            'runtime performance'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>type safety</strong>: ensures compile-time checks catch errors.</li>
      </ul>
    `
    },
    {
        id: 48,
        text: 'To type a component that accepts children, use:',
        choices: [
            'React.FC<Props>',
            'any',
            'Function',
            'JSX.Element'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>React.FC<Props></strong>: includes the children prop by default.</li>
      </ul>
    `
    },
    {
        id: 49,
        text: 'Null-safety in TS can be enforced by:',
        choices: [
            'strictNullChecks',
            'noImplicitAny',
            'skipLibCheck',
            'jsxImportSource'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>strictNullChecks</strong>: flags potential null/undefined misuse.</li>
      </ul>
    `
    },
    {
        id: 50,
        text: 'A discriminated union uses:',
        choices: [
            'common literal prop',
            'generic any',
            'indexed types',
            'namespace imports'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>common literal prop</strong>: differentiates variants in a union type.</li>
      </ul>
    `
    }
];
