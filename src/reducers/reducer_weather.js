import { FETCH_WEATHER }  from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
      // CAN DO: return state.concat([action.payload.data]);
      // CAN'T DO: return state.push(action.payload.data);
  };

  return state;
}
