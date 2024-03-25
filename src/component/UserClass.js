import React from "react";
import ShimerUi from "./shimerui";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor is called");
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("https://api.github.com/users/Debasish-rana");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component did willUnmount");
  }

  render() {
    console.log("component render");
    const { name, location, avatar_url, url } = this.state.userInfo;
    if (this.state === 0) {
      return <ShimerUi />;
    }
    return (
      <div className="class-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Github: {url}</h3>
      </div>
    );
  }
}

export default UserClass;
