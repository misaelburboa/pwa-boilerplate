import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import Navbar from '../components/Navbar';
import NotFound from './NotFound';

class DefaultLayout extends React.Component {
    loading = () => <div>Loading...</div>

    componentDidMount() {
        console.log("DID MOUNT EXECUTED!");
    }
    render() {
        return (
            <div className="app">
                <div className="app-body">
                    <main>
                        <Suspense fallback={this.loading()}>
                            <Navbar />
                            <Switch>
                                {routes.map((route, idx) => {
                                    return route.component ? (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={props => (
                                                <route.component {...props} />
                                            )} />
                                    ) : (null);
                                })}

                                <Route component={NotFound} />
                            </Switch>
                        </Suspense>
                    </main>
                </div>
            </div>
        )
    }
}

export default DefaultLayout;