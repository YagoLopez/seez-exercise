import React, { Component } from 'react'

const AppContext = React.createContext()

class AppContextProvider extends Component {
  state = { isRtl: false }
  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          toggleRtl: () => this.setState({ isRtl: !this.state.isRtl }),
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

const AppContextConsumer = AppContext.Consumer
export default AppContextProvider
export { AppContextConsumer }
