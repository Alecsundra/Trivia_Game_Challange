import React from 'react';
import { decodeHTMLEntities, Shuffle } from "../utils/utils"



const EasyGame = ({easyQ, buttonsAnswersArr, checkTheAnswer, index })=>{

    let answers=easyQ[index].incorrect_answers;
    answers.push(easyQ[index].correct_answer)
    let ShuffleAnswers= Shuffle(answers)
    return(
        <div>

    <p className='instruct'>{decodeHTMLEntities(easyQ[index].question)}</p>
    <div >
                                         {ShuffleAnswers.map((item,index) => 
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

export default EasyGame 