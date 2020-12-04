import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import home from './homereducer';
import todo from './Reducer';
// import thunk from 'redux-thunk'
let rootReducer = combineReducers({
    todo,home
})

//输出日志
function logger({ getState }) {
    return (next) => (action) => {
      console.log('will dispatch', action)
  
      // 调用 middleware 链中下一个 middleware 的 dispatch。
      let returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // 一般会是 action 本身，除非
      // 后面的 middleware 修改了它。
      return returnValue
    }
  }
  const thunk=({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }}
  const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(logger,thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
  
export default store;