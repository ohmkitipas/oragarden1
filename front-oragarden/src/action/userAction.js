import Axios from 'axios';
import { USER_SIGNOUT } from '../constants/userConstants';

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItem');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: USER_SIGNOUT });
    document.location.href = '/signin';
};

export const detailUser = (userId) => async(dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST, payload: userId});
    const {
        userSignin: { userInfo },
      } = getState();
      try {
        const { data } = await Axios.get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: USER_DETAILS_FAIL, payload: message });
      }
    };