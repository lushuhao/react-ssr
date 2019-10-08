import { getNews } from '../../../common/api/home';
import { CHANGE_LIST } from './constants';

const changeList = (list) => {
  return {
    type: CHANGE_LIST,
    list,
  };
};

export const getHomeList = () => dispatch => getNews().then(res => {
  return dispatch(changeList(res.data));
});

