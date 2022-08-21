import logo from './logo.svg';
import './App.css';
import student from './data';
import React, {Component} from "react"
import Demo from './demo';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        display : true
      }
  }
   deleteAll = () =>{
    this.setState({display : true})
  }
  showAll = ()=>{
    this.setState({display : false})
  }
  render(){
    const isDisplay = this.state.display
    return (
      isDisplay ? (
         <>
          <button onClick={this.showAll}>Click to show data</button>
         </>
        ) : (
          <>
          {student.map((value)=>{
            return(
              <Demo data = {value}/>
            )
         })}
         <button onClick={this.deleteAll}>click to delete all</button>
          </>
        )
    )
  }
}

export default App;
