import * as types from './types';
import axios from 'axios';
import { ROOT } from '../config';

// fetchArticles
export function fetchArticles () {
  return function (dispatch) {
    dispatch(fetchArticlesRequest());
    axios.get(`${ROOT}/articles`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchArticlesError(err));
      });
  };
}

export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUESTS
  };
}

export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    payload: articles
  };
}

export function fetchArticlesError (error) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    payload: error
  };
}

// fetchArticlesByID
export function fetchArticlesByID (id) {
  return function (dispatch) {
    dispatch(fetchArticlesByIDRequest(id));
    axios.get(`${ROOT}/articles/${id}`)
      .then(res => {
        dispatch(fetchArticlesByIDSuccess(res.data.articles[0]));
      })
      .catch(err => {
        dispatch(fetchArticlesByIDError(err));
      });
  };
}

export function fetchArticlesByIDRequest (id) {
  return {
    type: types.FETCH_ARTICLES_BY_ID_REQUESTS,
    id: id
  };
}

export function fetchArticlesByIDSuccess (article) {
  return {
    type: types.FETCH_ARTICLES_BY_ID_SUCCESS,
    payload: article
  };
}

export function fetchArticlesByIDError (error) {
  return {
    type: types.FETCH_ARTICLES_BY_ID_ERROR,
    payload: error
  };
}

// fetchArticlesByUser
export function fetchArticlesByUser (username) {
  return function (dispatch) {
    dispatch(fetchArticlesByUserRequest(username));
    axios.get(`${ROOT}/users/${username}/articles`)
      .then(res => {
        dispatch(fetchArticlesByUserSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchArticlesByUserError(err));
      });
  };
}

export function fetchArticlesByUserRequest (id) {
  return {
    type: types.FETCH_ARTICLES_BY_USER_REQUESTS,
    id: id
  };
}

export function fetchArticlesByUserSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_BY_USER_SUCCESS,
    payload: articles
  };
}

export function fetchArticlesByUserError (error) {
  return {
    type: types.FETCH_ARTICLES_BY_USER_ERROR,
    payload: error
  };
}

// fetchCommentsByUser
export function fetchCommentsByUser (username) {
  return function (dispatch) {
    dispatch(fetchCommentsByUserRequest(username));
    axios.get(`${ROOT}/users/${username}/comments`)
      .then(res => {
        dispatch(fetchCommentsByUserSuccess(res.data.comments));
      })
      .catch(err => {
        dispatch(fetchCommentsByUserError(err));
      });
  };
}

export function fetchCommentsByUserRequest (id) {
  return {
    type: types.FETCH_COMMENTS_BY_USER_REQUESTS,
    id: id
  };
}

export function fetchCommentsByUserSuccess (comments) {
  return {
    type: types.FETCH_COMMENTS_BY_USER_SUCCESS,
    payload: comments
  };
}

export function fetchCommentsByUserError (error) {
  return {
    type: types.FETCH_COMMENTS_BY_USER_ERROR,
    payload: error
  };
}

// fetchCommentsByArticleID
export function fetchCommentsByArticleID (id) {
  return function (dispatch) {
    dispatch(fetchCommentsByArticleIDRequest(id));
    axios.get(`${ROOT}/articles/${id}/comments`)
      .then(res => {
        dispatch(fetchCommentsByArticleIDSuccess(res.data.comments));
      })
      .catch(err => {
        dispatch(fetchCommentsByArticleIDError(err));
      });
  };
}

export function fetchCommentsByArticleIDRequest (id) {
  return {
    type: types.FETCH_COMMENTS_BY_ARTICLE_ID_REQUESTS,
    id: id
  };
}

export function fetchCommentsByArticleIDSuccess (comments) {
  return {
    type: types.FETCH_COMMENTS_BY_ARTICLE_ID_SUCCESS,
    payload: comments
  };
}

export function fetchCommentsByArticleIDError (error) {
  return {
    type: types.FETCH_COMMENTS_BY_ARTICLE_ID_ERROR,
    payload: error
  };
}

