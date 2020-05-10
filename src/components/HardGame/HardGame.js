import React from 'react';
import { decodeHTMLEntities, Shuffle } from '../utils/utils'



const HardGame = ({arrHardQuestions, checkTheAnswer, index })=>{

    let answers=arrHardQuestions[index].incorrect_answers;
    answers.push(arrHardQuestions[index].correct_answer)

    return(
        <div>
    <p className='instruct'>{decodeHTMLEntities(arrHardQuestions[index].question)}</p>
    <div >
                                         {answers.map((item,index) => 
                                            <button
                                                type="button"
                                                value={item}
                                                onClick={checkTheAnswer}
                                                key={index}
                                                className="btn"
                                            >
                                                {item}
                                            </button>
                                            
                                        )}
                                    </div> 

</div>

    )}

export default HardGame