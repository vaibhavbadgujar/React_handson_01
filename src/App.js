import logo from './logo.svg';
import React from 'react';
import './App.css';
import Myfunctioncomponents from './code/functionalcomponent';
import Firstclasscomponent from './code/Classcomponents'
class App extends React.Component  {

  constructor(props){
    super(props)
    this.state={
    showFunctionalComponent: false,
    showClassComponent: false
  }
}

toggleFuncComp=()=>{
  this.setState((prev)=>({
    showFunctionalComponent: !prev.showFunctionalComponent
  }))
}

toggleClassComp =()=>{
  this.setState((prev)=>({
    showClassComponent: !prev.showClassComponent
  }))
}


 render(){
  return( <div className="first">
     <h1 className='mainHead' style={{textAlign:"center"}}>Styling using Functional and Class Component</h1>

     <div className='flexbutton'>
      <button onClick={this.toggleFuncComp} className="button1">To see styling in Functional Component</button>
      <button onClick={this.toggleClassComp} className="button2"> To see styling in Class Component</button>
      </div>
      <div className='flexBox2'>
    {this.state.showFunctionalComponent && <Myfunctioncomponents/>}
    {this.state.showClassComponent && <Firstclasscomponent/>}
    </div>
   </div>);
  
}

}
export default App;