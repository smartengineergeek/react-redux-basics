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
        <div className="row">
            <div className="col-xs-3">
                <pre>
                    <code className="language-js">
                    {`
                        // UserReducer
                        const userReducer = (state = {
                            name: "Max", age: 27
                        }, action) => {
                            switch (action.type) {
                                case "SET_NAME_FULFILLED": 
                                    state = {
                                        ...state,
                                        name: action.payload,
                                    };
                                    break;
                                case "SET_AGE":
                                        state = {
                                            ...state,
                                            age: action.payload
                                        };
                                        break;    
                                default:
                            }
                            return state;
                        }
                        export default userReducer;
                    `}
                    </code>
                </pre>
            </div>
            <div className="col-xs-6 offset-xs-1">
                <pre>
                    <code className="language-js">
                        {`
                        // userActions.js
                        export function setName(name){
                            // return dispatch => {
                            //     setTimeout(() => {
                            //         dispatch({
                            //             type: 'SET_NAME',
                            //             payload: name
                            //         })
                            //     }, 2000);
                            // }
                            return {
                                type: "SET_NAME",
                                payload: new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        resolve(name)
                                    }, 2000);
                                })
                            }
                        }
                        `}
                    </code>
                </pre>
            </div>
        </div>
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
