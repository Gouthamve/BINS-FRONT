import React from 'react';

import styles from './player.scss';
var RCslider = require('rc-slider');

function log(value) {
  console.log(value);
}

const Player = () => {
  return <div className={`container-fluid ${styles.player}`}>
    <div className={`row vertical-align`}>
      <div className={`${styles.controls} col-xs-3`}>
        <button><i className={`fa fa-step-backward fa-2x ${styles.control}`}></i></button>
        <button><i className={`fa fa-play-circle-o fa-2x ${styles.control}`}></i></button>
        <button><i className={`fa fa-step-forward fa-2x ${styles.control}`}></i></button>
      </div>
      <div className={`col-xs-2`}>
        <RCslider onChange={log} />
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
                <RCslider onChange={log} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Player;
