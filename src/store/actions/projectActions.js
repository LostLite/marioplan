export const createProject = project => {
    return (dispatch, getState) => {
        //pause dispatch and fetch posts asynchronously

        //resume dispatch
        dispatch({type:'CREATE_PROJECT', project});
    }
}