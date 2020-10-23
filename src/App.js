import React from 'react';

// class App extends Component{
//   render(){
//   return (
//     <React.Fragment>
//       <h1>佐藤て泰知です</h1>
//     </React.Fragment>
//   )
//   }
// }


const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>Mewo</div>
}


export default App;
