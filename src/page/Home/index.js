import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import styles from './index.css'

class Home extends Component {
  static loadData(store) {
    return store.dispatch(getHomeList());
  }
  
  constructor(props) {
    super(props)
    if (props.staticContext) {
      props.staticContext.css = styles._getCss()
    }
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
      <div className={styles.home}>
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