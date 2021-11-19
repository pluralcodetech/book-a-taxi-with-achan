interface roadtripType {
  firstName: string;
  surname: string;
  phoneNumber: string;
  emailAddress: string;
  from: string;
  destination: string;
  date: string;
  returnDate: string;
  time: string;
  returnTime: string;
  destinationAddress: string;
}
export declare class AchhanModal {
  showTripsContent: boolean;
  showTitleText: boolean;
  showFormContent: boolean;
  bookingDetails: boolean;
  confirmBooking: boolean;
  cabTicket: boolean;
  driverDetails: boolean;
  fromDropDown: any;
  storeFromDropDown: any;
  destinationState: any;
  roadTrip: roadtripType;
  roadTripValid: boolean;
  estimatePrice: any;
  firstNameErrMsg: any;
  surnameErrMsg: any;
  phoneNumberErrMsg: any;
  emailAddressErrMsg: any;
  fromErrMsg: any;
  destinationErrMsg: any;
  dateErrMsg: any;
  returnDateErrMsg: any;
  timeErrMsg: any;
  returnTimeErrMsg: any;
  destinationAddressErrMsg: any;
  previousBtn: string;
  carIcon: string;
  callIcon: string;
  emailIcon: string;
  opened: boolean;
  id: string;
  tripsDetails: any;
  watchStateHandler(newValue: any, oldValue: any): void;
  componentWillLoad(): void;
  componentWillUpdate(): void;
  callFromDataApi: (id: any) => Promise<void>;
  closeModal(): void;
  onContentChange(content: string): void;
  onBookChange(): void;
  previousChange(): void;
  openConfirmBooking(): void;
  cabTicketChange(): void;
  openDriverDetails(): void;
  handleSecondSelect(event: any): void;
  callDestinationDataApi: () => Promise<void>;
  callEstimatedDataApi: () => Promise<void>;
  handleChange(event: any): void;
  render(): any;
}
export {};
