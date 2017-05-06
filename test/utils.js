import createRouter from 'router5';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RouterProvider } from '../modules';
import { renderIntoDocument } from 'react-dom/test-utils';
import browserPlugin from 'router5/plugins/browser';

export class Child extends Component {
    render() {
        return <div />;
    }
}

Child.contextTypes = {
    router: PropTypes.object.isRequired
};

export const FnChild = (props) => <div />;

export const createTestRouter = () => createRouter().usePlugin(browserPlugin());

export const renderWithRouter = router => BaseComponent => renderIntoDocument(
    <RouterProvider router={ router }>
        <BaseComponent />
    </RouterProvider>
);
