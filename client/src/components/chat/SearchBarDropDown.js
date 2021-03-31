import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";


export default function SearchBar(){
  const users = useSelector((state) => state.user.users)
  
  const [search, setSearch] = useState('')
  const [result, setResult] = useState('')
  
  let filtered = users.filter((user) => {
     return user.username.toLowerCase().includes(search.toLowerCase())
  })
  const onChange = (e) => {
    setSearch(e.target.value)
    console.log('SET SEARCH IN ONCHAANGE', search)
  }
      
  const onClick = (item) => {
      setSearch('')
      setResult(item)
  }
  return(
      <div>
      <div>
        <div className="search">
          <input
            type="search"
            value={search}
            placeholder="find urself a friend"
            onChange={onChange}
            autoComplete="on"
          />
        </div>
        {search.length > 1 && filtered.length > 0 && (
          <ul>
            {filtered.map((item) => (
              <li onClick={() => onClick(item)}>{item.username}</li>
            ))}
          </ul>
        )}
      </div>
      {result && (
          <p>
            {result.firstName} {result.lastName}
          </p>
        )}
    </div>
  )
  
  }