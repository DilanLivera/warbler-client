import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  messages
});

export const remove = (id) => ({
  type: REMOVE_MESSAGE,
  id
});

export const removeMessage = (user_id, message_id) => {
  return dispatch => {
    return apiCall("DELETE", `/api/users/${user_id}/messages/${message_id}`)
            .then(() => dispatch(remove(message_id)))
            .catch(err => dispatch(addError(err.message)))
  }
};

export const fetchMessages = () => {
  return async dispatch => {
    try {
      const messages = await apiCall("GET", "/api/messages");
      dispatch(loadMessages(messages));
    }
    catch (err) {
      // err object is undefined. need to fix this
      dispatch(addError(err)); //err.message
    }
  };
};

export const postNewMessage = (text) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;

  return apiCall("POST", `api/users/${id}/messages`, { text })
          .then(res => {})
          .catch(err => dispatch(addError(err.message)));
}