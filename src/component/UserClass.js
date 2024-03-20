import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, component } = this.props;
    const { count }= this.state
    return (
      <div className="class-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Components: {component}</h3>
        <h3>count = {count}</h3>
        <button onClick={()=>{
          this.setState({
            count:this.state.count + 1
          })
        }}>countincrease</button>
      </div>
    );
  }
}

export default UserClass;
