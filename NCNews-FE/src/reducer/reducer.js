import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedArticle: {},
  selectedComments: [],
  loading: false,
  error: null,
  selectedTopic: null
};

function reducer (prevState = initialState, action) {
  if (!action) return prevState;

// fetchArticles
  if (action.type === types.FETCH_ARTICLES_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  // fetchArticlesByID
  if (action.type === types.FETCH_ARTICLES_BY_ID_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_BY_ID_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.selectedArticle = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_BY_ID_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.selectedArticle = {};
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

    // fetchArticlesByUser
    if (action.type === types.FETCH_ARTICLES_BY_USER_REQUESTS) {
      const newState = Object.assign({}, prevState);
      newState.articles = [];
      newState.selectedArticle = {};
      newState.loading = true;
      return newState;
    }
  
    if (action.type === types.FETCH_ARTICLES_BY_USER_SUCCESS) {
      const newState = Object.assign({}, prevState);
      newState.articles = action.payload;
      newState.loading = false;
      return newState;
    }
  
    if (action.type === types.FETCH_ARTICLES_BY_USER_ERROR) {
      const newState = Object.assign({}, prevState);
      newState.articles = [];
      newState.selectedArticle = {};
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }

  // fetchCommentsByArticleID
  if (action.type === types.FETCH_COMMENTS_BY_ARTICLE_ID_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_BY_ARTICLE_ID_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.selectedComments = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_BY_ARTICLE_ID_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.selectedArticle = {};
    newState.selectedComments = {};
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

    // fetchCommentsByUser
    if (action.type === types.FETCH_COMMENTS_BY_USER_REQUESTS) {
      const newState = Object.assign({}, prevState);
      newState.loading = true;
      return newState;
    }
  
    if (action.type === types.FETCH_COMMENTS_BY_USER_SUCCESS) {
      const newState = Object.assign({}, prevState);
      newState.selectedComments = action.payload;
      newState.loading = false;
      return newState;
    }
  
    if (action.type === types.FETCH_COMMENTS_BY_USER_ERROR) {
      const newState = Object.assign({}, prevState);
      newState.articles = [];
      newState.selectedArticle = {};
      newState.selectedComments = {};
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }

// addCommentsByArticleID
  if (action.type === types.ADD_COMMENTS_BY_ARTICLE_ID_POST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ADD_COMMENTS_BY_ARTICLE_ID_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.selectedComments = newState.selectedComments.push(action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.ADD_COMMENTS_BY_ARTICLE_ID_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.selectedArticle = {};
    newState.selectedComments = {};
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

// articleVoteUp
    if (action.type === types.ARTICLE_VOTE_UP_REQUEST) {
      const newState = Object.assign({}, prevState);
      newState.loading = true;
      return newState;
    }

    if (action.type === types.ARTICLE_VOTE_UP_SUCCESS) {
      const newState = Object.assign({}, prevState);
      newState.loading = false;
      newState.selectedArticle.votes++;
      return newState;
    }

    if (action.type === types.ARTICLE_VOTE_UP_ERROR) {
      const newState = Object.assign({}, prevState);
      newState.error = action.error;
      return newState;
    }

// articleVoteDown
    if (action.type === types.ARTICLE_VOTE_DOWN_REQUEST) {
      const newState = Object.assign({}, prevState);
      newState.loading = true;
      return newState;
    }

    if (action.type === types.ARTICLE_VOTE_DOWN_SUCCESS) {
      const newState = Object.assign({}, prevState);
      newState.loading = false;
      newState.selectedArticle.votes--;
      return newState;
    }

    if (action.type === types.ARTICLE_VOTE_DOWN_ERROR) {
      const newState = Object.assign({}, prevState);
      newState.error = action.error;
      return newState;
    }

// fetchUser
    if (action.type === types.FETCH_USER_REQUESTS) {
      const newState = Object.assign({}, prevState);
      newState.loading = true;
      return newState;
    }
    
    if (action.type === types.FETCH_USER_SUCCESS) {
      const newState = Object.assign({}, prevState);
      newState.user = action.payload;
      newState.loading = false;
      return newState;
    }
    
    if (action.type === types.FETCH_USER_ERROR) {
      const newState = Object.assign({}, prevState);
      newState.user = {};
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }

// fetchAllUsers
    if (action.type === types.FETCH_ALL_USERS_REQUESTS) {
      const newState = Object.assign({}, prevState);
      newState.loading = true;
      return newState;
    }
    
    if (action.type === types.FETCH_ALL_USERS_SUCCESS) {
      const newState = Object.assign({}, prevState);
      newState.allUsers = action.payload;
      newState.loading = false;
      return newState;
    }
    
    if (action.type === types.FETCH_ALL_USERS_ERROR) {
      const newState = Object.assign({}, prevState);
      newState.allUsers = {};
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }

  return prevState;
}


export default reducer;
