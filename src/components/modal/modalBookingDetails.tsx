import { Component, Prop, h, getAssetPath, Watch } from "@stencil/core";
import convertDate from "../convertDate";

@Component({
    tag : 'modal-booking-details',
    shadow: true,
    styleUrl: 'achan-modal.css',
    assetsDirs: ['assets'],
})

export class ModalBookingDetails {
    @Prop() dottedLines = 'dotted-lines.png';
    @Prop({ reflect: true, mutable: true}) date : string | number;
    @Prop({ reflect: true, mutable: true}) time : string | number;
    @Prop({ reflect: true, mutable: true}) airport : string;
  
    @Prop({ reflect: true, mutable: true}) destination : string;
    @Prop({ reflect: true, mutable: true}) destinationAddress : string;
    @Prop({ reflect: true, mutable: true}) estimatedPriceMax : string | number;
    @Prop({ reflect: true, mutable: true}) estimatedPriceMin : string | number;

    // @Watch('date')
    // @Watch('time')
    // @Watch('airport')
    // @Watch('destination')
    // @Watch('destinationAddress')
    // @Watch('estimatedPriceMax')
    // @Watch('estimatedPriceMin')
    // watchStateHandler(newValue: any, oldValue: any) {
    //     if (newValue !== oldValue) {
    //         this.date = newValue;
    //         this.time = newValue;
    //         this.airport = newValue;
    //         this.destination = newValue;
    //         this.destinationAddress = newValue;
    //         this.estimatedPriceMax = newValue;
    //         this.estimatedPriceMin = newValue;
    //     }
    // console.log('The old value of roadTripDetails is: ', oldValue);
    // console.log('The new value of roadTripDetails is: ', newValue);
    // }
    
    

//   @Event({}) 
    render() {
        return (
            <figure class="rounded-xl px-4 py-6 sm:p-10 h-full lg:h-80 2xl:h-80 space-y-2 sm+:space-y-4 md:space-y-8 w-full customBookingDetails-Card">
       
                <figcaption class="flex w-full">
                    <div>
                        <img class="mr-4 h-72 sm:h-64" src={getAssetPath(`../assets/${this.dottedLines}`)} alt="previous-icon"/>
                    </div>
                    <div class="text-white w-full">
                        <div class="flex flex-col space-y-2 sm:space-y-1">
                            <small class="text-sm font-semibold">from</small>
                            <small class="text-xs">{this.date}</small>
                            <small class="text-lg">{this.time }</small>
                            <small class="text-sm">{ this.airport}</small>
                            
                        </div>
                        <div class='flex justify-between mt-16 sm:mt-20 space-x-4 sm:space-x-0 items-end'>
                            <div class="flex flex-col  space-y-2 sm:space-y-1 ">
                                <small class="text-sm font-semibold">to</small>
                                <small class="text-xs">{convertDate(this.date)}</small>
                                <small class="text-lg"> {this.time}</small>
                                <small class="text-lg">{this.destinationAddress} </small>
                            </div>
                            <div class="flex flex-col  space-y-1 ">
                                <label class="text-xs sm:text-sm font-semibold">Estimated Price</label>
                                <small class="text-xs sm:text-sm">{this.estimatedPriceMin} - {this.estimatedPriceMax}</small>
                            </div>
                            
                            
                        </div>
                    </div>
                </figcaption>

                
                
            </figure>
        )
        
    }
}