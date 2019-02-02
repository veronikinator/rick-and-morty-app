import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import LandingPage from './LandingPage'
import PhotoContainer from './PhotoList'
import CharacterPage from "./PhotoPage"
import Header from "./Header"
import { ApolloProvider, AppoloClient } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { neonTheme } from './styledComponents/themes'
import NotFoundPage from './NotFound'

export const AppContext = React.createContext()

class AppContextWrapper extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      selectedCharacterId: 1
    }
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  onSelectCharacter = (id) => {
    this.setState({selectedCharacterId: id})
    console.log(`I selected ${id}`)
  }

  render() {
    const {state, previousPage, nextPage, onSelectCharacter} = this
    const { graphqlClient } = this.props
    return <AppContext.Provider value={{ ...state, previousPage, nextPage, onSelectCharacter }}>
      <App graphqlClient={graphqlClient} />
    </AppContext.Provider>
  }
}


const App = ({ graphqlClient }) => {
  return (
    <div className="App">
      <ApolloProvider client={graphqlClient}>
        <ThemeProvider theme={neonTheme}>
          <Router>
            <Switch>
              <Route exact path={"/photos"} component={PhotoContainer} />
              <Route exact path={"/photos/:id"} component={CharacterPage} />
              <Route exact path={"/header"} component={Header} />
              <Route exact path={"/"} component={LandingPage} />
              <Route path={"*"} component={NotFoundPage} />
            </Switch>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </div >
  );
}

export default AppContextWrapper;
