// Constants
export const SET_CURRENT = 'SET_CURRENT'
export const PLAY_CURRENT = 'PLAY_CURRENT'
export const PAUSE_CURRENT = 'PAUSE_CURRENT'
export const PLAY_NEXT = 'PLAY_NEXT'
export const PLAY_PREV = 'PLAY_PREV'
export const CHANGE_VOL = 'CHANGE_VOL'
export const UPDATE_TIME = 'UPDATE_TIME'
export const SET_PLAYLIST = 'SET_PLAYLIST'

// action makers

export function setCurrent(song) {
  return {
    type: SET_CURRENT,
    song: song
  }
}

export function playCurrent() {
  return {
    type: PLAY_CURRENT
  }
}

export function pauseCurrent() {
  return {
    type: PAUSE_CURRENT
  }
}

export function playNext() {
  return {
    type: PLAY_NEXT
  }
}

export function playPrevious() {
  return {
    type: PLAY_PREV
  }
}

export function changeVolume(vol) {
  vol = vol/100
  return {
    type: CHANGE_VOL,
    value: vol
  }
}

export function updateTime(pc) {
  return {
    type: UPDATE_TIME,
    value: pc
  }
}

export function setPlaylist(pl) {
  return {
    type: SET_PLAYLIST,
    playlist: pl
  }
}

export const actions = {
  setCurrent,
  playCurrent,
  pauseCurrent,
  playNext,
  playPrevious,
  changeVolume,
  updateTime,
  setPlaylist
}

const initialState = {
  current: {
    url: 'https://s3-ap-southeast-1.amazonaws.com/nvision/h.mp3',
    idx: 0,
    percentDone: 0,
    name: 'A Hymn for the Weekend',
    artist: 'Coldplay',
    album: 'A Head full of dreams'
  },
  playing: false,
  playlist: [{
    url: 'https://s3-ap-southeast-1.amazonaws.com/nvision/h.mp3',
    name: 'A Hymn for the Weekend',
    artist: 'Coldplay',
    album: 'A Head full of dreams'
  }, {
    url: 'https://s3-ap-southeast-1.amazonaws.com/nvision/i.mp3',
    name: 'Demons',
    artist: 'Imagine Dragons',
    album: 'Night Visions'
  }],
  playlists: [[{
    name: "A head full of dreams",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/01.+A+Head+Full+Of+Dreams.mp3",
  }, {
    name: "Birds",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/02.+Birds.mp3",
  }, {
    name: "Hymn for the Weekend",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/03.+Hymn+For+The+Weekend.mp3",
  }, {
    name: "Everglow",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/04.+Everglow.mp3",
  }, {
    name: "Adventure of a lifetime",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/05.+Adventure+Of+A+Lifetime.mp3",
  }, {
    name: "Fun (Feat. Tove Lo)",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/06.+Fun+(Feat.+Tove+Lo).mp3",
  }, {
    name: "Kaleidoscope",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/07.+Kaleidoscope.mp3",
  }, {
    name: "Army Of One",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/08.+Army+Of+One.mp3",
  }, {
    name: "Amazing Day",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/09.+Amazing+Day.mp3",
  }, {
    name: "Colour Spectrum",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/10.+Colour+Spectrum.mp3",
  }, {
    name: "Up & Up",
    album: "A head full of dreams",
    artist: "Coldplay",
    url: "https://s3-ap-southeast-1.amazonaws.com/nvision/lol/11.+Up%26Up.mp3",
  }]],
  volume: 0.75,
  changeTime: false
}

export default function audioReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT:
      return Object.assign({}, state, {current: action.song});
      break;
    case PLAY_CURRENT:
      let currentSong = state.current;
      if (!currentSong) {
        currentSong = state.playlist[0];
      }
      return Object.assign({}, state, {playing: true}, {current: {...currentSong, idx: state.current.idx}});
      break;
    case PAUSE_CURRENT:
      return Object.assign({}, state, {playing: false});
      break;
    case PLAY_NEXT:
      if (state.playlist.length > state.current.idx + 1) {
        return Object.assign({}, state, {playing: true}, {current: {...state.playlist[state.current.idx+1], idx: state.current.idx + 1}});
      }
      return Object.assign({}, state, {playing: false}, {current: {url: '', idx: 0}});
      break;
    case PLAY_PREV:
      if (state.current.idx - 1 >= 0) {
        return Object.assign({}, state, {playing: true}, {current: {...state.playlist[state.current.idx-1], idx: state.current.idx - 1}});
      }
      return Object.assign({}, state, {playing: false}, {current: {url: '', idx: 0}});
      break;
    case CHANGE_VOL:
      return Object.assign({}, state, {volume: action.value});
    case UPDATE_TIME:
      let current = Object.assign({}, state.current);
      current.percentDone = action.value;
      return Object.assign({}, state, {current: current});
    case SET_PLAYLIST:
      return Object.assign({}, state, {playlist: action.playlist}, {playing: false}, {current: {...action.playlist[0], idx: 0}});
    default:
      return state;
  }
}
