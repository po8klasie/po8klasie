import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootEpic, rootReducer } from './modules/root';

const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(rootEpic as any);

  return store;
};

export default configureStore;
