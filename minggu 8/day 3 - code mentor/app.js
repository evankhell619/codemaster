import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

db.connect((err) => {
  if (err) {
    throw err
  }
  console.log('Connected to database ' + db.threadId)
})

app.get('/provinces', (req, res) => {
  db.query('select * from provinces', (err, rows, fields) => {
    if (err) throw err
    res.json(rows)
  })
})

app.get('/provinces/:id/regencies', (req, res) => {
  const id = req.params.id
  // const query = `select * from regencies where province_id = ${id}`

  const query = `select regencies.name as regency_name,
	provinces.name as province_name from regencies
	join provinces on regencies.province_id = provinces.id where regencies.province_id = ${id}`

  db.query(query, (err, rows) => {
    if (err) throw err
    res.json(rows)
  })
})

app.get('/provinces/:id', (req, res) => {
  const id = req.params.id
  const query = `select * from provinces where id = ?`

  db.execute(query, [id], (err, rows) => {
    if (err) throw err

    if (0 === rows.length) {
      return res.status(404).json({ message: 'Data not found' })
    }

    res.json(rows[0])
  })
})

app.post('/provinces', (req, res) => {
  const { id, name } = req.body

  if (!id || !name) {
    return res.status(400).json({ message: 'id and name are required' })
  }

  const query = `insert into provinces (id, name) values (?, ?)`
  db.execute(query, [id, name], (err, result) => {
    if (err) {
      if ('ER_DUP_ENTRY' === err.code) {
        return res.status(400).json({ message: 'Duplicate entry' })
      }
      throw err
    }

    res.json({ message: 'Data has been inserted', id: result.insertId })
  })
})

const handleUpdate = (id, req, res) => {
  const { name } = req.body

  if (!name) {
    return res.status(400).json({ message: 'name is required' })
  }

  const query = `update provinces set name = ? where id = ?`
  db.execute(query, [name, id], (err, result) => {
    if (err) throw err

    if (0 === result.affectedRows) {
      return res.status(404).json({ message: 'Data not found' })
    }

    res.json({ message: 'Data has been updated' })
  })
}

app.patch('/provinces/:id', (req, res) => handleUpdate(req.params.id, req, res))

app.put('/provinces/:id', (req, res) => handleUpdate(req.params.id, req, res))

export default app