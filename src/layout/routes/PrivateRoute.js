import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { selectPrivateVerifiedUser, selectPrivateUser } from 'ducks/selectors';
import { routes } from 'layout/routes/routes';
import { PrivateLayout } from 'layout/layouts/PrivateLayout';

class PrivateRouteWrapper extends PureComponent {
  static propTypes = {
    privateUser: PropTypes.bool,
    privateVerifiedUser: PropTypes.bool,
    component: PropTypes.object,
    variant: PropTypes.string,
    layout: PropTypes.any,
    location: PropTypes.object,
  };

  render() {
    const {
      component: Component,
      privateUser,
      privateVerifiedUser,
      variant,
      location,
      ...rest
    } = this.props;
    if (privateUser) {
      return (
        <Route
          key={location.pathname}
          {...rest}
          render={props => (
            <Redirect
              to={{
                pathname: routes.VALIDATE,
                state: {
                  from: props.location,
                },
              }}
            />
          )}
        />
      );
    }
    if (!privateUser && !privateVerifiedUser) {
      return (
        <Route
          key={location.pathname}
          {...rest}
          render={props => (
            <Redirect
              to={{
                pathname: routes.LOGIN,
                state: {
                  from: props.location,
                },
              }}
            />
          )}
        />
      );
    }
    return (
      <Route
        key={location.pathname}
        {...rest}
        render={props => (
          <PrivateLayout variant={variant}>
            <Component {...props} />
          </PrivateLayout>
        )}
      />
    );
  }
}
const mapStateToProps = state => ({
  privateUser: selectPrivateUser(state),
  privateVerifiedUser: selectPrivateVerifiedUser(state),
});

export const PrivateRoute = withRouter(
  connect(mapStateToProps)(PrivateRouteWrapper),
);
