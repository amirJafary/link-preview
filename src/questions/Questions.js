import { Card } from '@material-ui/core';
import React, { useState } from 'react';

const Questions = () => {

    let random = () => (Math.floor(Math.random() * 10));

    const questions = [
        { id: 1, question: `${random()} * ${random()}` },
        { id: 2, question: `${random()} ** ${random()}` },
        { id: 3, question: `${random()} / ${random()}` },
        { id: 4, question: `${random()} + ${random()}` }
    ];

    const askQuestion = () => {
        let userAnswer = '';
        let userPoint = 0;
        let userAnswerInfo = [];

        questions.map(qu => {
            userAnswer = prompt(qu.question, '')

            if (userAnswer == eval(qu.question)) {
                userPoint++;
                userAnswerInfo.push(
                    {
                        ...qu,
                        isCurrectAnswer: true,
                        currectAnswer: eval(qu.question),
                        userAnswer: userAnswer
                    }
                )
            } else {
                userAnswerInfo.push(
                    {
                        ...qu,
                        isCurrectAnswer: false,
                        currectAnswer: eval(qu.question),
                        userAnswer: userAnswer
                    }
                )
            }
        }
        )

        return ({ userPoint, userAnswerInfo })
    };

    const userAnswerInfo = askQuestion();
    const answerInfoHeaader = ['No', 'Question', 'Answer', 'Your Answer', 'Answer Is Currect'];
    console.log(userAnswerInfo?.userAnswerInfo);

    return (
        <div className='h-full flex justify-center flex-col align-items-center'>
            <h1 className='mb-4'>ur point is {userAnswerInfo?.userPoint}</h1>
            <Card className='w-auto flex justify-center'>
                <table>

                    <tr className='bg-slate-400'>
                        {answerInfoHeaader.map(item => <th className='p-3'>{item}</th>)}
                    </tr>

                    {userAnswerInfo?.userAnswerInfo.map(item =>
                        <tr className='p-4'>
                            <td className={`p-4 ${item.isCurrectAnswer ? 'bg-green-100' : 'bg-red-200'}`}>{item.id}</td>
                            <td className={`p-4 ${item.isCurrectAnswer ? 'bg-green-100' : 'bg-red-200'}`}>{item.question}</td>
                            <td className={`p-4 ${item.isCurrectAnswer ? 'bg-green-100' : 'bg-red-200'}`}>{item.currectAnswer}</td>
                            <td className={`p-4 ${item.isCurrectAnswer ? 'bg-green-100' : 'bg-red-200'}`}>{item.userAnswer}</td>
                            <td className={`p-4 ${item.isCurrectAnswer ? 'bg-green-100' : 'bg-red-200'}`}>{`${item.isCurrectAnswer}`}</td>
                        </tr>

                    )}


                </table>
            </Card>
        </div>

    );
};

export default Questions;