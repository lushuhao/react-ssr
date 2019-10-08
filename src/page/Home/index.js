import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

class Home extends Component {
  static loadData(store) {
    return store.dispatch(getHomeList());
  }

  componentDidMount() {
    const { newsList, getHomeList } = this.props;
    if (!newsList.length) {
      getHomeList();
    }
  }

  render() {
    const { newsList = [] } = this.props;
    return (
      <div>
        <Header />
        {
          newsList.map(news => <p key={news.id}>{news.title}</p>)
        }
      </div>
    );
  }

}

export default connect(
  state => ({
    newsList: state.home.newsList,
  }),
  dispatch => ({
    getHomeList: () => dispatch(getHomeList()),
  }),
)(Home);