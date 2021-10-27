import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,
      dark: document.querySelector('html').classList === 'dark'
    }
    this.click = this.click.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme () {
    const root = document.querySelector('html').classList
    this.setState((state) => ({
      dark: !state.dark
    }))
    root.toggle('dark')
  }

  click () {
    this.setState((state) => ({
      status: !state.status
    }))
  }

  render () {
    const { status, dark } = this.state
    return (
      <div className="w-11/12 p-4 transition-colors duration-700 rounded shadow bg-white flex justify-evenly dark:bg-gray-700">
        <button className={`transition-all duration-700 rounded text-gray-50 py-2 w-20 text-center uppercase ${status ? 'bg-blue-500' : 'bg-gray-500'}`} type="button" onClick={this.click}>{ status ? 'Nyala' : 'Mati' }</button>
        <button className={`transition-all duration-700 rounded text-gray-50 py-2 w-20 text-center uppercase ${dark ? 'bg-blue-500' : 'bg-gray-500'}`} type="button" onClick={this.changeTheme}>{ dark ? 'True' : 'False' }</button>
      </div>
    )
  }
}
