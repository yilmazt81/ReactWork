import React,{ Component }  from 'react';
 
import './App.css';
import { CardList } from './Companents/card-list/card-list.companent';
import { SearchBox} from './Companents/Search-box/search-box.companent';

class App extends Component{

  constructor(){
    super()  
        this.state = {
            monsters : [],
            SearchField:''
        }
     
        this.handlechange=this.handlechange.bind(this);
  }

  componentDidMount()
  {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response=>Response.json())
      .then(users=>this.setState( {monsters:users} ));

  }
  handlechange(e){
    

      this.setState({SearchField:e.target.value});
      console.log(this.state);
 
  }
  render(){
    const{ monsters,SearchField    } = this.state;
 const filteredMonster= monsters.filter(monster => 
    monster.name.toLocaleLowerCase().includes(SearchField.toLocaleLowerCase())
  )

    return( 
      <div className="App">

        <SearchBox placeholder='Search' handlechange={this.handlechange} /> 
        <CardList  monsters={filteredMonster}>

        </CardList>

     </div>
    )
  }
}

export default App;
