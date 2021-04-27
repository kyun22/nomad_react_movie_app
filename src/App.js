import propTypes from "prop-types";
import React from 'react';


class App extends React.Component{ 
  
  // state는 object 이다
  // state의 값을 변경할 땐 항상 setState를 사용한다.
  // setState를 사용할 때 마다 새로운 state와 함께 render()를 호출한다.
  state = {  
    count: 0
  }

  add = () => {
    // this.setState({count: this.state.count + 1})
    this.setState(current => ({count: current.count + 1}))
  }

  minus = () =>{
    this.setState(current => ({count: current.count - 1}))
  }
  
componentDidMount(){
  console.log("Component rendered");
}

componentDidUpdate(){
  console.log("I just updated")
}

  render(){    // React는  Class component의 render 메소드를 자동으로 실행
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    
    )
  }
}


export default App;
