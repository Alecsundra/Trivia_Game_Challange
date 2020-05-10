import React from 'react';
import { decodeHTMLEntities } from '../utils/utils';
import { Shuffle } from '../utils/utils'

const MediumGame =({arrMediumQuestions, checkTheAnswer, index })=>{
   console.log(index)
   console.log(arrMediumQuestions.length)
    let answers=arrMediumQuestions[index].incorrect_answers;
   Shuffle(answers.push(arrMediumQuestions[index].correct_answer))
console.log(answers)
    return(
        
        <div>
        {arrMediumQuestions.length !== index ? 
        <div>
    <p className='instruct'>{decodeHTMLEntities(arrMediumQuestions[index].question)}</p>
    <div className="btn-4-YT">
                                        {answers.map((item,id) => 
                                            <button
                                                type="button"
                                                value={item}
                                                onClick={checkTheAnswer}
                                                key={id}
                                                className="btn"
                                            >
                                                {item}
                                            </button>
                                            
                                        )}
                                    </div>
                                    </div>

: <button>Go home</button>}
</div>
    )}

export default MediumGame