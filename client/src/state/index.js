import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  loggedInUser: null,
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.loggedInUser = action.payload.user;
      state.token = action.payload.token;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      if (state.loggedInUser._id === action.payload.user._id) {
        state.loggedInUser = action.payload.user;
      }
    },
    setLogout: (state) => {
      state.loggedInUser = null;
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user && state.loggedInUser) {
        state.loggedInUser.friends = action.payload.loggedInUserFriends;
        if (action.payload.userFriends) {
          state.user.friends = action.payload.userFriends;
        } else {
          state.user.friends = action.payload.loggedInUserFriends;
        }
      } else {
        console.error("User friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map(post => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    }
  }
})

export const { setMode, setLogin, setUser, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;
