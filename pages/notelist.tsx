import React, { Component } from 'react'
import { AppContextConsumer } from '../context/AppContextProvider'
import Link from 'next/link'

class NotesList extends Component {
  render() {
    return (
      <div>
        <AppContextConsumer>
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
        </AppContextConsumer>
      </div>
    )
  }
}
export default NotesList
