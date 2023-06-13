import { Component } from 'react';
import './styles/App.css';
import CardList from './components/card-list/CardLIst';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      filterField: '',
    };
    console.log('costructor()');
  };

  componentDidMount(){

    console.log('componentDidMount()');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state);
        }
      )
    )
  }
  
  onSearchChange = (event) => {
    const filterField = event.target.value.toLowerCase();
    this.setState(() => {
      return { filterField }
    });
  };

  render() {
    console.log('render()');
    const { monsters, filterField } = this.state;
    const { onSearchChange } = this;


    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(filterField);
   });

    
    return(
      <div className="App flex align-center justify-center flex-col">
        <input className="search-box px-6 py-3 my-3 self-center border-black-600 border-2 rounded-lg w-[350px]" type="search" placeholder="Search for monsters" onChange={onSearchChange} />
        {filteredMonsters.map((monster) => {
          return(
            <div key={monster.id}>
              <h1 className="font-bold text-[40px] text-white text-center">{monster.name}</h1>
            </div>
          );
        })}
      </div>
    )
  }
}

export default App
