const { model, Schema } = require("mongoose");

const postSchema = Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.ObjectId,
    ref: "users",
  },
});

module.exports = model("Post", postSchema);
