import { Component, getAssetPath, h, Prop, State, Watch, Event} from '@stencil/core';
import { createStore } from "@stencil/store";
import { handleErrors } from '../actions';


// import { store } from '@stencil/redux';
// import {configureStore} from '../../reduxStatement/store'
// import fromDropdownAct from '../../reduxStatement/actions/fromDropdownAct';


interface roadtripType { 
  firstName: string,
  surname: string,
  phoneNumber: string,
  emailAddress: string,
  from: string,
  destination: string,
  date: string,
  returnDate: string,
  time: string,
  returnTime: string,
  destinationAddress: string,
}


// interface  oneWayType { 
//   firstName: string,
//   surname: string,
//   phoneNumber: string | number,
//   emailAddress: string,
//   from: string,
//   destination: string | number,
//   date: string | number,
//   returnDate: string,
//   destinationAddress: string | number,
// }

// const storeRoadTripFormContent = createStore <roadtripType>({
  // firstName: "",
  // surname: "",
  // phoneNumber: "",
  // emailAddress: "",
  // from: "",
  // destination: "",
  // date: "",
  // returnDate: "",
  // time: "",
  // returnTime: "",
  // destinationAddress: "",
// });

// const storeOneWayFormContent = createStore <oneWayType>({
//   firstName: "",
//   surname: "",
//   phoneNumber: "",
//   emailAddress: "",
//   from: "",
//   destination: "",
//   date: "",
//   returnDate: "",
//   destinationAddress: "",
// });

// console.log(storeRoadTripFormContent, storeOneWayFormContent)

