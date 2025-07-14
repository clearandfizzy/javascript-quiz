// src/components/Quiz.tsx
import React, { useState } from 'react';
import {questions} from '../data/questions.ts';

const Quiz: React.FC = () => {
    const [idx, setIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const q = questions[idx];

    const choose = (i: number) => {
        if (answered) return;
        setAnswered(true);
        if (i === q.correctIndex) setScore(s => s + 1);
    };

    const next = () => {
        setAnswered(false);
        setIdx(i => (i + 1) % questions.length);
    };

    return (
        <div className="quiz-container" style={{
            maxWidth: 400,
            margin: '2rem auto',
            padding: '2rem',
            border: '1px solid #e0e0e0',
            borderRadius: 12,
            background: '#fafbfc',
            fontFamily: 'Roboto, Arial, sans-serif',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
            <h2 style={{fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: 500, color: '#222'}}>{q.text}</h2>
            <ul style={{listStyle: 'none', padding: 0}}>
                {q.choices.map((c, i) => (
                    <li key={i} style={{marginBottom: '0.75rem'}}>
                        <button
                            onClick={() => choose(i)}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                fontSize: '1rem',
                                fontFamily: 'Roboto, Arial, sans-serif',
                                background: answered ? (i === q.correctIndex ? '#e6f9e6' : '#f5f5f5') : '#fff',
                                border: answered
                                    ? i === q.correctIndex
                                        ? '2px solid #4caf50'
                                        : '1px solid #ccc'
                                    : '1px solid #ccc',
                                opacity: answered && i !== q.correctIndex ? 0.6 : 1,
                                cursor: answered ? 'default' : 'pointer',
                                borderRadius: 6,
                                transition: 'all 0.2s',
                                fontWeight: answered && i === q.correctIndex ? 500 : 400,
                                color: '#222',
                                boxShadow: answered && i === q.correctIndex ? '0 0 4px #4caf50' : 'none'
                            }}
                        >
                            {c}
                        </button>
                    </li>
                ))}
            </ul>
            {answered && (
                <>
                    <div key={1} style={{
                        margin: '1rem 0',
                        background: '#f0f4f8',
                        padding: '0.75rem',
                        borderRadius: 6,
                        fontSize: '0.98rem',
                        color: '#333',
                        fontFamily: 'Roboto, Arial, sans-serif'
                    }}>
                        <span dangerouslySetInnerHTML={{__html: q.explanation}}/>
                    </div>
                    <div key={2} style={{
                        marginTop: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: 'Roboto, Arial, sans-serif',
                        fontSize: '1rem',
                        color: '#222'
                    }}>
                        <span style={{fontWeight: 500}}>Score: {score} / {questions.length}</span>
                        <button onClick={next} style={{
                            padding: '0.5rem 1.2rem',
                            border: 'none',
                            background: '#007bff',
                            color: '#fff',
                            borderRadius: 6,
                            fontWeight: 500,
                            fontFamily: 'Roboto, Arial, sans-serif',
                            fontSize: '1rem',
                            boxShadow: '0 2px 6px rgba(0,123,255,0.08)',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
