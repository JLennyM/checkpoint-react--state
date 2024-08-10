import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "John Thariki",
        bio: "A passionate software developer.",
        imgSrc: "https://avatars.mds.yandex.net/i?id=1de3f86dc833cc56b3159e5052f754fe4b62ef25655df559-12607440-images-thumbs&n=13",
        profession: "Software Developer"
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  startTimer = () => {
    this.timerID = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  };

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>John's Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <h3>{profession}</h3>
          </div>
        )}
        <p>Profile {mountedTime} seconds ago.</p>
      </div>
    );
  }
}

export default App;
