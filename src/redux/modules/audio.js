// Constants
export const SET_CURRENT = 'SET_CURRENT'
export const PLAY_CURRENT = 'PLAY_CURRENT'
export const STOP_CURRENT = 'STOP_CURRENT'

export const PLAY_NEXT = 'PLAY_NEXT'
export const PLAY_PREV = 'PLAY_PREV'

export const CHANGE_VOL = 'CHANGE_VOL'

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

export const actions = {
  setCurrent,
  playCurrent
}

export default function audioReducer(state = {current: 'https://s3-ap-southeast-1.amazonaws.com/nvision/h.mp3'}, action) {
  switch (action.type) {
    case SET_CURRENT:
      return Object.assign({}, state, {current: action.url});
      break;
    case PLAY_CURRENT:
      return Object.assign({}, state, {playing: true});
      break;
    default:
      return state;
  }
}
