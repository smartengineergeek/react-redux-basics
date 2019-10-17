import React from 'react';
import { connect } from 'react-redux';

import Main from '../components/Main';
import User from '../components/User';
import './app.css';
import { setName } from '../actions/userActions';

const App = props => (
    <div className="container">
        <Main changeUsername={() => props.setName("Anna")} />
            <br/>
        <User username={props.user.name} />
    </div>
)

const mapStateToProps = state => {
    return {
        user: state.user,
        math: state.math
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
