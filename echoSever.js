const net = require('net')

const port = 3000

// 接続されたら何をするか設定する
net.createServer((socket) => {
  // 接続されたことを表示
  console.log("connected")

  // データを受け取ったら
  socket.on('data', (data) => {
    // 受け取ったデータを表示
    console.log(`recived: ${data}`)
    // 受け取ったデータをそのまま返す
    socket.write(data)
  })

  // 接続が閉じたら
  socket.on('close', () => {
    console.log("connection closed")
  })
})
  // ポートを指定して、サーバを起動する
  .listen(port, '127.0.0.1')

console.log(`Server started on port ${port}`)
