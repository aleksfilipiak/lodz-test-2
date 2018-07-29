import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import UsersList from "./components/users_list";
import UserShow from "./components/users_show";
import UserCreate from "./components/users_create";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path = '/users/new' component = {UserCreate}/>
                    <Route path="/:id" component={UserShow}/>
                    <Route path="/" component={UsersList}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector(".container")
);