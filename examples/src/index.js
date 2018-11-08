import React from 'react';
import { render} from 'react-dom';
import UmutiLanding from '../../src';

const header = () => {
    return (
        <div>This is the header</div>
    );
}

const App = () => (
    <UmutiLanding
    loggedIn={false}
    >
        <header />
    </UmutiLanding>
);
render(<App />, document.getElementById("root"));