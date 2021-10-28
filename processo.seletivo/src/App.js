import {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>oi</p>

        <p>Digite o nome do usuário</p>
        <input type="text" value={this.state}></input>

        <button>Buscar</button>
      </div>
    )
  }
}

