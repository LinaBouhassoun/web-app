import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Jordan Belfort'
    }
  }
  componentWillMount(){
    console.log('First this called');

    console.log(this.state.data)
  }


  componentDidMount(){
    fetch('http://localhost:8000/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ data: data.msg })
          console.log(data)
        })
        .catch(console.log)
  }

  render() {
    return(
      
      <div>
      {this.state.data}
    </div>
    
    )
  }
}

export default App;