import { CHANGE_POST } from "../actionTypes";

const initialState = {
  postId: null,
  creator: null,
  urlImg: null,
  title: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_POST: {
      const { postId, creator, urlImg, title } = action.payload;
      return {
        ...state,
        postId: postId,
        creator: creator,
        urlImg: urlImg,
        title: title
      };
    }
    default:
      return state;
  }
}
