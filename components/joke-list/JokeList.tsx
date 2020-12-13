import Joke from '../../models/Joke'
import { List, ListGroup } from '@rmwc/list'
import JokeListItem from '../joke-list-item/JokeListItem'

export default function JokeList({ list }) {
  return (
    <>
      <h2>List of Jokes</h2>
      {list.map((joke: Joke, index: number) => {
        return (
          <List twoLine avatarList key={index}>
            <ListGroup>
              <JokeListItem item={joke} />
            </ListGroup>
          </List>
        )
      })}
    </>
  )
}
