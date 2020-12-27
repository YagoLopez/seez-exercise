import Joke from '../../models/Joke'
import JokeListItem from '../joke-list-item/JokeListItem'
import { List, ListGroup } from '@rmwc/list'
import { CONST } from '../../constants'

export default function JokeList({ list, search }) {
  return (
    <>
      <h2>
        {CONST.SEARCH_RESULT_LIST_TITLE} "{search}"
      </h2>
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
