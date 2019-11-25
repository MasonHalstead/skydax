import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStrategies as getStrategiesOperator } from 'ducks/operators/strategies';
import { setLoading as setLoadingAction } from 'ducks/actions';
import { Table } from 'components/table/Table';
import uuid from 'uuid';
import {
  ExchangeCell,
  PairCell,
  QuantityCell,
  PositionCell,
  LastPriceCell,
  EntryPriceCell,
  BreakEvenCell,
  UnrealisedPnlCell,
  LiquidationCell,
} from './StrategiesCells';
import cn from './StrategiesPage.module.scss';

export class StrategiesPage extends Component {
  static propTypes = {
    getStrategies: PropTypes.func,
    setLoading: PropTypes.func,
  };

  state = {
    headers: [
      {
        title: 'Exchange',
        show: true,
        flex_grow: 1,
        min_width: '150px',
        uuid: uuid.v1(),
      },
      {
        title: 'Pair',
        show: true,
        min_width: '100px',
        uuid: uuid.v1(),
      },
      {
        title: 'Quantity',
        show: true,
        min_width: '100px',
        uuid: uuid.v1(),
      },
      {
        title: 'Balance',
        show: true,
        min_width: '100px',
        uuid: uuid.v1(),
      },
      {
        title: 'Last Price',
        show: true,
        min_width: '100px',
        uuid: uuid.v1(),
      },
      {
        title: 'Entry Price',
        show: true,
        min_width: '100px',
        uuid: uuid.v1(),
      },
      {
        title: 'Break Even',
        show: true,
        min_width: '100px',
        uuid: uuid.v1(),
      },
      {
        title: 'Unrealised PNL',
        show: true,
        min_width: '100px',
        uuid: uuid.v1(),
      },
      {
        title: 'Liquidation',
        show: true,
        min_width: '100px',
        uuid: uuid.v1(),
      },
    ],
  };

  componentDidMount = () => {
    this.handleInitialData();
  };

  handleInitialData = async () => {
    const { setLoading, getStrategies } = this.props;
    setLoading(true);
    try {
      await getStrategies();
    } catch {
      console.log('Strategies Error');
    }
    setLoading(false);
  };

  render() {
    const { headers } = this.state;
    const { strategies } = this.props;
    return (
      <div className={cn.page}>
        <div className={cn.strategyBlock}>
          <div className={cn.panelLeft}>
            <p>Strategy Stats</p>
          </div>
          <div className={cn.panelRight}>
            <p>Strategy Stats</p>
          </div>
        </div>
        <div className={cn.strategyTable}>
          <Table
            rows={strategies}
            headers={headers}
            cell_components={[
              ExchangeCell,
              PairCell,
              QuantityCell,
              PositionCell,
              LastPriceCell,
              EntryPriceCell,
              BreakEvenCell,
              UnrealisedPnlCell,
              LiquidationCell,
            ]}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  strategies: state.strategies,
});

const mapDispatchToProps = {
  setLoading: setLoadingAction,
  getStrategies: getStrategiesOperator,
};

export default connect(mapStateToProps, mapDispatchToProps)(StrategiesPage);
