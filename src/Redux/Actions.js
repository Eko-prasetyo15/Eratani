import axios from 'axios'
import history from '../history'

const URL = `https://api.eratani.co.id/tips/get`;

export const handlePush = (location) => {
    setTimeout(() => {
        history.push(location)
        window.location.reload()
    }, 2000);
}

export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const postDataSuccess = (datas) => ({
    type: 'POST_DATA_SUCCESS',
    datas,
});
const postDataFailure = (err) => ({
    type: 'POST_DATA_FAILURE',
    err,
});

export const postData = () => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(URL, {},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(postDataSuccess(response.data.data));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postDataFailure(error))
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};


