import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../nav/Navigation';
import Error404 from '../error/404';

import Footer from '../footer/Footer';
import Container from '../Container';
import Header from '../header/Header';
import ListPage from '../pages/ListPage';

import { Check, Setting, Time } from '../commute';

const App = () => (
        <div id='wrapper'>
            <Navigation/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <Switch>
                        {/* 컨테이너 파일 작성해서 추가하시면 됩니다. */}
                        <Route path="/index" component={Container} />
                        <Route path="/list" component={ListPage} />
                        <Route path="/setting" component={Setting} />
                        <Route path="/check" component={Check} />
                        <Route path="/time" component={Time} />
                        <Route component={Error404} />
                    </Switch>
                </div>
                <Footer />
            </div>

        </div>
);

export default App;