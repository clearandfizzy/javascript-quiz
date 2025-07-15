export const loadQuestions = async () => {
    console.log(process.env.REACT_APP_QUESTIONS as string);

    switch (process.env.REACT_APP_QUESTIONS as string) {
        case 'javascript':
            return (await import('@/data/javascript/questions')).questions;
        case 'tailwind':
            return (await import('@/data/tailwind/questions')).questions;
        default:
            return (await import('@/data/javascript/questions')).questions;
    }
};
