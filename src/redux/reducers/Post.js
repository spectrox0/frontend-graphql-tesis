import { CHANGE_POST } from "../actionTypes";

const initialState = {
  postId: null,
  creator: null,
  urlImg: null,
  title: null,
  messages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_POST: {
      const { postId, messages, creator, urlImg, title } = action.payload;
      return {
        ...state,
        postId: postId,
        messages: messages,
        creator: creator,
        urlImg: urlImg,
        title: title
      };
    }
    default:
      return state;
  }
}
