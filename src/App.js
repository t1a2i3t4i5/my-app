import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name:"taro", age: 10,},
    { name:"hanako", age: 5 },
    { name:"noname  " },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>私は{props.name}です。年齢は{props.age}です</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
