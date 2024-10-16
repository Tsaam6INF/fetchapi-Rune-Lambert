fetch('192.168.5.113:3000/api/user/getrights')
.then((info) => info.json())
.then((data) => console.log(data))

