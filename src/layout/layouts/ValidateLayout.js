import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Loading } from 'components/loading/Loading';
import classNames from 'classnames';
import cn from './Layouts.module.scss';
class ConnectedValidateLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.object,
    loading: PropTypes.bool,
    variant: PropTypes.string,
  };

  render() {
    const { children, variant, loading } = this.props;
    return (
      <div className={classNames(cn.privateContainer, cn[variant])}>
        <div className={cn.privateContent}>{children}</div>
        <p className={cn.version}>v {process.env.REACT_APP_VERSION}</p>
        {loading && <Loading variant="dark" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.settings.loading,
});

export const ValidateLayout = withRouter(
  connect(mapStateToProps)(ConnectedValidateLayout),
);
