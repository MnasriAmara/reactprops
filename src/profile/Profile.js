
import '../App.css';
import PropTypes from "prop-types";


function Profile({firstName , lastName , Age , Profession, Bio}){
    return(
        <div className='Prof'>
            
            <p className='par'> <strong>First Name:</strong> {firstName} </p>
            <p className='par'> <strong> Last Name: </strong> {lastName} </p>
            <p className='par'> <strong> Age: </strong>  {Age} years old </p>
            <p className='par'> <strong> Profession: </strong>  {Profession}</p>
            <p style={{textAlign:"center"}}> <strong> Biographie: </strong> {Bio}</p>
            
        </div>
    )
}
export default Profile

Profile.propTypes = {
    lastName: PropTypes.string ,
    firstName: PropTypes.string ,
    Age: PropTypes.number
   };