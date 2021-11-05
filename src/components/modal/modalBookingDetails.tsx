import { Component, Prop, h, getAssetPath } from "@stencil/core";

@Component({
    tag : 'modal-booking-details',
    shadow: true,
    styleUrl: 'achan-modal.css',
    assetsDirs: ['assets'],
})

export class ModalBookingDetails {
    @Prop() dottedLines = 'dotted-lines.png';
    @Prop({ reflect: true, mutable: true}) from : string;
    @Prop({ reflect: true, mutable: true}) date1 : string | number;
    @Prop({ reflect: true, mutable: true}) time1 : string | number;
    @Prop({ reflect: true, mutable: true}) location1 : string;
    @Prop({ reflect: true, mutable: true}) date2 : string | number;
    @Prop({ reflect: true, mutable: true}) time2 : string | number;
    @Prop({ reflect: true, mutable: true}) location2 : string;
    @Prop({ reflect: true, mutable: true}) estimatedPrice : number;

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
                            <small class="text-xs">Mon 25 Oct 2021</small>
                            <small class="text-lg">08:25am</small>
                            <small class="text-sm">Muritala muhammed Airport ikeja Lagos</small>
                            
                        </div>
                        <div class='flex justify-between mt-16 sm:mt-20 space-x-4 sm:space-x-0 items-end'>
                            <div class="flex flex-col  space-y-2 sm:space-y-1 ">
                                <small class="text-sm font-semibold">to</small>
                                <small class="text-xs">Mon 25 Oct 2021</small>
                                <small class="text-lg">08:25am</small>
                            </div>
                            <div class="flex flex-col  space-y-1 ">
                                <label class="text-xs sm:text-sm font-semibold">Estimated Price</label>
                                <small class="text-xs sm:text-sm">7,900 NGN - 10,900 NGN</small>
                            </div>
                            
                            
                        </div>
                    </div>
                </figcaption>

                
                
            </figure>
        )
        
    }
}