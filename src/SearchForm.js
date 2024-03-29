import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, handleSearch } = useGlobalContext()
  return <form className='search-form' onSubmit={(e) =>{e.preventDefault()
  }}>
    <input 
    className='form-input' 
    type ="text"  
    value = {query} 
    onChange ={(e) => handleSearch(e.target.value)}></input>
  </form>
}

export default SearchForm
