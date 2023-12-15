import PropTypes from 'prop-types'

export default function Hello(props){
    return <h1 className="font-bold bg-red-600 text-red-200">Hello {props.name}</h1>
}



// function 
// Hello(props) {
//   return <h1>Hello {props.name}</h1>
// }
