import React from 'react'
import logo from '../logo.svg';
import PropTypes from 'prop-types'




export default function ReactUI(props) {
  return (
    <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {props.framework} with {props.name}
        </a>
      </header>
    </div>
  )
}

ReactUI.propTypes = {
    name : PropTypes.string.isRequired,
    framework : PropTypes.string.isRequired
}




