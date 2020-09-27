import { combineReducers } from 'redux';
import projectsReducer from './Projects/projects.slice';
import apiUrlReducer from './ApiUrl/api-url-slice';

const rootReducer = combineReducers({
  projects: projectsReducer,
  apiurl: apiUrlReducer,
});

export default rootReducer;
