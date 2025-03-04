const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// MySQL 연결 설정
const connection = mysql.createConnection({
  host:         '3.34.142.39',
  user:         'have1875',
  password:     'Eksrns1!',
  database:     'Test'
});

// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    return;
  }
  console.log('MySQL 데이터베이스에 연결되었습니다.');
});

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/test', (req, res) => {
    const query = 'SELECT * FROM sample_table';

    connection.query(query, (err, results) => {
        if (err) {
        console.error('쿼리 실행 오류:', err);
        return res.status(500).json({ error: '데이터베이스 오류가 발생했습니다.' });
        }

        res.send(results);
    });
})

app.get('/get/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM sample_table WHERE num = ?';
  
    connection.query(query, [userId], (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        return res.status(500).json({ error: '데이터베이스 오류가 발생했습니다.' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
      }
  
      res.send(results[0]);
    });
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

// get post 예제, json 간단한거, mysql

// mysql 통신, 프라이빗, 서버 직접