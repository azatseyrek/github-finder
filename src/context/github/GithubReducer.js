const githubReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };
        case 'SET_REPOS':
        return {
            ...state,
            repos: action.repos,
        };
        case 'SET_LOADING':
        return {
            ...state,
            loading: action.loading,
        };
        case 'SET_ERROR':
        return {
            ...state,
            error: action.error,
        };
        default:
        return state;
    }
}

export default githubReducer;