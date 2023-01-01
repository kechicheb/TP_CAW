import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
  initialState: [
    {
      id: 16352626,
      subject: "Football",
      description: "ddddddddd",
      date: "2022-11-30",
      like: 10,
      commit: "",
    },
    {
      id: 16352625,
      subject: "Football",
      description: "ddddddddd",
      date: "2022-11-29",
      like: 4,
      commit: "hello ahmed",
    },
    {
      id: 16352620,
      subject: "Football",
      description: "ddddddddd",
      date: "2022-11-24",
      like: 22,
      commit: "",
    },
    {
      id: 163554306,
      subject: "Football",
      description: "ddddddddd",
      date: "2022-11-22",
      like: 56,
      commit: "",
    },
  ],
  name: "postSlice",
  reducers: {
    addPost: (state, action) => {
      const post = action.payload;
      return [{ id: Date.now(), ...post, like: 0, commit: "" }, ...state];
    },

    like: (state, action) => {
      const post = action.payload;
      state.map((x) => {
        if (x.id === post.id) {
          x.like++;
        }
      });
    },
    addCommit: (state, action) => {
      const [id, commit] = action.payload;
      state.map((x) => {
        if (x.id === id) {
          x.commit = commit;
        }
      });
    },
  },
});
export const { addPost, addCommit, like } = postSlice.actions;
export default postSlice.reducer;
