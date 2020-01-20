export const RacesActions = {
  GET_RACE_BY_ID: 'GET_RACE_BY_ID',
  GET_RACE_BY_ID_SUCCESS: 'GET_RACE_BY_ID_SUCCESS',
  GET_RACE_BY_ID_FAILURE: 'GET_RACE_BY_ID_FAILURE',
};

export const getRaceById = payload => ({
  type: RacesActions.GET_RACE_BY_ID,
  payload,
});

export const getRaceByIdSuccess = payload => ({
  type: RacesActions.GET_RACE_BY_ID_SUCCESS,
  payload,
});

export const getRaceByIdFailure = payload => ({
  type: RacesActions.GET_RACE_BY_ID_FAILURE,
  payload,
});