// addCommentsByArticleID
export function addCommentsByArticleID (id, data) {
  return function (dispatch) {
    dispatch(addCommentsByArticleIDPost(id, data));
    axios.post(`${ROOT}/articles/${id}/comments`, data)
      .then(res => {
        dispatch(addCommentsByArticleIDSuccess(res.data.comments));
      })
      .catch(err => {
        dispatch(addCommentsByArticleIDError(err));
      });
  };
}

export function addCommentsByArticleIDPost (id, comment) {
  return {
    type: types.ADD_COMMENTS_BY_ARTICLE_ID_POST,
    id: id,
    comment: comment
  };
}

export function addCommentsByArticleIDSuccess (comment) {
  return {
    type: types.ADD_COMMENTS_BY_ARTICLE_ID_SUCCESS,
    payload: comment
  };
}

export function addCommentsByArticleIDError (error) {
  return {
    type: types.ADD_COMMENTS_BY_ARTICLE_ID_ERROR,
    payload: error
  };
}

// fetchTopics
export function fetchTopics () {
  return function (dispatch) {
    dispatch(fetchTopicsRequest());
    axios.get(`${ROOT}/topics`)
      .then(res => {
        dispatch(fetchTopicsSuccess(res.data.topics));
      })
      .catch(err => {
        dispatch(fetchTopicsError(err));
      });

  };
}
export function fetchTopicsRequest () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
}

export function fetchTopicsSuccess (topics) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    payload: topics
  };
}

export function fetchTopicsError (error) {
  return {
    type: types.FETCH_TOPICS_ERROR,
    payload: error
  };
}

// incrementArticleVotes
export function articleVoteUp (id) {
  // add 1 to voteCount
  return function (dispatch) {
    dispatch(articleVoteUpRequest());
    axios.put(`${ROOT}/articles/${id}?vote=up`)
      .then(res => {
        dispatch(articleVoteUpSuccess(res));
      })
      .catch(err => {
        dispatch(articleVoteUpError(err));
      });
  };
}

export function articleVoteUpRequest (id) {
  return {
    type: types.ARTICLE_VOTE_UP_REQUEST,
    payload: id
  };
}

export function articleVoteUpSuccess () {
  return {
    type: types.ARTICLE_VOTE_UP_SUCCESS
  };
}

export function articleVoteUpError (error) {
  return {
    type: types.ARTICLE_VOTE_UP_ERROR,
    payload: error
  };
}

// decrementVotes
export function articleVoteDown (id) {
  // take 1 from voteCount
  return function (dispatch) {
    dispatch(articleVoteDownRequest());
    axios.put(`${ROOT}/articles/${id}?vote=down`)
      .then(res => {
        dispatch(articleVoteDownSuccess(res));
      })
      .catch(err => {
        dispatch(articleVoteDownError(err));
      });
  };
}

export function articleVoteDownRequest (id) {
  return {
    type: types.ARTICLE_VOTE_DOWN_REQUEST,
    payload: id
  };
}

export function articleVoteDownSuccess () {
  return {
    type: types.ARTICLE_VOTE_DOWN_SUCCESS
  };
}

export function articleVoteDownError (error) {
  return {
    type: types.ARTICLE_VOTE_DOWN_ERROR,
    payload: error
  };
}

// fetchUser
export function fetchUser (username) {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios.get(`${ROOT}/users/${username}`)
      .then(res => {
        dispatch(fetchUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchUserError(err));
      });
  };
}

export function fetchUserRequest () {
  return {
    type: types.FETCH_USER_REQUESTS
  };
}

export function fetchUserSuccess (user) {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload: user
  };
}

export function fetchUserError (error) {
  return {
    type: types.FETCH_USER_ERROR,
    payload: error
  };
}

// fetchAllUsers
export function fetchAllUsers () {
  return function (dispatch) {
    dispatch(fetchAllUsersRequest());
    axios.get(`${ROOT}/users`)
      .then(res => {
        dispatch(fetchAllUsersSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchAllUsersError(err));
      });
  };
}

export function fetchAllUsersRequest () {
  return {
    type: types.FETCH_ALL_USERS_REQUESTS
  };
}

export function fetchAllUsersSuccess (users) {
  return {
    type: types.FETCH_ALL_USERS_SUCCESS,
    payload: users
  };
}

export function fetchAllUsersError (error) {
  return {
    type: types.FETCH_ALL_USERS_ERROR,
    payload: error
  };
}
