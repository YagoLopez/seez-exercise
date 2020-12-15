import React, { Component } from 'react'
import { AppContextConsumer } from '../context/AppContextProvider'

class NotesList extends Component {
  render() {
    return (
      <div>
        <AppContextConsumer>
          {({ state, toggleRtl }) => (
            <>
              <button onClick={toggleRtl}>Toggle Rtl</button>
              <div>rtl value: {state.isRtl.toString()}</div>
            </>
          )}
        </AppContextConsumer>
      </div>
    )
  }
}
export default NotesList
