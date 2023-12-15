/* eslint-disable react/prop-types */

const Button = ({ type, className, children }) => {
    console.log('type: ', type)
    console.log('className: ', className)
    console.log('children: ', children)
  
    const buttonClass = ['text-white px-4 py-2 rounded-md']
  
    if (type === 'primary') {
      buttonClass.push('bg-primary')
    }
  
    if (type === 'secondary') {
      buttonClass.push('bg-secondary')
    }
  
    if (className) {
      className.split(' ').forEach((item) => {
        buttonClass.push(item)
      })
    }
  
    return <button className={buttonClass.join(' ')}>{children}</button>
  }
  
  export default Button