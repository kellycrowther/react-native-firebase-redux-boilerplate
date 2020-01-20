import {RacesActions} from '../actions';

const INITIAL_STATE = {
  loading: {
    createRace: false,
    getRacesByUser: false,
    updateRace: false,
    deleteRace: false,
    getRaceById: false,
    getAllRaces: false,
  },
  loaded: {
    createRace: false,
    getRacesByUser: false,
    updateRace: false,
    deleteRace: false,
    getRaceById: false,
    getAllRaces: false,
  },
  races: [],
  currentRace: {
    name: '',
    id: '',
    results: [],
  },
};

const racesState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RacesActions.GET_RACE_BY_ID: {
      return {
        ...state,
        loading: {
          ...state.loading,
          getRaceById: true,
        },
        loaded: {
          ...state.loaded,
          getRaceById: false,
        },
      };
    }
    case RacesActions.GET_RACE_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          getRaceById: false,
        },
        loaded: {
          ...state.loaded,
          getRaceById: true,
        },
        currentRace: action.payload,
      };
    }
    case RacesActions.GET_RACE_BY_ID_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          getRaceById: false,
        },
        loaded: {
          ...state.loaded,
          getRaceById: false,
        },
      };
    }
    default:
      return state;
  }
};

export default racesState;
