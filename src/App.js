import React, {Component} from 'react'

class App extends Component {
  state = {
    astros:  []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState({
        astros: data.people
      }))
  }

  render() {
    return(
      this.state.astros.map(astro => (
        <div>
          <p>Craft: {astro.craft}</p>
          <p>Name: {astro.name}</p>
        </div>
      ))
    )
  }
  
}

export default App
