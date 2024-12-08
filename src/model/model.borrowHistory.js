const mongoose = require("mongoose");

const schema = mongoose.Schema;

const borrowHistorySchema = schema({
  bookId: {
    type: schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  borroweAt: {
    type: Date,
    default: Date.now,
  },
  returnedAt: {
    type: Date,
    default: Date.now,
  },
});

const BorrowHistory = mongoose.model("BorrowHistory", borrowHistorySchema);

module.exports = new BorrowHistory();
