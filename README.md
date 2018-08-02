# lecture 4 new word
#preamble(nous): lời nói đầu 
ex: `The preamble of the book talks about the technique of java.`
#handful of(nous) : (một) năm, (một) nhúm, ít (có đếm được) 
ex: `i get a handful of data from the system`
#rather (adverb : `trạng từ`): khá, 1 chút, hơn, hơi hơi
-identify :
1. - `có than so sánh 2 cụm thích cái gì hơn`
ex: i want to create new the database rather than backup the old database
2. - `nói để chính xác hơn đúng hơn là`
ex: these data are wrong, but rather miss the title.
3. - `phần nào, hơn, khá, đến 1 mức độ nào đó`
ex: this bug is rather critical
#tremendous(adjective): ghê gớm, kinh khủng, khủng khiếp, dữ dội.
- identify:
1. `great in amount, size, or degree; extremely large` transalate :
ex: She is under tremendous pressure at work --> `cô ấy đang chịu(ở dưới/dưới áp lực) áp lục lớn trong công việc`
- i am working on tremendous project with many algorithm
2. (thông tục) rất lớn, bao la, to lớn, rất tốt, khác thường
ex: 

#pressure(Noun)
(Force): lực lượng, thế lực
- Identify: áp suất, sức ép, 
- sức ép bị đe dọa đến cá nhân hoặc tổ chức
(influence): sức ép, sự ép buộc, sự thúc bách
`a strong, often threatening influence on an organization or person`
ex: the pressure of the work makes me crazy
- nếu bạn gây sức ép lên ai đó, bạn cố gắng thuyết phục hoặc đe dọa người đó 1 điều gì đó điều gì đó 
ex: i am under a lot of pressure at work
(Worry)
- worry and fear caused(gây ra) bới cảm giác bạn có quá nhiều trách nhiệm và quan tâm
ex:i have a lot of pressure when i am working on powergate company

#aspect(noun): khía cạnh, tình trạng, diện mạo,
-identify: a particular feature of or way of thinking about something, esp. something complicated
ex: there is another aspect of your problem that you are right.

#hypothetical(adjective): giả định, giả thuyết

#outright(advert): ngay lập tực, toàn bộ, hoàn toàn
identify:`directly and plainly, or immediately instead of stages`
-They bought their car outright.
-I told him outright that I think he is making a mistake.

#diverse (adjective): đa dạng, phong phú
-the information technology has diverse job

#particular(adjective) : cụ thể
Identify `special`
- in this particualr case
`careful`
- She’s very particular about what she eats.

#assumption(Noun): giả bộ, giả đinh
`Accepting as true`
-The plan was based on the assumption that the schedule could be substantially speeded up by adding more people.
`Control`, assumption of something: làm ra vẻ, sự giả bộ, sự đảm đương, sự gánh vác, sự nhận vào mình
- Her assumption (sự đảm đương) of the post of ambassador was a significant development.
- the Assumption (tôn giáo)
- 
#established: thành lập

-wrecked: đắm, thất bại
-skimmed: gầy, đi lướt qua, đi sát qua, gạt chất kem ở sữa, hớt bọt
-wraps up: đóng gói
-relevant: liên quan, thích hợp
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
ourselves: chính chúng ta,
persist: tồn tại(token that we want to persist into our user record),
dive in: lặn trong, đi sâu vào (it just kind of dive in),
traditional: truyền thống
--------------------------------------------
section 4 lecture 37
essentially: bản chất (it will esentially initiate that query)
reach out: tiếp cận (any time we reach out our mongo database)
shape: hình dạng (in any way shape or form)
form: hình thưc
--------------------------------------------
section 4 lecture 38
precise: tóm lược (to be precise:để đc chính xác)

# main theory
- build single project 

# Relationship of Node and Express
- Node : javascript runtime used to execute code outside of the browser
- express: library that runs in the node runtime. has helpers to make dealing with http traffic easier
- explicitly: rõ ràng
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

for run this project `npm run dev`

#Set Up MongoDb: 
- `there're two different ways`
go to mlab.com to create mongo db remote `{user: "tienvv", account: "tienvv" }` 

- install mongoose `npm install --save mongoose`
mongoose.connect()

- model class is Collection, model instance is a record

`const { Schema } = mongoose; same here const Scheme = mongoose.Schema; completely equal` --> es 2015 

`useMongoClient:true` option is no longer necessary in mongoose 5.x, please remove it

note: the model class must be loaded before we use it 
- here is create `mongoose.model('users', userSchema);`
- here is get `const User = mongoose.model('users');`

mongoose.model('users'. userSchema); `note` 
- mongoose chỉ tạo khi nó không tồn tại nếu tồn tại rồi sẽ lấy ra
Schema có thể add thêm property mà không lo gì cả

- khi ta tiếp cận mongo database bằng bất kỳ hình thức nào như search hay or save or edit or delete thì nó sẽ tạo ra 1 asynchronous action và query sẽ trả về 1 promise 

#advenced feature of javascript that include in es 2017: .then(() => {}) arrow function

#npm install --save cookie-session (manager the cookies)
-`khi request đến server, cái request đó sẽ đc chuyển đến cookie sesion, cái này sẽ tự động extract tất cả dữ liệu của cookie đó`+
`và nó sẽ encrypt dữ liệu cái tồn tại bên trong đó xong rồi dữ liệu sẽ đc chuyển cho passport cái này sẽ kéo ra userId ở trong cookie(id này là id đã đc chúng ta serialise trước đó) biến nó thành user model instance, đc thêm vào req object như 'req.user'`
summary : `passport có 2 function serializeUser, deserializeUser serializeUser để chuyền thông tin như id về browser để save cookie cái này sẽ mã hóa qua cookiesession, desesializeUser là để lấy ra các thông tin từ cookie của client gửi request lên trên server. cái này cần phải giải mã qua cookiesession để`

-`middleware our small functions that can be used to modify incoming requests to our app before they are sent off to route handlers`
#note :
-`cookie session is like not really inherently passing data to passport, it's just processing the incoming requests populating that session property right here and then passport accesses the data that exist on res.session`