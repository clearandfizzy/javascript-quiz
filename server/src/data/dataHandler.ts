export const loadQuestions = async () => {
    console.log(process.env.NEXT_PUBLIC_QUESTIONS as string);

    switch (process.env.NEXT_PUBLIC_QUESTIONS as string) {
        case 'javascript':
            return (await import('@/data/javascript/questions')).questions;
        case 'tailwind':
            return (await import('@/data/tailwind/questions')).questions;
        case 'react':
            return (await import('@/data/react/questions')).questions;
        case 'magento2':
            return (await import('@/data/magento2/questions')).questions;
        default:
            return (await import('@/data/javascript/questions')).questions;
    }
};
