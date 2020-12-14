import React, { Component } from 'react'
import { NoteConsumer } from '../context/NoteProvider'

class NotesList extends Component {
  render() {
    return (
      <div>
        <NoteConsumer>
          {({ state, toggleRtl }) => (
            <>
              <button onClick={toggleRtl}>Toggle Rtl</button>
              <div>rtl value: {state.isRtl.toString()}</div>
            </>
          )}
        </NoteConsumer>
      </div>
    )
  }
}
export default NotesList
