import { Component, getAssetPath, h, Prop, State, Watch, Event} from '@stencil/core';
import { handleErrors } from '../actions';
import convertDate from '../convertDate';
import convertTime from '../useFulSnippets/convertTime';

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


interface  oneWayType { 
  firstName: string,
  surname: string,
  phoneNumber: string,
  emailAddress: string,
  from: string,
  destination: string,
  date: string,
  time: string,
  destinationAddress: string,
}

@Component({
  tag: 'achan-modal',
  styleUrl: 'achan-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})

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

    @State() onewayTrip : oneWayType = {
      firstName: "",
      surname: "",
      phoneNumber: "",
      emailAddress: "",
      from: "",
      destination: "",
      date: "",
      time: "",
      destinationAddress: "",
    };

  @State() roadTripValid: boolean = false;
  @State() estimatePrice;
  @State() globalTrips;
  @State() cabTicketDetails;
  @State() driverDetailsState;
  @State() secondDriverDetailsState;

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
  @Prop() whatappIcon = "whatapp.png"
  @Prop({ reflect: true, mutable: true }) opened: boolean;
  // @Prop({ reflect: true, mutable: true }) id: string;
  @Prop({ reflect: true, mutable: true })  name: string;


  // Get roadTripForm details from LocalStorage
  @State() tripsDetails = JSON.parse(localStorage.getItem('roadTripForm')) 



@Watch('roadTrip')
watchStateHandler(newValue: any, oldValue: any) {
  console.log('The old value of roadTrip is: ', oldValue);
    console.log('The new value of roadTrip is: ', newValue);
  }

  @Event({bubbles: true, composed: true}) 


  componentWillLoad() {

    if (this.name) {
      this.callFromDataApi(this.name);
    }
  };

  // componentWillUpdate() {
  //   // var input = document.getElementById('autocomplete');
  //   // var autocomplete = new google.maps.places.Autocomplete(input);
  // }

  // 
  callFromDataApi = async (id: any) => {
    
    const response = await fetch(`https://watchoutachan.herokuapp.com/api/airline_branch/${id}`, {
      method: 'post',
    });
    handleErrors(response);

    let json = await response.json();
    this.fromDropDown = json;
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

    window.location.reload(); 
  }

  onContentChange(content: string){
      this.showTripsContent = content === 'roundTrip'
  }

  onBookChange() {

    if (!this.roadTripValid && !this.showTripsContent) {
      if (this.roadTrip?.firstName?.trim() === '') {
        this.firstNameErrMsg = 'First Name is required';
      }
      if (this.roadTrip?.surname?.trim() === '') {
        this.surnameErrMsg = 'Surname is required';
      }
      if (this.roadTrip?.phoneNumber?.trim() === '') {
        this.phoneNumberErrMsg = 'Phone Number is required';
      }
      if (this.roadTrip?.emailAddress?.trim() === '') {
        this.emailAddressErrMsg = 'Email Address is required';
      }
      if (this.roadTrip?.from?.trim() === '') {
        this.fromErrMsg = 'From is required';
      }
      if (this.roadTrip?.destination?.trim() === '') {
        this.destinationErrMsg = 'Destination is required';
      }
      if (this.roadTrip?.date?.trim() === '') {
        this.dateErrMsg = 'Date is required';
      }
      if (this.roadTrip?.returnDate?.trim() === '') {
        this.returnDateErrMsg = 'Return Date is required';
      }
      if (this.roadTrip?.time?.trim() === '') {
        this.timeErrMsg = 'Time is required';
      }
      if (this.roadTrip?.returnTime?.trim() === '') {
        this.returnTimeErrMsg = 'Return Time is required';
      }
      if (this.roadTrip?.destinationAddress?.trim() === '') {
        this.destinationAddressErrMsg = 'Destination Address is required';
      }

      if (
        this.roadTrip?.firstName?.trim() !== ''
        && this.roadTrip?.surname?.trim() !== ''
        && this.roadTrip?.phoneNumber?.trim() !== ''
        && this.roadTrip?.emailAddress?.trim() !== ''
        && this.roadTrip?.from?.trim() !== ''
        && this.roadTrip?.destination?.trim() !== ''
        && this.roadTrip?.date?.trim() !== ''
        && this.roadTrip?.returnDate?.trim() !== ''
        && this.roadTrip?.time?.trim() !== ''
        && this.roadTrip?.returnTime?.trim() !== ''
        && this.roadTrip?.destinationAddress?.trim() !== ''
      ) {
        this.roadTripValid = true;
        this.globalTrips = this.roadTrip;
        console.log(this.globalTrips);
        localStorage.setItem("roadTripForm", JSON.stringify(this.roadTrip))

        this.callEstimatedDataApi()
        // 
        this.showFormContent = true;
        this.bookingDetails = true;
      } else {
        this.roadTripValid = false;
      }

      
    }
    
    if (!this.roadTripValid && this.showTripsContent) {
      if (this.onewayTrip?.firstName?.trim() === '') {
        this.firstNameErrMsg = 'First Name is required';
      }
      if (this.onewayTrip?.surname?.trim() === '') {
        this.surnameErrMsg = 'Surname is required';
      }
      if (this.onewayTrip?.phoneNumber?.trim() === '') {
        this.phoneNumberErrMsg = 'Phone Number is required';
      }
      if (this.onewayTrip?.emailAddress?.trim() === '') {
        this.emailAddressErrMsg = 'Email Address is required';
      }
      if (this.onewayTrip?.from?.trim() === '') {
        this.fromErrMsg = 'From is required';
      }
      if (this.onewayTrip?.destination?.trim() === '') {
        this.destinationErrMsg = 'Destination is required';
      }
      if (this.onewayTrip?.date?.trim() === '') {
        this.dateErrMsg = 'Date is required';
      }
      
      if (this.onewayTrip?.time?.trim() === '') {
        this.timeErrMsg = 'Time is required';
      }
      if (this.onewayTrip?.destinationAddress?.trim() === '') {
        this.destinationAddressErrMsg = 'Destination Address is required';
      }

      if (
        this.onewayTrip?.firstName?.trim() !== ''
        && this.onewayTrip?.surname?.trim() !== ''
        && this.onewayTrip?.phoneNumber?.trim() !== ''
        && this.onewayTrip?.emailAddress?.trim() !== ''
        && this.onewayTrip?.from?.trim() !== ''
        && this.onewayTrip?.destination?.trim() !== ''
        && this.onewayTrip?.date?.trim() !== ''
        && this.onewayTrip?.time?.trim() !== ''
        && this.onewayTrip?.destinationAddress?.trim() !== ''
      ) {
        this.roadTripValid = true;
        this.globalTrips = this.onewayTrip;
        console.log(this.globalTrips);
        // localStorage.setItem("roadTripForm", JSON.stringify(this.roadTrip))

        this.callEstimatedDataApi()
        // 
        this.showFormContent = true;
        this.bookingDetails = true;
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

  backToDriverDetails() {
    this.driverDetails = false;
    this.showFormContent = true;
    this.bookingDetails = false;
    this.confirmBooking = false;
    this.cabTicket = true;
    
  }

  openConfirmBooking() {
    this.callConfirmBookingApi()

    if (this.cabTicketDetails !== undefined) {
      this.showTitleText = false;
      this.showFormContent = true;
      this.bookingDetails = false;
      this.confirmBooking = true;

    }
    
  }

  cabTicketChange() {
    this.sendTicketApi();
    this.showFormContent = true;
    this.bookingDetails = false;
    this.confirmBooking = false;
    this.cabTicket = true;
  }

  openDriverDetails() {
    this.callDriverDetailsApi();
    this.showFormContent = true;
    this.bookingDetails = false;
    this.confirmBooking = false;
    this.cabTicket = false;
    this.driverDetails = true;
  }

  
  handleSecondSelect(event) {
    this.storeFromDropDown = event.target.value;
    if (!this.showTripsContent) {
      this.roadTrip.from = event.target.value;
    }

    if (this.showTripsContent) {
      this.onewayTrip.from = event.target.value;
    }
    
    this.callDestinationDataApi();
    
  }

  handleChange(event) {
    const value = event.target.value;
    
    if (!this.showTripsContent) {
      this.roadTrip[event.target.name] = value;
    }

    if (this.showTripsContent) {
      this.onewayTrip[event.target.name] = value;
    }
  }

  callDestinationDataApi = async () => {
    
    let destiData: FormData = new FormData();
    destiData.append('branchid', this.storeFromDropDown);


    const response = await fetch(`https://watchoutachan.herokuapp.com/api/destinationarea`,
      {
        method: 'post',
        body: destiData
      }
    );
    handleErrors(response);

    let json = await response.json();
    this.destinationState = json;
  };

  callEstimatedDataApi = async () => {
    let estimatedData: FormData = new FormData();
    estimatedData.append('id', this.globalTrips?.from);
    estimatedData.append('destination', this.globalTrips?.destination);
    estimatedData.append('dest_address', this.globalTrips?.destinationAddress);
    estimatedData.append('date', this.globalTrips?.date);
    estimatedData.append('time', this.globalTrips?.time);
    if (this.globalTrips?.returnDate) {
      estimatedData.append('returndate', this.globalTrips.returnDate);
    }
    if (this.globalTrips?.returnTime) {
      estimatedData.append('returntime', this.globalTrips.returnTime);
    }
    



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

  callConfirmBookingApi = async () => {
    let ConfirmBooking: FormData = new FormData();
    ConfirmBooking.append('firstname', this.globalTrips.firstName);
    ConfirmBooking.append('surname', this.globalTrips.surname);
    ConfirmBooking.append('email', this.globalTrips.emailAddress);
    ConfirmBooking.append('phonenumber', this.globalTrips.phoneNumber);
    ConfirmBooking.append('airid', this.globalTrips.from);
    if (this.estimatePrice?.first_cost) {
      ConfirmBooking.append('from', this.estimatePrice?.first_cost?.from);
      ConfirmBooking.append('estmin', this.estimatePrice?.first_cost?.est_min);
      ConfirmBooking.append('estmax', this.estimatePrice?.first_cost?.est_max);
    } else {
      ConfirmBooking.append('from', this.estimatePrice?.from);
      ConfirmBooking.append('estmin', this.estimatePrice?.est_min);
      ConfirmBooking.append('estmax', this.estimatePrice?.est_max);
    }

    ConfirmBooking.append('to', this.globalTrips.destination);
    ConfirmBooking.append('date', this.globalTrips.date);
    ConfirmBooking.append('time', this.globalTrips.time);
   
    if (this.globalTrips?.returnDate) {
       ConfirmBooking.append('returndate', this.globalTrips.returnDate);
    }
    if (this.globalTrips?.returnTime) {
      ConfirmBooking.append('returntime', this.globalTrips.returnTime);
    }
   
    
    ConfirmBooking.append('dest_address', this.globalTrips.destinationAddress);
    
  
    const response = await fetch(`https://watchoutachan.herokuapp.com/api/booktrip`,
      {
        method: 'post',
        body: ConfirmBooking,
      }
    );
    handleErrors(response);

    let json = await response.json();
    this.cabTicketDetails = json;
  };
// this.cabTicketDetails?.first_ticket?
// this.cabTicketDetails?.second_ticket?
  // trip_id

  sendTicketApi = async () => { 
    let sendTicket: FormData = new FormData(); 

    const link_1 = `http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.cabTicketDetails?.first_ticket?.trip_id}`;
    const link_2 = `http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.cabTicketDetails?.second_ticket?.trip_id}`;

    sendTicket.append('link1', link_1);
    if(this.cabTicketDetails?.second_ticket) {
      sendTicket.append('link2', link_2);
      console.log(link_2);
    }
    sendTicket.append('name', this.cabTicketDetails?.first_ticket?.passenger_name);
    sendTicket.append('email', this.cabTicketDetails?.first_ticket?.email);
    
    const response = await fetch(`https://watchoutachan.herokuapp.com/api/sendticket`,
      {
        method: 'post',
        body: sendTicket,
      }
    );
    handleErrors(response);

    let json = await response.json();
    console.log(json);
  }

  callDriverDetailsApi = async () => {
    let driverDetails: FormData = new FormData();

    driverDetails.append('id', this.cabTicketDetails?.first_ticket?.trip_id);

    let secondDriverDetails: FormData = new FormData();
    secondDriverDetails.append('id', this.cabTicketDetails?.second_ticket?.trip_id);

    // if (this.globalTrips?.returnDate && this.globalTrips?.returnTime) {
    //   driverDetails.append('id', this.cabTicketDetails?.first_ticket?.trip_id);
    // };
    
    // Promise.all([
    //   await fetch(`https://watchoutachan.herokuapp.com/api/drivers_info`,
    //   {
    //     method: 'post',
    //     body: driverDetails,
    //   }).then(res => res.json()),
    //   await fetch(`https://watchoutachan.herokuapp.com/api/drivers_info`,
    //   {
    //     method: 'post',
    //     body: secondDriverDetails,
    //   }).then(res => res.json()),
    // ]).then(([driverDtl, driverDtl2]) => {
    //   console.log(driverDtl);
    //   console.log(driverDtl2);

    //   this.driverDetailsState = driverDtl;
    //   this.secondDriverDetailsState = driverDtl2;
    // }).catch((err) => {
    //   console.log(err);
    // });
    // handleErrors(response);
    

    // const response = await fetch(`https://watchoutachan.herokuapp.com/api/drivers_info`,
    //   {
    //     method: 'post',
    //     body: driverDetails,
    //   }
    // );
    // handleErrors(response);

    // let json = await response.json();
    // this.driverDetailsState = json;

    // destinationAddressErrMsg
  };

  render() {
    // console.log(this.globalTrips);
    // console.log(this.cabTicketDetails);
    // console.log(this.estimatePrice);
    // console.log(this.globalTrips);
    
    // console.log(this.driverDetailsState); 
    // console.log(this.secondDriverDetailsState); 

      let roadTripContent = <slot/>
      if(!this.showTripsContent) {
          roadTripContent = (
            <form class="px-4 py-6">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Firstname</label>
                  <input
                    name="firstName"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                    onInput={(e) => this.handleChange(e)}
                    required
                  />
                  <small>{this.firstNameErrMsg}</small>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Surname</label>
                  <input
                    name="surname"
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
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
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                    required
                  />
                  <small>{this.phoneNumberErrMsg}</small>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Email Address</label>
                  <input
                    name="emailAddress"
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="email"
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
                      class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
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
                      class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
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
              <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 focus:ring-2 focus:ring-blue-600">
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Date</label>
                  <input
                    name="date"
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="date"
                    required
                  />
                  <small>{this.dateErrMsg}</small>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Return Date</label>
                  <input
                    name="returnDate"
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="date"
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
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="time"
                    required
                  />
                  <small>{this.timeErrMsg}</small>
                </div>
                <div class="sm:w-3/6">
                  <label class="block text-gray-400 text-sm font-light mb-2">Return Time</label>
                  <input
                    name="returnTime"
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="time"
                    required
                  />
                  <small>{this.returnTimeErrMsg}</small>
                </div>
              </div>
              <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 focus:ring-2 focus:ring-blue-600">
                <div class="w-full">
                  <label class="block text-gray-400 text-sm font-light mb-2">Destination Address</label>
                  <input
                    name="destinationAddress"
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
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
                <input
                    name="firstName"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                    onInput={(e) => this.handleChange(e)}
                    required
                  />
                  <small>{this.firstNameErrMsg}</small>
              </div>
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Surname</label>
                <input
                  name="surname"
                  onInput={(e) => this.handleChange(e)}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
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
                  onInput={(e) => this.handleChange(e)}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                  required
                />
                <small>{this.phoneNumberErrMsg}</small>
              </div>
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Email Address</label>
                <input
                  name="emailAddress"
                  onInput={(e) => this.handleChange(e)}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="email"
                  required
                  />
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
                  <select
                      class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
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
                      class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
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
            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
              <div class="sm:w-3/6">
                <label class="block text-gray-400 text-sm font-light mb-2">Date</label>
                <input
                    name="date"
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="date"
                    required
                  />
                  <small>{this.dateErrMsg}</small>
              </div>
              <div class="sm:w-3/6">
              <label class="block text-gray-400 text-sm font-light mb-2">Time</label>
                <input
                    name="time"
                    onInput={(e) => this.handleChange(e)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="time"
                    required
                  />
                  <small>{this.timeErrMsg}</small>
              </div>
            </div>
            <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
              <div class="w-full">
                <label class="block text-gray-400 text-sm font-light mb-2">Destination Address</label>
                <input
                  name="destinationAddress"
                  onInput={(e) => this.handleChange(e)}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                  required
                />
                  <small>{this.destinationAddressErrMsg}</small>
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
                    
                            {this.driverDetails ? (
                              <img 
                                  onClick={this.backToDriverDetails.bind(this)}  
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
                                      date={this.globalTrips?.date} //date
                                      time={this.globalTrips?.time} //time
                                      airport={this.estimatePrice?.first_cost?.from || this.estimatePrice?.from}
                                      destinationAddress={this.estimatePrice?.first_cost?.to || this.estimatePrice?.to}
                                      destination={this.globalTrips?.destination} //destination
                                      estimatedPriceMax={this.estimatePrice?.first_cost?.est_max || this.estimatePrice?.est_max}
                                      estimatedPriceMin={this.estimatePrice?.first_cost?.est_min || this.estimatePrice?.est_min}
                                    ></modal-booking-details>
                                </div>
                              
                      
                                    {this.globalTrips.returnDate && this.globalTrips.returnTime ?
                                      (
                                        <modal-booking-details
                                          date={this.globalTrips?.returnDate} //date
                                          time={this.globalTrips.returnTime} //time
                                          airport={this.estimatePrice?.second_cost?.from}
                                          destinationAddress={this.estimatePrice?.second_cost?.to}
                                          destination={this.globalTrips.destination} //destination
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
                                      <small>{this.cabTicketDetails?.first_ticket?.passenger_name}</small>
                                    </row-element>
                                    <row-element>
                                      <small>phone Number:</small>
                                      <small>{this.cabTicketDetails?.first_ticket?.phone_number}</small>
                                    </row-element>
                                    <row-element>
                                      <small>ticket No:</small>
                                      <small>{this.cabTicketDetails?.first_ticket?.ticket_num}</small>
                                    </row-element>
                                    <row-element>
                                      <small>Date:</small>
                                      <small>{convertDate(this.cabTicketDetails?.first_ticket?.date)}</small>
                                    </row-element>
                                    <row-element>
                                      <small>Time:</small>
                                      <small>{convertTime(this.cabTicketDetails?.first_ticket?.time)}</small>
                                    </row-element>
                                    <row-element>
                                      <small class='flex-1'>From:</small>
                                      <div class='flex-1'>
                                        <small class='break-all'>{this.cabTicketDetails?.first_ticket?.from}</small>
                                      </div>
                                    </row-element>
                                    <row-element>
                                      <small class='flex-1'>Destination:</small>
                                      <div class='flex-1'>
                                        <small class='break-all'>{this.cabTicketDetails?.first_ticket?.destination}</small>
                                      </div>
                                    </row-element>

                                    {this.cabTicketDetails.second_ticket ? (
                                      <div>
                                        <row-element>
                                          <small>Return Date:</small>
                                          <small>{convertDate(this.cabTicketDetails?.second_ticket?.date)}</small>
                                        </row-element>
                                        <row-element>
                                          <small>Return Time:</small>
                                          <small>{convertTime(this.cabTicketDetails?.second_ticket?.time)}</small>
                                        </row-element>
                                        <row-element>
                                          <small>Return Location:</small>
                                          <small>{this.cabTicketDetails?.second_ticket?.from}</small>
                                        </row-element>
                                        <row-element>
                                          <small class='flex-1'>Return Destination:</small>
                                          <div class='flex-1'>
                                            <small class='break-all'>{this.cabTicketDetails?.second_ticket?.destination}</small>
                                          </div>
                                        </row-element>
                                      </div>
                                    ) : null}
                                    
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
                                      <a href={`tel:${this.cabTicketDetails?.first_ticket?.phone_num}` }>
                                        <h4 class="text-sm text-gray-400 font-semibold">{this.cabTicketDetails?.first_ticket?.phone_num}</h4>
                                      </a>
                                      
                                    </div>
                                    <div class="flex">
                                      <img  
                                        class="mr-6" 
                                        src={getAssetPath(`../assets/${this.whatappIcon}`)} 
                                        alt="car-icon"
                                      />
                                      <a href={`https://wa.me/${this.cabTicketDetails?.first_ticket?.whatapp}` }>
                                        <h4 class="text-sm text-gray-400 font-semibold">{this.cabTicketDetails?.first_ticket?.whatapp}</h4>
                                      </a>
                                      
                                    </div>
                                    
                                    <div class="space-y-4">
                                      <div>
                                        <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.cabTicketDetails?.first_ticket?.trip_id}` }>
                                          <button 
                                          // onClick={this.openDriverDetails.bind(this)}  
                                            type="button"  
                                            class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                            First Trip Ticket Details
                                          </button>
                                        </a>
                                      </div>
                                      
                                      {
                                        this.cabTicketDetails?.second_ticket ?
                                        (
                                          <div>
                                            <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.cabTicketDetails?.second_ticket?.trip_id}` }>
                                              <button 
                                              // onClick={this.openDriverDetails.bind(this)}  
                                                type="button"  
                                                class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                                Return Trip Ticket Details
                                              </button>
                                            </a>
                                          </div>
                                        ) : null
                                      }
                                      
                                    </div>
                                    
                                  

                                    
                                    
                                  </div>
                                </section>
                                <section class="sm:px-6 py-10 ">
                                  <h1 class="text-xl font-semibold cabTicket-m-s-h1">Estimated cost</h1>
                                  <div class="mt-10 space-y-8">
                                    <row-element>
                                      <small>estimated Total:</small>
                              <small class="font-bold">{this.estimatePrice?.first_cost?.est_min || this.estimatePrice?.est_min} - {this.estimatePrice?.first_cost?.est_max || this.estimatePrice?.est_max}</small>
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