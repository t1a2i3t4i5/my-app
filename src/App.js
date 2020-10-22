import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="hoge">hoge</label>
      <input type="text" onClick={() => console.log("クリックされました")} />
    </React.Fragment>
  )
}

export default App;
