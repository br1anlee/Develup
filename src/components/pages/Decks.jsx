import { useParams, Link } from "react-router-dom"

export default function Deck({ category, users} ) {
  const { id } = useParams()

  let deckIdx = category.findIndex((object) => {
    return object._id === id
  })

  let showAllDecks
  if (deckIdx != -1) {
    showAllDecks = category[deckIdx].decks.map((deck, i) => {
      let userIdx = users.findIndex((object) => {
        return object._id === deck.author
      })
      return (
        <>

          <div className="deck-div" key={`category-link${i}`}>
            <Link
              key={`link-link${i}`}
              to={`/category/${id}/deck/${deck._id}`}
              style={{ textDecoration: "none" }}
            >
              <div key={`deckName-Div-link${i}`}>
                <p key={`deckName-link${i}`} className="category-text">
                  {deck.deckName}
                </p>

                <div className="category-text-small">
                  {deck.cards.length < 2 ? (
                    <p>{deck.cards.length} Card</p>
                  ) : (
                    <p>{deck.cards.length} Cards</p>
                  )}{" "}
                </div>
                <p className="category-text-small">Author: {users[userIdx].name}</p>
              </div>
            </Link>
          </div>
        </>
      )
    })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{category[deckIdx].name} Decks</h1>
      <div className="category-container">{showAllDecks}</div>
    </div>
  )
}
