import { Component } from 'react';
import { connect } from "react-redux";
import { getPosts } from "../actions";
class Layout extends Component {
    render() {
        return (
            <>
                {this.props.children}
            </>

        )

    }
}
