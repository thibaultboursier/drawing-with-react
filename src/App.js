import React, { Component } from 'react';
import './App.css';
import { Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { DrawingModal } from './components/DrawingModal';

class App extends Component {
  state = {
    imageUrl: 'https://images.unsplash.com/photo-1519972064555-542444e71b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&q=80',
    isModalOpened: false,
  };

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Drawing with React</h1>
          <p>
            <img alt="Paper" src={this.state.imageUrl} width="400"/>
          </p>
          <p>
            <Button bsStyle="primary" onClick={this.openModal}>Click here to draw</Button>
          </p>
        </Jumbotron>
        <DrawingModal
          imageUrl={this.state.imageUrl}
          onDrawingSaved={this.onDrawingSaved}
          onHide={this.hideModal}
          show={this.state.isModalOpened}
        />
      </div>
    );
  }

  hideModal = () => {
    this.setState({
      isModalOpened: false,
    });
  };

  onDrawingSaved = imageUrl => {
    this.setState({
      imageUrl,
      isModalOpened: false,
    });
  }

  openModal = () => {
    if (this.state.isModalOpened) return;

    this.setState({
      isModalOpened: true,
    });
  };
}

export default App;
