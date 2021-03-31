import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";




/* 
function DataFetch(foo){
  const users = useSelector((state) => state.user.users);

  let result = users
  return result
}


class SearchBar extends React.Component {
  state = {
    data: null,
    placeholder: "",
    result: "",
  };
  componentDidMount() {
    const users = DataFetch(this.data)
    this.data = users
    //backend call
    console.log('this is big dad data ++++++++++++++++++++=>>>>>>>>>>>>>>>>>>>', this.data)
  }

  onSearch = (e) => this.setState({ [e.target.id]: e.target.value });
  onClick = (item) => this.setState({ placeholder: "", result: item });
  render() {
    let { data, placeholder, result } = this.state;
    if (!data) {
      return <h3>be patient bitch</h3>;
    }
    let filtered = this.data.filter((user) =>
      user.firstName.toLowerCase().includes(placeholder.toLowerCase())
    );
    return (
      <div>
        <div className="container">
          <div className="search">
            <input
              id="search"
              type="search"
              value={this.state.placeholder}
              placeholder="find urself a friend"
              onChange={this.onSearch}
            />
          </div>
          {placeholder.length > 1 && filtered.length > 0 && (
            <ul className="list">
              {filtered.map((item) => (
                <li onClick={() => this.onClickItem(item)}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
        {result && (
            <p className="result">
              
              {result.firstName}
              {result.lastName}
              {result.username}
            </p>
          )}
      </div>
    );
  }
}
export default SearchBar
*/