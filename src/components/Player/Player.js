import React from 'react';
import { connect } from 'react-redux'
var RCslider = require('rc-slider');

import styles from './player.scss';
import {actions as audioActions} from 'redux/modules/audio';

function log(value) {
  console.log(value);
}

const mapStateToProps = (state) => {
  return {
    audio: state.audio
  }
}

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  // Helper Functions.
  play() {
    this.audio.play();
    this.props.playCurrent();
  }
  pause() {
    this.audio.pause();
    this.props.pauseCurrent();
  }

  componentDidMount() {
    this.audio = new Audio(this.props.audio.current.url);
    this.audio.volume = this.props.audio.volume;
    this.audio.addEventListener('timeupdate', (target) => {
      this.props.updateTime((target.currentTarget.currentTime * 100) / target.currentTarget.duration)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.audio.current.url != nextProps.audio.current.url) {
      this.audio.src = nextProps.audio.current.url;
    }

    nextProps.audio.playing ? this.audio.play() : this.audio.pause()
    this.audio.volume = this.props.audio.volume;

    if (Math.abs(this.props.audio.current.percentDone - nextProps.audio.current.percentDone) > 3) {
      this.audio.currentTime = (nextProps.audio.current.percentDone * this.audio.duration) / 100;
    }
  }

  render() {
    let playButton = <button onClick={this.play.bind(this)}><i className={`fa fa-play-circle-o fa-2x ${styles.control}`}></i></button>
    if (this.props.audio.playing) {
      playButton = <button onClick={this.pause.bind(this)}><i className={`fa fa-pause-circle-o fa-2x ${styles.control}`}></i></button>
    }

    return <div className={`container-fluid ${styles.player}`}>
      <div className={`row vertical-align`}>
        <div className={`${styles.controls} col-xs-3`}>
          <button onClick={this.props.playPrevious}><i className={`fa fa-step-backward fa-2x ${styles.control}`}></i></button>
          {playButton}
          <button onClick={this.props.playNext}><i className={`fa fa-step-forward fa-2x ${styles.control}`}></i></button>
        </div>
        <div className={`col-xs-2`}>
          <RCslider defaultValue={this.props.audio.volume * 100} onChange={this.props.changeVolume} tipFormatter={null} />
        </div>
        <div className='col-xs-6'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-2'>
                <img width='100%' src='http://pre05.deviantart.net/b5d8/th/pre/i/2013/361/7/5/lights_album_art_by_bonvallet-d6ylvvi.png' />
              </div>
              <div className='col-xs-10'>
                <div className='container-fluid'>
                  <div className='row'>
                    <p>LOL</p>
                  </div>
                  <div>
                    <p>Coldplay - A Head full of Dreams</p>
                  </div>
                  <RCslider value={this.props.audio.current.percentDone || 0} onChange={this.props.updateTime} tipFormatter={null} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default connect(mapStateToProps, audioActions)(Player);
