import { useState } from "react"

function VisibleCards({ currentCards, setCurrentCards, cards, newCard }) {
  const cardsArray = newCard.map((element, index) => {
    return (
      <div className="create-card-div">
        <label hidden htmlFor="card-question">
          Card {index}
        </label>
        <div>
          <input
            className="create-question-input"
            required
            type="text"
            placeholder="Question.."
            id="card-question"
            name="question"
            value={element.question}
          />
          <input
            required
            className="create-answer-input"
            type="text"
            placeholder="Answer.."
            id="card-answer"
            name="answer"
            value={element.answer}
          />
        </div>
      </div>
    )
  })
    return ( 
            <>
            {cardsArray}
            </>
     );
}

export default VisibleCards
