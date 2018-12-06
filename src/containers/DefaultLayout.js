import React, { Suspense } from 'react';
//import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

class DefaultLayout extends React.Component {
    loading = () => <div>Loading...</div>

    render() {
        return (
            <div className="app">
                <div className="app-body">
                    <main>
                        <Container fluid>
                            <Suspense fallback={this.loading()}>
                                This is a test
                            </Suspense>
                        </Container>
                    </main>
                </div>
            </div>
        )
    }
}

export default DefaultLayout;