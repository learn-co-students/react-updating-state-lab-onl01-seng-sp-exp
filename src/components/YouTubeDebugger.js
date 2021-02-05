/*
[] In the components/YouTubeDebugger.js file, create a YouTubeDebugger React  component.
[] This component has several state properties. The initial state shape looks like this:
    {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
[] Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
[] Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
*/

import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleChangeBitrate = () => {
    console.log(`Bitrate is ${this.state.settings.bitrate}`);
    this.setState(
      {
        settings: {
          ...this.state.settings,
          bitrate: 12,
        },
      },
      () => console.log(`Bitrate is now ${this.state.settings.bitrate}`)
    );
  };

  handleChangeResolution = () => {
    console.log(`Resolution is ${this.state.settings.video.resolution}`);
    this.setState(
      {
        settings: {
          ...this.state.settings,
          video: {
            resolution: "720p",
          },
        },
      },
      () => console.log(`Resolution is now ${this.state.settings.video.resolution}`)
    );
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.handleChangeResolution}>
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;