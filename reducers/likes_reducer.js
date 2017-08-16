import _ from 'lodash';
import {
  LIKE_JOB,
  CLEAR_LIKED_JOBS,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CLEAR_LIKED_JOBS:
      return [];
    case LIKE_JOB:
      // check if the job is already liked
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey');
    default:
      return state;
  }
};