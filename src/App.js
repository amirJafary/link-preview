import React from 'react';
import { Provider } from 'react-redux';

import Counter from './redux/components/Counter';
import Store from './redux/Store'
import './style/App.css'


const App = () => {

    return (
        <Provider store={Store()}>
            <div className='App h-full'>
                <Counter />
            </div>
        </Provider>
    );
};

export default App;
