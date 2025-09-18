import React, { useState } from 'react';
import Section from './Section';
import { TRIVIA_QUESTIONS, WORD_SCRAMBLE_WORDS, I_SPY_ITEMS, SparklesIcon } from '../constants';
import { TriviaQuestion, WordScramble } from '../types';

type Game = 'trivia' | 'scramble' | 'ispy';

const FunStuff: React.FC = () => {
    const [activeGame, setActiveGame] = useState<Game>('trivia');

    const renderGame = () => {
        switch (activeGame) {
            case 'trivia':
                return <CouplesTrivia />;
            case 'scramble':
                return <WordScrambleGame />;
            case 'ispy':
                return <ISpyChallenge />;
            default:
                return null;
        }
    };

    const TabButton: React.FC<{ game: Game; label: string }> = ({ game, label }) => (
        <button
            onClick={() => setActiveGame(game)}
            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeGame === game ? 'bg-[#B48A6E] text-white shadow-md' : 'bg-white/50 text-[#4B3F3C] hover:bg-[#B48A6E]/50'}`}
        >
            {label}
        </button>
    );

    return (
        <Section id="fun" title="Fun & Games">
             <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
                Think you know us? Take a break and have a little fun with these games!
            </p>
            <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
                <TabButton game="trivia" label="Couple's Trivia" />
                <TabButton game="scramble" label="Word Scramble" />
                <TabButton game="ispy" label="I Spy Challenge" />
            </div>
            <div className="max-w-3xl mx-auto bg-white/60 p-6 md:p-8 rounded-lg shadow-xl backdrop-blur-sm">
                {renderGame()}
            </div>
        </Section>
    );
};

const CouplesTrivia: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const question = TRIVIA_QUESTIONS[currentQuestionIndex];

    const handleAnswerSelect = (option: string) => {
        if (showResult) return;
        setSelectedAnswer(option);
    };

    const handleNext = () => {
        if (selectedAnswer === question.correctAnswer) {
            setScore(prev => prev + 1);
        }
        setShowResult(true);

        setTimeout(() => {
            if (currentQuestionIndex < TRIVIA_QUESTIONS.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setShowResult(false);
            } else {
                // End of quiz
                setCurrentQuestionIndex(prev => prev + 1);
            }
        }, 2500);
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
    };
    
    if (currentQuestionIndex >= TRIVIA_QUESTIONS.length) {
        return (
            <div className="text-center">
                <h3 className="text-2xl font-bold text-[#4B3F3C] mb-4">Quiz Complete!</h3>
                <p className="text-xl text-gray-700 mb-4">You scored {score} out of {TRIVIA_QUESTIONS.length}!</p>
                <p className="mb-6">Thank you for playing! We hope you learned a little more about our story.</p>
                <button
                    onClick={restartQuiz}
                    className="bg-[#B48A6E] text-white font-bold py-2 px-6 rounded-full hover:bg-[#a57b60] transition-colors duration-300 shadow-md">
                    Play Again
                </button>
            </div>
        );
    }

    return (
        <div>
            <p className="font-semibold text-gray-600 mb-2">Question {currentQuestionIndex + 1} of {TRIVIA_QUESTIONS.length}</p>
            <h3 className="text-xl md:text-2xl font-bold text-[#4B3F3C] mb-6">{question.question}</h3>
            <div className="space-y-3">
                {question.options.map(option => {
                    const isCorrect = option === question.correctAnswer;
                    const isSelected = option === selectedAnswer;
                    let buttonClass = 'bg-white/80 hover:bg-gray-200/80';
                    if (showResult) {
                        if (isCorrect) buttonClass = 'bg-green-300';
                        else if (isSelected) buttonClass = 'bg-red-300';
                    } else if (isSelected) {
                        buttonClass = 'bg-[#8E9B90]/50';
                    }
                    
                    return (
                        <button
                            key={option}
                            onClick={() => handleAnswerSelect(option)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${buttonClass}`}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            {showResult && (
                <p className="mt-4 text-center text-gray-600 italic animate-fade-in-down">{question.explanation}</p>
            )}
            <div className="text-center mt-6">
                <button
                    onClick={handleNext}
                    disabled={!selectedAnswer || showResult}
                    className="bg-[#B48A6E] text-white font-bold py-2 px-8 rounded-full hover:bg-[#a57b60] transition-colors duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {showResult ? 'Next...' : 'Submit'}
                </button>
            </div>
        </div>
    );
};

const WordScrambleGame: React.FC = () => {
    const [inputs, setInputs] = useState(Array(WORD_SCRAMBLE_WORDS.length).fill(''));
    const [results, setResults] = useState<boolean[]>([]);

    const handleInputChange = (index: number, value: string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const checkAnswers = () => {
        const newResults = inputs.map((input, index) =>
            input.trim().toUpperCase() === WORD_SCRAMBLE_WORDS[index].correct.toUpperCase()
        );
        setResults(newResults);
    };
    
    return (
        <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#4B3F3C] mb-4 text-center">Wedding Word Scramble</h3>
            <p className="text-center text-gray-600 mb-6">Unscramble these words related to our story!</p>
            <div className="space-y-4">
                {WORD_SCRAMBLE_WORDS.map((word, index) => (
                    <div key={index} className="flex items-center justify-center space-x-4">
                        <span className="font-mono text-lg tracking-widest w-28 text-right">{word.scrambled}</span>
                        <input
                            type="text"
                            value={inputs[index]}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            className={`w-40 px-3 py-2 bg-white border rounded-lg focus:ring-[#B48A6E] focus:border-[#B48A6E] ${results.length > 0 ? (results[index] ? 'border-green-500' : 'border-red-500') : 'border-gray-300'}`}
                        />
                    </div>
                ))}
            </div>
             <div className="text-center mt-6">
                <button
                    onClick={checkAnswers}
                    className="bg-[#B48A6E] text-white font-bold py-2 px-8 rounded-full hover:bg-[#a57b60] transition-colors duration-300 shadow-md"
                >
                    Check My Answers
                </button>
            </div>
        </div>
    );
};

const ISpyChallenge: React.FC = () => {
    return (
        <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-[#4B3F3C] mb-4">I Spy... On The Big Day!</h3>
            <p className="text-gray-600 mb-6">Get your cameras ready! Help us capture all the special moments during our wedding. Share your photos with our hashtag: <span className="font-bold text-[#B48A6E]">#LoveWithMiracleAndPeace</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {I_SPY_ITEMS.map((item, index) => (
                    <div key={index} className="flex items-center bg-white/80 p-3 rounded-lg">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FunStuff;
