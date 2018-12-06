import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const loading = () => <div>LOADING...</div>;

const DefaultLayout = Loadable({
    loader: () => import('./containers/DefaultLayout'),
    loading
});

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={DefaultLayout} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;