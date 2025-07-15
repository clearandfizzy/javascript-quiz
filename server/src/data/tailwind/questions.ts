import {Question} from "@/types/questionType";

export const questions: Question[] = [
    {
        id: 1,
        text: 'In Tailwind CSS, what does the utility class `p-4` apply?',
        choices: [
            'padding: 1rem',
            'padding: 4px',
            'margin: 1rem',
            'font-size: 1.5rem',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>p-4</strong>: applies padding of 1rem (16px) on all sides.</li>
        <li>padding: 4px is not a default scale; use p-1 for 0.25rem.</li>
        <li>margin: 1rem would be m-4, not p-4.</li>
        <li>font-size: 1.5rem uses text-xl, not p-4.</li>
      </ul>
    `,
    },
    {
        id: 2,
        text: 'Which Tailwind CSS utility sets an element’s display to flex?',
        choices: [
            'd-flex',
            'flex',
            'display-flex',
            'flex-container',
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li>d-flex is from Bootstrap, not Tailwind.</li>
        <li><strong>flex</strong>: sets display: flex in Tailwind.</li>
        <li>display-flex isn’t a Tailwind class.</li>
        <li>flex-container is not defined in Tailwind’s utilities.</li>
      </ul>
    `,
    },
    {
        id: 3,
        text: 'How do you apply a slate-200 background on hover in Tailwind CSS?',
        choices: [
            'hover:bg-slate-200',
            'bg-slate-200:hover',
            'hover:sbg-slate-200',
            'bg-hover-slate-200',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>hover:bg-slate-200</strong>: applies bg-slate-200 on hover.</li>
        <li>bg-slate-200:hover is not valid syntax.</li>
        <li>hover:sbg-slate-200 is malformed.</li>
        <li>bg-hover-slate-200 does not exist in Tailwind.</li>
      </ul>
    `,
    },
    {
        id: 4,
        text: 'Which prefix makes `text-xl` apply at the medium (md) breakpoint?',
        choices: [
            'md:text-xl',
            'text-xl-md',
            'text-md:text-xl',
            'xl:text-md',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>md:text-xl</strong>: applies text-xl at ≥768px.</li>
        <li>text-xl-md is not recognized by Tailwind.</li>
        <li>text-md:text-xl uses wrong order of prefix.</li>
        <li>xl:text-md applies text-md at ≥1280px.</li>
      </ul>
    `,
    },
    {
        id: 5,
        text: 'How do you set an element’s width to exactly 200px using arbitrary values?',
        choices: [
            'w-200',
            'w-[200px]',
            'width-[200]',
            'w-{200px}',
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li>w-200 is not a default utility.</li>
        <li><strong>w-[200px]</strong>: uses arbitrary value syntax.</li>
        <li>width-[200] is invalid syntax.</li>
        <li>w-{200px} is not supported by Tailwind.</li>
      </ul>
    `,
    },
    {
        id: 6,
        text: 'What does the `gap-4` utility set in Tailwind CSS?',
        choices: [
            'gap: 1rem',
            'gap: 4px',
            'grid-gap: 4',
            'space-between: 4',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>gap-4</strong>: sets gap of 1rem (16px) between items.</li>
        <li>gap: 4px would be gap-1.</li>
        <li>grid-gap: 4 is not Tailwind syntax.</li>
        <li>space-between: 4 is not a utility.</li>
      </ul>
    `,
    },
    {
        id: 7,
        text: 'Which utility defines a three-column grid?',
        choices: [
            'grid-cols-3',
            'cols-3',
            'grid-3-cols',
            'grid-col-3',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>grid-cols-3</strong>: sets grid-template-columns: repeat(3, minmax(0,1fr)).</li>
        <li>cols-3 is not a Tailwind class.</li>
        <li>grid-3-cols is invalid order.</li>
        <li>grid-col-3 is not defined.</li>
      </ul>
    `,
    },
    {
        id: 8,
        text: 'Which Tailwind class distributes flex items with space between?',
        choices: [
            'justify-items-between',
            'justify-between',
            'justify-content-between',
            'items-between',
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li>justify-items-between applies to grid/inline, not flex.</li>
        <li><strong>justify-between</strong>: applies justify-content: space-between.</li>
        <li>justify-content-between is Bootstrap syntax.</li>
        <li>items-between is not a valid utility.</li>
      </ul>
    `,
    },
    {
        id: 9,
        text: 'How do you vertically center items in a flex container?',
        choices: [
            'align-center',
            'items-center',
            'justify-center',
            'content-center',
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li>align-center is not a Tailwind class.</li>
        <li><strong>items-center</strong>: sets align-items: center.</li>
        <li>justify-center centers horizontally.</li>
        <li>content-center aligns multi-line flex lines.</li>
      </ul>
    `,
    },
    {
        id: 10,
        text: 'What CSS property does `text-center` apply?',
        choices: [
            'text-align: center',
            'align-text: center',
            'horizontal-align: center',
            'center-text: true',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>text-center</strong>: applies text-align: center.</li>
        <li>align-text is not a CSS property.</li>
        <li>horizontal-align doesn’t exist in CSS.</li>
        <li>center-text: true is not valid CSS.</li>
      </ul>
    `,
    },
    {
        id: 11,
        text: 'Which utility applies a red-500 background color?',
        choices: [
            'bg-red-500',
            'bg-danger-500',
            'red-500-bg',
            'background-red-500',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>bg-red-500</strong>: sets background-color to red at level 500.</li>
        <li>bg-danger-500 is Bootstrap convention.</li>
        <li>red-500-bg is not Tailwind syntax.</li>
        <li>background-red-500 is invalid.</li>
      </ul>
    `,
    },
    {
        id: 12,
        text: 'What does `rounded-full` do?',
        choices: [
            'Makes corners fully rounded',
            'Rounds only top corners',
            'Sets border-radius to 4px',
            'Applies pill shape horizontally',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>rounded-full</strong>: sets border-radius to 9999px (circle).</li>
        <li>Top corners only would be rounded-t.</li>
        <li>4px radius is rounded (default).</li>
        <li>Pill shape uses rounded-full on an inline element.</li>
      </ul>
    `,
    },
    {
        id: 13,
        text: 'Which class adds a 2px ring around an element?',
        choices: [
            'ring',
            'ring-2',
            'ring-width-2',
            'ring-size-2',
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li>ring applies a default 3px ring.</li>
        <li><strong>ring-2</strong>: sets ring-width: 2px.</li>
        <li>ring-width-2 is not a shorthand class.</li>
        <li>ring-size-2 is invalid.</li>
      </ul>
    `,
    },
    {
        id: 14,
        text: 'How do you apply a large box-shadow?',
        choices: [
            'shadow-lg',
            'shadow-large',
            'box-shadow-lg',
            'shadow-big',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>shadow-lg</strong>: applies a large predefined shadow.</li>
        <li>shadow-large is not a class.</li>
        <li>box-shadow-lg is not Tailwind syntax.</li>
        <li>shadow-big does not exist.</li>
      </ul>
    `,
    },
    {
        id: 15,
        text: 'Which utility enables CSS transitions?',
        choices: [
            'transition',
            'animate-transition',
            'transitions',
            'tr',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>transition</strong>: adds transition-property, duration, etc.</li>
        <li>animate-transition is not valid.</li>
        <li>transitions is not a Tailwind class.</li>
        <li>tr is not recognized.</li>
      </ul>
    `,
    },
    {
        id: 16,
        text: 'What does `duration-300` set?',
        choices: [
            'transition-duration: 300ms',
            'transition-delay: 300ms',
            'animation-duration: 300ms',
            'delay: 300ms',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>duration-300</strong>: sets transition-duration: 300ms.</li>
        <li>transition-delay uses delay-300.</li>
        <li>animation-duration uses animate-[duration].</li>
        <li>delay: 300ms is delay-300.</li>
      </ul>
    `,
    },
    {
        id: 17,
        text: 'Which class applies an ease-in-out timing function?',
        choices: [
            'ease-in-out',
            'ease-io',
            'easeInsideOut',
            'easing-in-out',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>ease-in-out</strong>: sets transition-timing-function.</li>
        <li>ease-io is not valid.</li>
        <li>easeInsideOut is not a Tailwind utility.</li>
        <li>easing-in-out is incorrect.</li>
      </ul>
    `,
    },
    {
        id: 18,
        text: 'Which utility applies transform support?',
        choices: [
            'transform',
            'transforms',
            'tf',
            'transform-enable',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>transform</strong>: enables transform for subsequent scale/rotate/etc.</li>
        <li>transforms is not recognized.</li>
        <li>tf is not a utility.</li>
        <li>transform-enable does not exist.</li>
      </ul>
    `,
    },
    {
        id: 19,
        text: 'How do you scale an element to 125%?',
        choices: [
            'scale-125',
            'scale-1.25',
            'scale125',
            's-125',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>scale-125</strong>: applies transform: scale(1.25).</li>
        <li>scale-1.25 is not valid Tailwind syntax.</li>
        <li>scale125 is not recognized.</li>
        <li>s-125 does not exist.</li>
      </ul>
    `,
    },
    {
        id: 20,
        text: 'Which class rotates an element by 45 degrees?',
        choices: [
            'rotate-45',
            'rotate45',
            'rot-45',
            'rotation-45',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>rotate-45</strong>: applies transform: rotate(45deg).</li>
        <li>rotate45 is not valid.</li>
        <li>rot-45 is not recognized.</li>
        <li>rotation-45 is invalid.</li>
      </ul>
    `,
    },
    {
        id: 21,
        text: 'How do you hide overflowed content?',
        choices: [
            'overflow-hidden',
            'clip',
            'overflow-clip',
            'hidden-overflow',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>overflow-hidden</strong>: sets overflow: hidden.</li>
        <li>clip is not a Tailwind utility.</li>
        <li>overflow-clip is not defined.</li>
        <li>hidden-overflow is invalid.</li>
      </ul>
    `,
    },
    {
        id: 22,
        text: 'Which utility truncates text with an ellipsis?',
        choices: [
            'truncate',
            'text-ellipsis',
            'overflow-ellipsis',
            'overflow-truncate',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>truncate</strong>: applies overflow, white-space, and text-overflow rules.</li>
        <li>text-ellipsis is not a Tailwind class.</li>
        <li>overflow-ellipsis is invalid.</li>
        <li>overflow-truncate does not exist.</li>
      </ul>
    `,
    },
    {
        id: 23,
        text: 'How do you allow breaking long words onto the next line?',
        choices: [
            'break-words',
            'no-break',
            'word-break',
            'whitespace-nowrap',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>break-words</strong>: applies word-break: break-word.</li>
        <li>no-break is not a utility.</li>
        <li>word-break requires a suffix like break-all.</li>
        <li>whitespace-nowrap prevents wrapping.</li>
      </ul>
    `,
    },
    {
        id: 24,
        text: 'Which class transforms text to lowercase?',
        choices: [
            'lowercase',
            'text-lowercase',
            'to-lower',
            'lower-case',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>lowercase</strong>: sets text-transform: lowercase.</li>
        <li>text-lowercase is not valid.</li>
        <li>to-lower is invalid.</li>
        <li>lower-case is not recognized.</li>
      </ul>
    `,
    },
    {
        id: 25,
        text: 'How do you transform text to uppercase?',
        choices: [
            'uppercase',
            'text-uppercase',
            'uppercase-text',
            'upper-case',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>uppercase</strong>: sets text-transform: uppercase.</li>
        <li>text-uppercase is not a Tailwind utility.</li>
        <li>uppercase-text is invalid.</li>
        <li>upper-case is not recognized.</li>
      </ul>
    `,
    },
    {
        id: 26,
        text: 'Which class adds a 4px top border?',
        choices: [
            'border-t-4',
            'border-top-4',
            'bt-4',
            'border-t-md',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>border-t-4</strong>: sets border-top-width to 4px.</li>
        <li>border-top-4 is not Tailwind syntax.</li>
        <li>bt-4 is invalid.</li>
        <li>border-t-md uses wrong scale keyword.</li>
      </ul>
    `,
    },
    {
        id: 27,
        text: 'What does `border-gray-200` set?',
        choices: [
            'border-color: #e5e7eb',
            'background-color: #e5e7eb',
            'text-color: #e5e7eb',
            'box-shadow-color: #e5e7eb',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>border-gray-200</strong>: sets border-color to gray-200 (#e5e7eb).</li>
        <li>background-color needs bg-gray-200.</li>
        <li>text-color uses text-gray-200.</li>
        <li>box-shadow-color is not set by border utilities.</li>
      </ul>
    `,
    },
    {
        id: 28,
        text: 'How do you add horizontal spacing between direct children?',
        choices: [
            'space-x-2',
            'children-space-x-2',
            'gap-x-2',
            'space-2-x',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>space-x-2</strong>: adds 0.5rem margin between horizontal siblings.</li>
        <li>children-space-x-2 is not valid.</li>
        <li>gap-x-2 applies only in grid/flex gap context.</li>
        <li>space-2-x is invalid syntax.</li>
      </ul>
    `,
    },
    {
        id: 29,
        text: 'Which class sets max-width to the medium breakpoint?',
        choices: [
            'max-w-md',
            'max-width-md',
            'max-md',
            'mw-md',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>max-w-md</strong>: sets max-width to 28rem.</li>
        <li>max-width-md is not a utility.</li>
        <li>max-md is invalid.</li>
        <li>mw-md is not recognized.</li>
      </ul>
    `,
    },
    {
        id: 30,
        text: 'How do you ensure an element is at least the screen height?',
        choices: [
            'min-h-screen',
            'min-height-screen',
            'h-screen-min',
            'screen-min-h',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>min-h-screen</strong>: sets min-height: 100vh.</li>
        <li>min-height-screen is not a utility.</li>
        <li>h-screen-min is invalid.</li>
        <li>screen-min-h is not recognized.</li>
      </ul>
    `,
    },
    {
        id: 31,
        text: 'Which utility sets z-index to 10?',
        choices: [
            'z-10',
            'z10',
            'zindex-10',
            'order-10',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>z-10</strong>: applies z-index: 10.</li>
        <li>z10 is not valid syntax.</li>
        <li>zindex-10 is not a Tailwind class.</li>
        <li>order-10 sets flexbox order, not z-index.</li>
      </ul>
    `,
    },
    {
        id: 32,
        text: 'Which class makes an element position: sticky?',
        choices: [
            'sticky',
            'position-sticky',
            'stick',
            'fixed-between',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>sticky</strong>: sets position: sticky.</li>
        <li>position-sticky is not a utility.</li>
        <li>stick is invalid.</li>
        <li>fixed-between does not exist.</li>
      </ul>
    `,
    },
    {
        id: 33,
        text: 'How do you pin an element to the top with zero offset?',
        choices: [
            'top-0',
            't-0',
            'inset-top-0',
            'inset-y-0',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>top-0</strong>: sets top: 0.</li>
        <li>t-0 is not a shorthand in Tailwind.</li>
        <li>inset-top-0 is invalid.</li>
        <li>inset-y-0 applies top and bottom.</li>
      </ul>
    `,
    },
    {
        id: 34,
        text: 'Which class provides a responsive fixed max-width container?',
        choices: [
            'container',
            'box',
            'max-container',
            'wrapper',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>container</strong>: applies responsive widths and padding.</li>
        <li>box is not a Tailwind utility.</li>
        <li>max-container is invalid.</li>
        <li>wrapper is not recognized.</li>
      </ul>
    `,
    },
    {
        id: 35,
        text: 'How do you make an image cover its container?',
        choices: [
            'object-cover',
            'cover',
            'object-fill',
            'object-contain',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>object-cover</strong>: sets object-fit: cover.</li>
        <li>cover is not a class; it’s CSS value.</li>
        <li>object-fill stretches to fill.</li>
        <li>object-contain preserves aspect ratio.</li>
      </ul>
    `,
    },
    {
        id: 36,
        text: 'Which utility sets a 16:9 aspect ratio?',
        choices: [
            'aspect-video',
            'aspect-16/9',
            'aspect-ratio-video',
            'video-aspect',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>aspect-video</strong>: applies aspect-ratio: 16/9.</li>
        <li>aspect-16/9 is not valid.</li>
        <li>aspect-ratio-video is not recognized.</li>
        <li>video-aspect is invalid.</li>
      </ul>
    `,
    },
    {
        id: 37,
        text: 'How do you change a sibling style when a peer is hovered?',
        choices: [
            'peer-hover:bg-blue-100',
            'peer:hover:bg-blue-100',
            'hover:peer:bg-blue-100',
            'peer-hvr:bg-blue-100',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>peer-hover:bg-blue-100</strong>: applies bg to element when peer is hovered.</li>
        <li>peer:hover:bg-... is invalid syntax.</li>
        <li>hover:peer:bg-... reverses the logic.</li>
        <li>peer-hvr:bg-... is not supported.</li>
      </ul>
    `,
    },
    {
        id: 38,
        text: 'Which utility removes the default focus outline?',
        choices: [
            'focus:outline-none',
            'outline-none',
            'focus-none',
            'focus-remove-outline',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>focus:outline-none</strong>: sets outline: none on focus.</li>
        <li>outline-none applies always, not just on focus.</li>
        <li>focus-none is invalid.</li>
        <li>focus-remove-outline does not exist.</li>
      </ul>
    `,
    },
    {
        id: 39,
        text: 'How do you apply a 4px ring on focus?',
        choices: [
            'focus:ring-4',
            'focus-ring-4',
            'ring-focus-4',
            'focus:ring4',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>focus:ring-4</strong>: adds a 4px ring on focus.</li>
        <li>focus-ring-4 is not valid.</li>
        <li>ring-focus-4 is incorrect.</li>
        <li>focus:ring4 is invalid syntax.</li>
      </ul>
    `,
    },
    {
        id: 40,
        text: 'Which class sets the placeholder text color to gray-500?',
        choices: [
            'placeholder-gray-500',
            'placeholder500',
            'text-placeholder-gray',
            'ph-gray-500',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>placeholder-gray-500</strong>: applies placeholder-color.</li>
        <li>placeholder500 is not valid.</li>
        <li>text-placeholder-gray is not recognized.</li>
        <li>ph-gray-500 is invalid.</li>
      </ul>
    `,
    },
    {
        id: 41,
        text: 'How do you change the text selection background?',
        choices: [
            'selection:bg-yellow-200',
            'bg-selection-yellow-200',
            'select:bg-yellow-200',
            'selection-yellow-200',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>selection:bg-yellow-200</strong>: sets ::selection background.</li>
        <li>bg-selection... is not supported.</li>
        <li>select:bg-... is invalid.</li>
        <li>selection-yellow-200 omits the variant.</li>
      </ul>
    `,
    },
    {
        id: 42,
        text: 'Which plugin utility provides prose styling?',
        choices: [
            'prose',
            'typography',
            'text-prose',
            'prose-text',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>prose</strong>: enables default typography styles.</li>
        <li>typography is not the class itself.</li>
        <li>text-prose is invalid.</li>
        <li>prose-text is not recognized.</li>
      </ul>
    `,
    },
    {
        id: 43,
        text: 'How do you make an element spin continuously?',
        choices: [
            'animate-spin',
            'spin',
            'animation-spin',
            'animate-rotate',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>animate-spin</strong>: applies keyframe spin animation.</li>
        <li>spin is not a utility.</li>
        <li>animation-spin is invalid.</li>
        <li>animate-rotate is not defined.</li>
      </ul>
    `,
    },
    {
        id: 44,
        text: 'Which class makes an element pulse?',
        choices: [
            'animate-pulse',
            'pulse',
            'animate-blink',
            'animate-fade',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>animate-pulse</strong>: applies keyframe pulse animation.</li>
        <li>pulse is not a utility class.</li>
        <li>animate-blink is not defined.</li>
        <li>animate-fade does not exist.</li>
      </ul>
    `,
    },
    {
        id: 45,
        text: 'How do you apply a small blur filter?',
        choices: [
            'blur-sm',
            'filter blur-sm',
            'sm-blur',
            'blur-small',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>blur-sm</strong>: applies filter: blur(4px).</li>
        <li>filter blur-sm is redundant; blur utilities include filter.</li>
        <li>sm-blur is invalid.</li>
        <li>blur-small is not recognized.</li>
      </ul>
    `,
    },
    {
        id: 46,
        text: 'Which utility applies a backdrop blur?',
        choices: [
            'backdrop-blur',
            'backdrop-filter-blur',
            'filter-backdrop-blur',
            'backdrop-blur-md',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>backdrop-blur</strong>: applies backdrop-filter: blur().</li>
        <li>backdrop-filter-blur is not valid.</li>
        <li>filter-backdrop-blur is incorrect.</li>
        <li>backdrop-blur-md specifies scale, not basic utility.</li>
      </ul>
    `,
    },
    {
        id: 47,
        text: 'How do you set a dark-mode background color?',
        choices: [
            'dark:bg-gray-800',
            'bg-gray-800-dark',
            'dark-gray-800',
            'mode-dark:bg-gray-800',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>dark:bg-gray-800</strong>: applies bg in dark mode.</li>
        <li>bg-gray-800-dark is invalid.</li>
        <li>dark-gray-800 is not a variant syntax.</li>
        <li>mode-dark:bg-... is incorrect.</li>
      </ul>
    `,
    },
    {
        id: 48,
        text: 'Which class hides an element when printing?',
        choices: [
            'print:hidden',
            'hidden-print',
            '@print hidden',
            'print-hide',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>print:hidden</strong>: applies display: none in print media.</li>
        <li>hidden-print is Bootstrap syntax.</li>
        <li>@print hidden is not Tailwind.</li>
        <li>print-hide does not exist.</li>
      </ul>
    `,
    },
    {
        id: 49,
        text: 'Which utility makes content accessible only to screen readers?',
        choices: [
            'sr-only',
            'screen-reader-only',
            'accessibility-only',
            'visually-hidden',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>sr-only</strong>: positions element off-screen for accessibility.</li>
        <li>screen-reader-only is not a class.</li>
        <li>accessibility-only is invalid.</li>
        <li>visually-hidden is not in default Tailwind.</li>
      </ul>
    `,
    },
    {
        id: 50,
        text: 'How do you remove the top margin on the first child?',
        choices: [
            'first:mt-0',
            'mt-first-0',
            'first-child:mt-0',
            'mt-0-first',
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>first:mt-0</strong>: removes mt on the first child.</li>
        <li>mt-first-0 is invalid syntax.</li>
        <li>first-child:mt-0 uses incorrect variant name.</li>
        <li>mt-0-first is not recognized.</li>
      </ul>
    `,
    },
];
