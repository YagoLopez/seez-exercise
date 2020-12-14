import React, { Component } from 'react'

const NoteContext = React.createContext()

class NoteProvider extends Component {
  state = { isRtl: false }
  render() {
    return (
      <NoteContext.Provider
        value={{
          state: this.state,
          toggleRtl: () => this.setState({ isRtl: !this.state.isRtl }),
        }}>
        {this.props.children}
      </NoteContext.Provider>
    )
  }
}

const NoteConsumer = NoteContext.Consumer
export default NoteProvider
export { NoteConsumer }
