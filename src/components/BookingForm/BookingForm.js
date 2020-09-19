import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './BookingForm.css';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from '../../images/Icon/calender_icon.png';
const BookingForm = (props) => {
  // const {name} = props.place;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 
  
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [selectDate, setSelectDate] = useState(null);

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}> 
      <input name="origin"  ref={register({ required: true })} defaultValue='DHAKA' placeholder="Enter Origin Name" />
      {errors.origin && <span className="error">Origin is required</span>}
      
      <input name="destination"  ref={register({ required: true })} defaultValue={props.place} placeholder='Enter Destination Name' />
      {errors.destination && <span className="error">Destination is required</span>}
      
      {/* <input type='text' defaultValue='09/25/2020' name="form" ref={register({ required: true })} placeholder='Enter Room Check In Date' />
      {errors.form && <span className="error">Date is required</span>} */}
      
       <input type='date' name="to"ref={register({ required: true })}/>
      {errors.to && <span className="error">Date is required</span>}
     
      <DatePicker
        placeholderText = 'Enter Room Check Out Date'
        
        selected = {selectDate}
        onChange = {date => setSelectDate(date)}
        dateFormat = 'dd/MM/yyyy'
        filterDate = {date => date.getDate() !== 6 && date.getDate() !==0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />

      {/* <DatePicker
        placeholderText = 'Enter Room Check Out Date'
        
        selected = {selectDate}
        onChange = {date => setSelectDate(date)}
        dateFormat = 'dd/MM/yyyy'
        filterDate = {date => date.getDate() !== 6 && date.getDate() !==0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      /> */}

      {/* <input style={{backgroundColor: 'goldenrod'}} type="submit" value='Start Booking'/> */}
      <button style={{backgroundColor: 'goldenrod', borderRadius: '20px', margin: '20px 50px', width: '200px'}}>
        <Link to='/roomDetails'>Start Booking </Link>      
      </button>
    </form>
  );
};

export default BookingForm;