import { PropTypes, Component } from 'react'

export const AddDayForm = ({ place,
                             date, 
                             rain, 
                             hot } ) => {
   
   let _place, _date, _rain, _hot  

   const submit = (e) => {
      e.preventDefault()
      console.log('place', _place.value)
      console.log('date', _date.value)
      console.log('rain',_rain.checked)
      console.log('hot', _hot.checked)
   }

   return (
      <form onSubmit={submit} className="add-day-form">
         <label htmlFor="place">Concert Place</label>
         <input id="place" 
                type="text" 
                required 
                defaultValue={place}
                ref={input => _place = input}/>
         
         <label htmlFor="date">Date</label>
         <input id="date" 
                type="date" 
                required 
                defaultValue={date}
                ref={input => _date = input}/>

         <div>
            <input id="rain" 
                   type="checkbox" 
                   defaultChecked={rain}
                   ref={input => _rain = input}/>
            <label htmlFor="rain">Raining</label>
         </div>
         
         <div>
            <input id="hot" 
                   type="checkbox" 
                   defaultChecked={hot}
                   ref={input => _hot = input}/>
            <label htmlFor="hot">Hot</label>
         </div>
         <button>Add Day</button>
      </form>
   )
}

AddDayForm.defaultProps = {
   place: "Coachella",
   date: "2018-02-12",
   rain: true,
   hot: false
}

AddDayForm.propTypes = {
   place: PropTypes.string.isRequired,
   date: PropTypes.string.isRequired,
   rain: PropTypes.bool.isRequired,
   hot: PropTypes.bool.isRequired
}