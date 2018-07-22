const mongoose = require('mongoose');

// const { Schema } = mongoose; same here const Scheme = mongoose.Schema; completely equal --> es 2015 
const { Schema } = mongoose;

//Schema có thể add thêm property mà không lo gì cả
const userSchema = new Schema({
    googleId: String
});


//mongoose.model('users'. userSchema); `note` 
//- mongoose chỉ tạo khi nó không tồn tại nếu tồn tại rồi sẽ lấy ra
mongoose.model('users', userSchema);
