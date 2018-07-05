# lecture 4 new word
preamble: lời nói đầu 
handful of : số ít
rather: khá, 1 chút, hơn, hơi hơi
tremendous: to lơn, phi thường
aspect: khía cạnh, tình trạn, diện mạo,
hypothetical: giả định,
outright: ngay, tròn vẹn , 1 lần nữa, không giấu giếm
diverse: đa dạng, phong phú
particular : cụ thể
assumption: giả bộ, giả đinh
established: thành lập
for the sake of discussion : vì lợi ích của cuộc thảo luận
to record the fact : để ghi lại thực tế
accurate: chính xác
instantly: ngay lập tức
likewise: tương tự như vậy
get longer to be running: chạy lâu hơn
a pain in the rear: một cơn đau ở phía sau
straightforward: đơn giản
flip back :lật lại
wired it up : nâng nó lên
satisfy: thỏa mãn
briefly: tốm tắc, một thời gian ngắn
identical: giống nhau,
arbitrary: tùy ý, tùy biến
treat: tiếp đãi, coi như là (is should treat it like a string: dịch nó nên đc tiếp đãi như là 1 string)
fit: phù hợp (as we see fit chúng ta cảm thấy phù hợp)
# main theory
- build single project 

# Relationship of Node and Express
- Node : javascript runtime used to execute code outside of the browser
- express: library that runs in the node runtime. has helpers to make dealing with http traffic easier

#Deploy heroku.com

#D:\project\Complete Guide Node js>heroku create
#Creating app... done, ⬢ damp-shelf-61146
#https://damp-shelf-61146.herokuapp.com/ | #https://git.heroku.com/damp-shelf-61146.git

git remote add heroku https://git.heroku.com/damp-shelf-61146.git

# heroku login
# heroku create
# git remote add heroku (url)
# git push heroku master

#authentication google
#npm install --save passport passport-google-oahth20 (create clientId, and clieentSecret in console.developers.google.com)

clientID - public token - we can share this with the public
clientSecret - private token - we don't want anyone to see this

#Mongo DB (using Mongoose library for connection)

#Set Up MongoDb: 
- `there're two different ways`
go to mlab.com to create mongo db remote `{user: "tienvv", account: "tienvv" }` 

- install mongoose `npm install --save mongoose`
mongoose.connect()

`const { Schema } = mongoose; same here const Scheme = mongoose.Schema; completely equal` --> es 2015 

mongoose.model('users'. userSchema); `note` 
- mongoose chỉ tạo khi nó không tồn tại nếu tồn tại rồi sẽ lấy ra
Schema có thể add thêm property mà không lo gì cả
