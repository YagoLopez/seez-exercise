import React, { Component } from 'react'
import { NoteConsumer } from '../context/NoteProvider'
import Link from 'next/link'

class NotesList extends Component {
  render() {
    return (
      <div>
        <NoteConsumer>
          {({ state, toggleRtl }) => (
            <>
              <button onClick={toggleRtl}>Toggle Rtl</button>
              <div>rtl value: {state.isRtl.toString()}</div>
              <div>
                <Link href="/notelist2">
                  <a>go to notelist 2</a>
                </Link>
              </div>
            </>
          )}
        </NoteConsumer>
      </div>
    )
  }
}
export default NotesList