@Component({
  tag: 'achan-modal',
  styleUrl: 'achan-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})
  




// w-auto items-center
export class AchhanModal {

  @State() showTripsContent = false;
  @State() showTitleText = true;
  @State() showFormContent = false;
  @State() bookingDetails = false;
  @State() confirmBooking = false;
  @State() cabTicket = false;
  @State() driverDetails = false;

  @State() fromDropDown: any;
  @State() storeFromDropDown: any;
  @State() destinationState: any;

  @State() roadTrip : roadtripType = {
    firstName: "",
    surname: "",
    phoneNumber: "",
    emailAddress: "",
    from: "",
    destination: "",
    date: "",
    returnDate: "",
    time: "",
    returnTime: "",
    destinationAddress: "",
  };

  @State() roadTripValid: boolean = false;
  @State() estimatePrice;

  // validation States

  @State() firstNameErrMsg;
  @State() surnameErrMsg;
  @State() phoneNumberErrMsg;
  @State() emailAddressErrMsg;
  @State() fromErrMsg;
  @State() destinationErrMsg;
  @State() dateErrMsg;
  @State() returnDateErrMsg;
  @State() timeErrMsg;
  @State() returnTimeErrMsg;
  @State() destinationAddressErrMsg;
  

  @Prop() previousBtn = 'arrow-left.svg'
  @Prop() carIcon = "car-icon.png"
  @Prop() callIcon = "call-icon.png"
  @Prop() emailIcon = "email-icon.png"
  @Prop({ reflect: true, mutable: true }) opened: boolean;
  @Prop({ reflect: true, mutable: true }) id: string;


  // Get roadTripForm details from LocalStorage
  @State() tripsDetails = JSON.parse(localStorage.getItem('roadTripForm')) 



@Watch('roadTrip')
watchStateHandler(newValue: any, oldValue: any) {
  console.log('The old value of roadTrip is: ', oldValue);
    console.log('The new value of roadTrip is: ', newValue);
  }

  @Event({bubbles: true, composed: true}) 

  
  
    
  // fromDropdownAct: (...args: any) => any;

  componentWillLoad() {
// console.log(this.getId);

    if (this.id) {
      this.callFromDataApi(this.id);
    }


  
    // if (this.storeFromDropDown) {
    //   this.callDestinationDataApi(this.storeFromDropDown);
    // }

    // if (this.storeFromDropDown) {
    //   this.callDestinationDataApi();

    // }

    // if (this.tripsDetails.returnDate && this.tripsDetails.returnTime) {
    //   this.callEstimatedDataApi();
    // }

    // this.callDestinationDataApi();


    
    // store.setStore(configureStore({}));

    // store.mapStateToProps(this, fromDropdowData => fromDropdowData);

    // if (this.getId) {
    //      store.mapStateToProps (this, state => {
    //   const {
    //     fromDropDownReducer: { fromDropDown, loading, error },
    //   } = state;
    //   return {
    //     fromDropDown,
    //     loading,
    //     error,
    //   };
    // });

    //   store.mapDispatchToProps(this, {
    //     fromDropdownAct,
    //   });



    //   this.fromDropdownAct(this.getId);
    // }
 
  };

  componentWillUpdate() { 
    // this.callDestinationDataApi();
    // if (this.storeFromDropDown) {
    //   this.callDestinationDataApi();

    // }

    // if (this.bookingDetails  && this.tripsDetails.returnDate && this.tripsDetails.returnTime) {
    //   this.callEstimatedDataApi();
    // }

    // if (this.tripsDetails.returnDate && this.tripsDetails.returnTime) {
    //   this.callEstimatedDataApi();
    // }
  };



  // componentDidUpdate() {
  //   if (this.tripsDetails.returnDate && this.tripsDetails.returnTime) {
  //     this.callEstimatedDataApi();
  //   }
  // }

  // disconnectedCallback() {
  //   if (this.tripsDetails.returnDate && this.tripsDetails.returnTime) {
  //     this.callEstimatedDataApi();
  //   }
  // }

  
  

  // 
  callFromDataApi = async (id: any) => {
    // console.log(id);
    
    const response = await fetch(`https://watchoutachan.herokuapp.com/api/airline_branch/${id}`, {
      method: 'post',
    });
    handleErrors(response);

    let json = await response.json();
    this.fromDropDown = json;
    // console.log(json)
  };

  
  
  closeModal() {
    this.opened = false;
    console.log("closing Modal...")

    // other actions
    this.showTitleText = true;
    this.showFormContent = false;
    this.bookingDetails = false;
    this.confirmBooking = false;
    this.cabTicket = false;
    this.driverDetails = false;
  }

  onContentChange(content: string){
      this.showTripsContent = content === 'roundTrip'
  }

  onBookChange() {
  
    // console.log(this.roadTrip);

    if (!this.roadTripValid) {
      if (this.roadTrip.firstName.trim() === '') {
        this.firstNameErrMsg = 'First Name is required';
      }
      if (this.roadTrip.surname.trim() === '') {
        this.surnameErrMsg = 'Surname is required';
      }
      if (this.roadTrip.phoneNumber.trim() === '') {
        this.phoneNumberErrMsg = 'Phone Number is required';
      }
      if (this.roadTrip.emailAddress.trim() === '') {
        this.emailAddressErrMsg = 'Email Address is required';
      }
      if (this.roadTrip.from.trim() === '') {
        this.fromErrMsg = 'From is required';
      }
      if (this.roadTrip.destination.trim() === '') {
        this.destinationErrMsg = 'Destination is required';
      }
      if (this.roadTrip.date.trim() === '') {
        this.dateErrMsg = 'Date is required';
      }
      if (this.roadTrip.returnDate.trim() === '') {
        this.returnDateErrMsg = 'Return Date is required';
      }
      if (this.roadTrip.time.trim() === '') {
        this.timeErrMsg = 'Time is required';
      }
      if (this.roadTrip.returnTime.trim() === '') {
        this.returnTimeErrMsg = 'Return Time is required';
      }
      if (this.roadTrip.destinationAddress.trim() === '') {
        this.destinationAddressErrMsg = 'Destination Address is required';
      }

      if (
        this.roadTrip.firstName.trim() !== ''
        && this.roadTrip.surname.trim() !== ''
        && this.roadTrip.phoneNumber.trim() !== ''
        && this.roadTrip.emailAddress.trim() !== ''
        && this.roadTrip.from.trim() !== ''
        && this.roadTrip.destination.trim() !== ''
        && this.roadTrip.date.trim() !== ''
        && this.roadTrip.returnDate.trim() !== ''
        && this.roadTrip.time.trim() !== ''
        && this.roadTrip.returnTime.trim() !== ''
        && this.roadTrip.destinationAddress.trim() !== ''
      ) {
        this.roadTripValid = true;
        console.log(this.roadTrip);
        localStorage.setItem("roadTripForm", JSON.stringify(this.roadTrip))

        this.callEstimatedDataApi()
        // 
        this.showFormContent = true;
        this.bookingDetails = true;

        this.roadTrip.firstName = '';
        this.roadTrip.surname = '';
        this.roadTrip.phoneNumber = '';
        this.roadTrip.emailAddress = '';
        this.roadTrip.destinationAddress = '';
        this.roadTrip.date = '';
        this.roadTrip.returnDate = '';
        this.roadTrip.time = '';
        this.roadTrip.returnTime = '';
        this.roadTrip.destinationAddress = '';
      } else {
        this.roadTripValid = false;
      }

      
    }
    
  }

  previousChange() {
    this.showTitleText = true;
    this.showFormContent = false;
    this.bookingDetails = false;
    this.confirmBooking = false;
  }

  openConfirmBooking() {
    this.showTitleText = false;
    this.showFormContent = true;
    this.bookingDetails = false;
    this.confirmBooking = true;
  }

  cabTicketChange() {
    this.showFormContent = true;
    this.bookingDetails = false;
    this.confirmBooking = false;
    this.cabTicket = true;
  }

  openDriverDetails() {
    this.showFormContent = true;
    this.bookingDetails = false;
    this.confirmBooking = false;
    this.cabTicket = false;
    this.driverDetails = true;
  }

  
  handleSecondSelect(event) {
    this.storeFromDropDown = event.target.value;
    this.roadTrip.from = event.target.value;
    this.callDestinationDataApi();
    
  }

  callDestinationDataApi = async () => {
    // console.log(this.storeFromDropDown);
    
    let destiData: FormData = new FormData();
    destiData.append('branchid', this.storeFromDropDown);


    const response = await fetch(`https://watchoutachan.herokuapp.com/api/destinationarea`,
      {
        method: 'post',
        body: destiData,
        // headers : { 
        //   "Content-Type": "multipart/form-data",
        // }
      }
    );
    handleErrors(response);

    let json = await response.json();
    this.destinationState = json;
  };

  callEstimatedDataApi = async () => {
    let estimatedData: FormData = new FormData();
    estimatedData.append('id', this.roadTrip.from);
    estimatedData.append('destination', this.roadTrip.destination);
    estimatedData.append('dest_address', this.roadTrip.destinationAddress);
    estimatedData.append('date', this.roadTrip.date);
    estimatedData.append('time', this.roadTrip.time);
    estimatedData.append('returndate', this.roadTrip.returnDate);
    estimatedData.append('returntime', this.roadTrip.returnTime);



    const response = await fetch(`https://watchoutachan.herokuapp.com/api/estimate`,
      {
        method: 'post',
        body: estimatedData,
      }
    );
    handleErrors(response);

    let json = await response.json();
    this.estimatePrice = json;
  };
  
  // 
  handleChange(event) {
    const value = event.target.value;
    // const storeValue = this.roadTrip[event.target.name] = value;
    this.roadTrip[event.target.name] = value;
    
    
  }
  render() {

    console.log(this.estimatePrice?.first_cost)
    
    // console.log(this.errorMessage)
    // console.log(this.roadTrip);
// console.log(this.storeFromDropDown)
//     console.log(this.fromDropDown);
    // console.log(this.id)
    //Conditionally rendered Road Trip Forms   
      let roadTripContent = <slot/>
      if(!this.showTripsContent) {
          roadTripContent = (
            <form class="px-4 py-6">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Firstname</label>
                  <input
                    name="firstName"
                    value={this.roadTrip.firstName}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"
                    onInput={(e) => this.handleChange(e)}
                    required
                  />
                  <small>{this.firstNameErrMsg}</small>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Surname</label>
                  <input
                    name="surname"
                    value={this.roadTrip.surname}
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"
                    required
                  />
                  <small>{this.surnameErrMsg}</small>
                </div>
              </div>

              <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Phone Number</label>
                  <input
                    name='phoneNumber'
                    value={this.roadTrip.phoneNumber}
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"
                    required
                  />
                  <small>{this.phoneNumberErrMsg}</small>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Email Address</label>
                  <input
                    name="emailAddress"
                    value={this.roadTrip.emailAddress}
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="email"
                    required
                  />
                  <small>{this.emailAddressErrMsg}</small>
                </div>
              </div>
              <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">From</label>
                  <div class="relative w-full">
                    <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                      
                    </div>
                    <select
                      class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline'
                      onInput={(event) => this.handleSecondSelect(event)} 
                      required
                    >
                      <option value="" selected disabled hidden>select branch </option>
                        {this.fromDropDown?.map(({userid, branch_location }) => 
                          <option value={userid} >{branch_location}</option>
                        )}
                    </select>
                    <small>{this.fromErrMsg}</small>
                  </div>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Destination</label>
                  <div class="relative w-full">
                    <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                      
                    </div>
                    <select
                      name="destination"
                      onInput={(e) => this.handleChange(e)}
                      class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline'
                      required
                    >
                      <option value="" selected disabled hidden>select branch </option>
                        {this.destinationState?.map(({area }) => 
                          <option value={area} >{area}</option>
                        )}
                    </select>
                    <small>{this.destinationErrMsg}</small>
                  </div>
                </div>
              </div>
              <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Date</label>
                  <input
                    name="date"
                    value={this.roadTrip.date}
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="date"
                    required
                  />
                  <small>{this.dateErrMsg}</small>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Return Date</label>
                  <input
                    name="returnDate"
                    value={this.roadTrip.returnDate}
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="date"
                    required
                  />
                  <small>{this.returnDateErrMsg}</small>
                </div>
              </div>
              <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Time</label>
                  <input
                    name="time"
                    value={this.roadTrip.time}
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="time"
                    required
                  />
                  <small>{this.timeErrMsg}</small>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Return Time</label>
                  <input
                    name="returnTime"
                    value={this.roadTrip.returnTime}
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="time"
                    required
                  />
                  <small>{this.returnTimeErrMsg}</small>
                </div>
              </div>
              <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                <div class="w-full">
                  <label class="block text-gray-400 text-sm font-light mb-2">Destination Address</label>
                  <input
                    name="destinationAddress"
                    value={this.roadTrip.destinationAddress}
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"
                    required
                  />
                  <small>{this.destinationAddressErrMsg}</small>
                </div>
              </div>
              <button 
                type="button" 
                onClick={this.onBookChange.bind(this)}  
                class="text-center mt-6 w-full border-0 p-3 outline-none focus:outline-none custom-book-btn">Book Now</button>
            </form>
        )
      }

    //   Conditionally rendered One Way Forms
      let oneWayContent = <slot/>
      if(this.showTripsContent) {
        oneWayContent = (
          // <one-way-content onBookChange={this.onBookChange.bind(this)} ></one-way-content>
          <form class="px-4 pt-4 pb-10">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Firstname</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
              </div>
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Surname</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
              </div>
            </div>

            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Phone Number</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
              </div>
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Email Address</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="email"  />
              </div>
            </div>
            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">From</label>
                <div class="relative w-full">
                  <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    
                  </div>
                  <select class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline' >
                    <option value="" selected disabled hidden>select branch </option>
                    <option>Bread</option>
                    <option>Rice</option>
                  </select>
                </div>
              </div>
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Destination</label>
                <div class="relative w-full">
                  <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    
                  </div>
                  <select class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline' >
                    <option value="" selected disabled hidden>select branch </option>
                    <option>Bread</option>
                    <option>Rice</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Date</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="date"  />
              </div>
              <div class="sm:w-3/6">
              <label class="block text-gray-400 text-sm font-light mb-2">Time</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="time"  />
              </div>
            </div>
            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
              <div class="w-full">
                <label class="block text-gray-400 text-sm font-light mb-2">Destination Address</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
              </div>
            </div>
            <button 
              type="button" 
              onClick={this.onBookChange.bind(this)}  
              class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none custom-book-btn">Book Now</button>
          </form>
        
        )
      }

    // Display all Modal Content
      let modalContent = null;
      if (this.opened) {
        modalContent = (
            <div class=' justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal-container'>
                <div class="relative w-72  sm:w-9/12  my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div class="flex items-center  justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                          <div class="flex">
                            {this.bookingDetails ? (
                                <img 
                                  onClick={this.previousChange.bind(this)}  
                                  class="mr-6" 
                                  src={getAssetPath(`../assets/${this.previousBtn}`)} 
                                  alt="previous-icon"/>
                              ) : null 
                            }
                            
                            {this.showTitleText ? (
                              <h4 class="text-xl font-semibold text-blue-600 text-center">
                                  Book a Taxi
                              </h4>
                            ) : null}
                            
                          </div>
                          <button onClick={this.closeModal.bind(this)} class="text-gray-400 p-1 ml-auto bg-transparent border-0 outline-none focus:outline-none">x</button>
                        </div>
                        {/*body*/}
                        {/* Form Sections and Navigation Buttons */}
                        {/* {displayForms} */}

                        {!this.showFormContent ? (
                          <div>
                            <section id="tabs" class='px-4 mt-10 mb-2 flex justify-between w-full'>
                              <button 
                                onClick={this.onContentChange.bind(this, 'oneWay' )} 
                                class={!this.showTripsContent ? "text-center border-2 p-3 outline-none focus:outline-none custom-tabs-btn custom-active" 
                                    : "text-center border-2 p-3 outline-none focus:outline-none custom-tabs-btn"}
                                    >
                                        Round Trip
                              </button>
                              <button 
                                onClick={this.onContentChange.bind(this, 'roundTrip')} 
                                class={this.showTripsContent ? "text-center border-2 p-3 outline-none focus:outline-none custom-tabs-btn custom-active" 
                                    : "text-center border-2 p-3 outline-none focus:outline-none custom-tabs-btn"}
                                >
                                    One Way
                              </button>
                            </section>
                            {/* End of Tab Section */}

                            <main>
                                {roadTripContent}
                                {oneWayContent}
                            </main>
                          </div>
                        ) : null}

                        {this.bookingDetails ? (
                          <div class="px-4  pt-10 pb-16">
                              <div >
                                  <div class="mb-5">
                                      <modal-booking-details
                                        date={this.tripsDetails.date} //date
                                        time={this.tripsDetails.time} //time
                                        airport={this.estimatePrice?.first_cost?.from}
                                        destinationAddress={this.estimatePrice?.first_cost?.to}
                                        destination={this.tripsDetails.destination} //destination
                                        estimatedPriceMax={this.estimatePrice?.first_cost?.est_max}
                                        estimatedPriceMin={this.estimatePrice?.first_cost?.est_min}
                                      ></modal-booking-details>
                                  </div>
                              
                      
                                    {this.tripsDetails.returnDate && this.tripsDetails.returnTime ?
                                      (
                                        <modal-booking-details
                                          date={this.tripsDetails.returnDate} //date
                                          time={this.tripsDetails.returnTime} //time
                                          airport={this.estimatePrice?.second_cost?.from}
                                          destinationAddress={this.estimatePrice?.second_cost?.to}
                                          destination={this.tripsDetails.destination} //destination
                                          estimatedPriceMax={this.estimatePrice?.second_cost?.est_max}
                                          estimatedPriceMin={this.estimatePrice?.second_cost?.est_min}
                                        ></modal-booking-details>
                                      ) : null
                                    }
                            </div>

                            <div class="flex flex-col  space-y-6">
                              <button 
                                onClick={this.openConfirmBooking.bind(this)}  
                                type="button"  
                                class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">Continue Book</button>
                              <button 
                                onClick={this.previousChange.bind(this)}  
                                type="button" 
                                class="text-center mt-10 w-full border p-3 outline-none hover:border-0 focus:outline-none customBookingDetails-btn2">Cancel</button>
                            </div>
                          </div>
                        ): null}

                        {/* Cofirm Booking */}
                        {this.confirmBooking ? (
                          <div class="px-4 py-56">
                            <div class='text-center space-y-2'>
                              <h3 class="font-bold text-2xl confirmBooking-h3">Booking Confirmed</h3>
                              <div class="w-52 mx-auto">
                                <small class="text-gray-400 text-sm">We’ve sent a copy of your ticket to your email</small>
                              </div>
                              
                            </div>
                            <button 
                                onClick={this.cabTicketChange.bind(this)}  
                                type="button"  
                                class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">Preview Ticket</button>
                          </div>
                        ) : null}

                        {/* Cab Ticket */}
                        {this.cabTicket ? (
                          <div class=" px-4 sm:px-16 py-7"> 
                            <div class="shadow-lg pb-10 w-full rounded-xl bg-white">
                              <header class='w-full p-4 py-6 rounded-t-xl cabTicket-header'>
                                <div class="flex w-full items-center  justify-center">
                                  <img  
                                    class="mr-6 w-6" 
                                    src={getAssetPath(`../assets/${this.carIcon}`)} 
                                    alt="car-icon"
                                  />
                                  <h4 class="text-xl font-semibold">Cab Ticket</h4>
                                </div>
                              </header>
                              <main class="w-full px-6">
                                <section class="sm:px-6 pt-12 pb-6 border-b-2 border-dashed">
                                  <h1 class="text-xl font-semibold cabTicket-m-s-h1">Booking Details</h1>

                                  <div class="mt-10">
                                    <row-element>
                                      <small>Name:</small>
                                      <small>Jacob Jones</small>
                                    </row-element>
                                    <row-element>
                                      <small>phone Number:</small>
                                      <small>234455444519</small>
                                    </row-element>
                                    <row-element>
                                      <small>ticket No:</small>
                                      <small>1P47344</small>
                                    </row-element>
                                    <row-element>
                                      <small>Date:</small>
                                      <small>21 Oct</small>
                                    </row-element>
                                    <row-element>
                                      <small>Time:</small>
                                      <small>19:00</small>
                                    </row-element>
                                    <row-element>
                                      <small>From:</small>
                                      <small>Lagos iKEJA</small>
                                    </row-element>
                                    <row-element>
                                      <small>Destination:</small>
                                      <small>Abule Egba</small>
                                    </row-element>
                                  </div>
                                </section>

                                <section class="sm:px-6 py-10 border-b-2 border-dashed">
                                  <h1 class="text-xl font-semibold cabTicket-m-s-h1 text-start">Achan Customer Service</h1>
                                  <div class="mt-10 space-y-8">
                                    <div class="flex">
                                      <img  
                                        class="mr-6 " 
                                        src={getAssetPath(`../assets/${this.callIcon}`)} 
                                        alt="car-icon"
                                      />
                                      <h4 class="text-sm text-gray-400 font-semibold">234455444519</h4>
                                    </div>
                                    <div class="flex">
                                      <img  
                                        class="mr-6" 
                                        src={getAssetPath(`../assets/${this.emailIcon}`)} 
                                        alt="car-icon"
                                      />
                                      <h4 class="text-sm text-gray-400 font-semibold">achan@achan.com</h4>
                                    </div>

                                    <button 
                                      onClick={this.openDriverDetails.bind(this)}  
                                      type="button"  
                                      class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                      View Driver Details
                                    </button>
                                    
                                  </div>
                                </section>
                                <section class="sm:px-6 py-10 ">
                                  <h1 class="text-xl font-semibold cabTicket-m-s-h1">Estimated cost</h1>
                                  <div class="mt-10 space-y-8">
                                    <row-element>
                                      <small>estimated Total:</small>
                                      <small class="font-bold">7,900 NGN - 10,900 NGN</small>
                                    </row-element>
                                  </div>
                                </section>
                              </main>
                            </div>
                          </div>
                        ) : null}

                        {/* Driver Details */}
                        {this.driverDetails ? (
                          <div class="px-4 sm:px-16 py-7">
                            <div class="shadow-lg pb-10 w-full rounded-xl bg-white">
                              <header class='w-full p-4 py-6 rounded-t-xl text-center cabTicket-header'>
                                <h4 class="text-xl font-semibold">Driver Details</h4>
                              </header>

                              <main class="w-full px-6">
                                <section class="sm:px-6 pt-12 pb-6">
                                  <div class="mt-10">
                                    <row-element>
                                      <small>Name:</small>
                                      <small>Maver shags</small>
                                    </row-element>
                                    <row-element>
                                      <small>Phone Number:</small>
                                      <small>234455444519</small>
                                    </row-element>
                                    <row-element>
                                      <small>Car No plate:</small>
                                      <small>P47344</small>
                                    </row-element>
                                    <row-element>
                                      <small>Car Model:</small>
                                      <small>Toyota</small>
                                    </row-element>
                                  </div>
                                </section>
                              </main>
                            </div>
                          </div>
                        ) : null}
                    </div>
                        
                </div>
                
            </div>
        )
      }
    return modalContent;
  }
}