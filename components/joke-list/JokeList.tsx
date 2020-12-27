import Joke from '../../models/Joke'
import { List, ListGroup } from '@rmwc/list'
import JokeListItem from '../joke-list-item/JokeListItem'

export default function JokeList({ list, search }) {
  return (
    <>
      <h2>Joke search for "{search}"</h2>
      {list.map((joke: Joke) => {
        return (
          <List twoLine avatarList key={joke.id}>
            <ListGroup>
              <JokeListItem item={joke} />
            </ListGroup>
          </List>
        )
      })}
    </>
  )
}
