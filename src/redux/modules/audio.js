// Constants
export const SET_CURRENT = 'SET_CURRENT'
export const PLAY_CURRENT = 'PLAY_CURRENT'
export const PAUSE_CURRENT = 'PAUSE_CURRENT'

export const PLAY_NEXT = 'PLAY_NEXT'
export const PLAY_PREV = 'PLAY_PREV'

export const CHANGE_VOL = 'CHANGE_VOL'

export const UPDATE_TIME = 'UPDATE_TIME'

// action makers

export function setCurrent(url) {
  return {
    type: SET_CURRENT,
    url: url
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

export const actions = {
  setCurrent,
  playCurrent,
  pauseCurrent,
  playNext,
  playPrevious,
  changeVolume,
  updateTime
}

export default function audioReducer(state = {current: {url: 'https://s3-ap-southeast-1.amazonaws.com/nvision/h.mp3', idx: 0, percentDone: 0}, playing: false, playlist: ['https://s3-ap-southeast-1.amazonaws.com/nvision/h.mp3', 'https://s3-ap-southeast-1.amazonaws.com/nvision/i.mp3'], volume: 0.5, changeTime: false}, action) {
  switch (action.type) {
    case SET_CURRENT:
      return Object.assign({}, state, {current: {url: action.url}});
      break;
    case PLAY_CURRENT:
      let currentURL = state.current.url;
      if (!currentURL) {
        currentURL = state.playlist[0];
      }
      return Object.assign({}, state, {playing: true}, {current: {url: currentURL, idx: state.current.idx}});
      break;
    case PAUSE_CURRENT:
      return Object.assign({}, state, {playing: false});
      break;
    case PLAY_NEXT:
      if (state.playlist.length > state.current.idx + 1) {
        return Object.assign({}, state, {playing: true}, {current: {url: state.playlist[state.current.idx+1], idx: state.current.idx + 1}});
      }
      return Object.assign({}, state, {playing: false}, {current: {url: '', idx: 0}});
      break;
    case PLAY_PREV:
      if (state.current.idx - 1 >= 0) {
        return Object.assign({}, state, {playing: true}, {current: {url: state.playlist[state.current.idx-1], idx: state.current.idx - 1}});
      }
      return Object.assign({}, state, {playing: false}, {current: {url: '', idx: 0}});
      break;
    case CHANGE_VOL:
      return Object.assign({}, state, {volume: action.value});
    case UPDATE_TIME:
      let current = Object.assign({}, state.current);
      current.percentDone = action.value;
      return Object.assign({}, state, {current: current});
    default:
      return state;
  }
}
