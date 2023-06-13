import { Component } from 'react';
import './styles/App.css';
import CardList from './components/card-list/CardLIst';
import SearchBox from './components/search-box/SearchBox';

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
        <h1 className="my-4 text-teal-400 font-bold text-[75px] underline">Monster's Inc.</h1>
        <SearchBox className="px-6 py-3 my-6 self-center border-black-600 border-2 rounded-lg w-[350px]" onChangeHandler={onSearchChange} placeholder="Search for monsters"/>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App

