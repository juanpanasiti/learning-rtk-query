import { Provider } from 'react-redux';

import { HomePage } from './pages/HomePage';
import { store } from './store';

export const RTKQueryLearning = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};
