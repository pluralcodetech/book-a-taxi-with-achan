export declare class AchhanModal {
  showTripsContent: boolean;
  showTitleText: boolean;
  showFormContent: boolean;
  bookingDetails: boolean;
  confirmBooking: boolean;
  cabTicket: boolean;
  driverDetails: boolean;
  fromDropDown: any;
  loading: boolean;
  error: any;
  previousBtn: string;
  carIcon: string;
  callIcon: string;
  emailIcon: string;
  opened: boolean;
  id: string;
  fromDropdownAct: (...args: any) => any;
  componentWillLoad(): void;
  closeModal(): void;
  onContentChange(content: string): void;
  onBookChange(): void;
  previousChange(): void;
  openConfirmBooking(): void;
  cabTicketChange(): void;
  openDriverDetails(): void;
  render(): any;
}
