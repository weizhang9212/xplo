import React, { Component } from 'react';
import PageWrapper from './containers/PageWrapper/PageWrapper'
import { BrowserRouter } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
        <PageWrapper></PageWrapper>
       </div>
      </BrowserRouter>
    );
  }
}

export default App;