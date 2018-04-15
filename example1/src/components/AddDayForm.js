import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
   
   constructor(props) {
      super(props)
      this.submit = this.submit.bind(this)
   }

   submit(e) {
      e.preventDefault()
      console.log('place', this.refs.place.value)
      console.log('date', this.refs.date.value)
      console.log('rain', this.refs.rain.value)
      console.log('hot', this.refs.hot.value)
   }
   
   render() {
         
      const { place, date, rain, hot } = this.props 

      return (
         <form onSubmit={this.submit} className="add-day-form">
            <label htmlFor="place">Concert Place</label>
            <input id="place" 
                   type="text" 
                   required 
                   defaultValue={place}
                   ref="place"/>
            
            <label htmlFor="date">Date</label>
            <input id="date" 
                   type="date" 
                   required 
                   defaultValue={date}
                   ref="date"/>

            <div>
               <input id="rain" 
                      type="checkbox" 
                      defaultChecked={rain}
                      ref="rain"/>
               <label htmlFor="rain">Raining</label>
            </div>
            
            <div>
               <input id="hot" 
                      type="checkbox" 
                      defaultChecked={hot}
                      ref="hot"/>
               <label htmlFor="hot">Hot</label>
            </div>
            <button>Add Day</button>
         </form>
      )
   }
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