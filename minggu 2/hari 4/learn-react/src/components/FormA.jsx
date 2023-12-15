import { useEffect, useState } from 'react'
import Button from './Button'
import Input from './InputA'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showData, setShowData] = useState(false)

  useEffect(() => {
    setShowData(false)
  }, [name, email, password])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      alert('Please fill all fields')
      return
    }

    if (name.length > 0 && email.length > 0 && password.length > 0) {
      setShowData(true)
    }
  }

  return (
    <>
      <div
        className={showData ? 'block mb-3 p-3 bg-slate-100 rounded' : 'hidden'}
      >
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Password: {'*'.repeat(10)}</div>
      </div>

      <form className="mb-3 bg-slate-200 p-3 rounded" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name">Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="primary" block>
          Submit
        </Button>
      </form>
    </>
  )
}

export default Form