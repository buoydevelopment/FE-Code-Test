//home

export const set_test = (data) => {
  return dispatch => dispatch({ type: 'SET_TEST', data });
  // return dispatch => fetch('/api/v1/stats/featured_retailers')
  // .then(res => res.json())
  // .then(
  //   data => dispatch({ type: 'SET_FEATURED_RETAILERS_DATA', data }),
  //   err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
  // );
}

export const no_header = () => {
  // return dispatch => fetch('/api/v1/profile/account')
  // .then(res => res.json())
  // .then(
  //   data => dispatch({ type: 'SET_CURRENT_USER_DATA', data }),
  //   err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
  // );
}

export const yes_header = (current_user, token) => {
  // return dispatch => fetch('/api/v1/profile/account', {
  //   method: 'put',
  //   body: JSON.stringify({user: current_user.user}),
  //   credentials: 'same-origin',
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-Access-Level": "read-write",
  //     'X-CSRF-Token': token
  //   }
  // }).then(res => res.json())
  // .then(
  //   data => dispatch({ type: 'SET_CURRENT_USER_DATA', data }),
  //   err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
  // ).then(
  //   data => dispatch({ type: 'SET_SHOW_NOTIFICATION', status_message })
  // ).then(
  //   data => dispatch({ type: 'SET_MESG_NOTIFICATION', message }), 
  //   () => {
  //     message = 'Error updating data!';
  //     return dispatch({ type: 'SET_MESG_NOTIFICATION', message })
  //   }
  // ).then(
  //   data => dispatch({ type: 'SET_CLSS_NOTIFICATION', class_name }), 
  //   () => {
  //     class_name = 'message-alert';
  //     return dispatch({ type: 'SET_CLSS_NOTIFICATION', class_name })
  //   }
  // );
}