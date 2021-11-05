export declare class AchhanModal {
  showTripsContent: boolean;
  showTitleText: boolean;
  showFormContent: boolean;
  bookingDetails: boolean;
  confirmBooking: boolean;
  cabTicket: boolean;
  driverDetails: boolean;
  previousBtn: string;
  carIcon: string;
  callIcon: string;
  emailIcon: string;
  opened: boolean;
  closeModal(): void;
  onContentChange(content: string): void;
  onBookChange(): void;
  previousChange(): void;
  openConfirmBooking(): void;
  cabTicketChange(): void;
  openDriverDetails(): void;
  render(): any;
}
