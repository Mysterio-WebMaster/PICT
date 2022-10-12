import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddField from './AddField'

export default class BusinessProcess extends Component {
  render() {
    return (
      <div>
        <header>
            <h2>Business Process</h2>
        </header>
        <div className="handler">
            <button type='button' className='addBp'> Add BP</button>
            <button type='submit' className='save'>Save</button>

        </div>
        <hr />
        <br />


        <div className="container">
            <AddField/>
        </div>

      </div>
    )
  }
}
