import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        
      }
    }
    
  }
 async componentDidMount(){
  const data = await fetch("https://api.github.com/users/Debasish-rana")
  const json = await data.json();
  console.log(json)
  this.setState({
    userInfo:json,
  })
}
  render() {
    const { name, location, avatar_url, url } = this.state.userInfo;
    if (this.state === 0) {
      return <ShimerUi />;
    }
    return (
      <div className="class-card">
      <img src= {avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Github: {url}</h3>
        
      </div>
    );
  }
}

export default UserClass;
