import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'achan-modal',
  styleUrl: 'achan-modal.css',
  shadow: true
})



// w-auto items-center
export class AchhanModal {
    @State() showTripsContent = false;
    @Prop({ reflect: true, mutable: true}) opened: boolean;

    closeModal() {
        this.opened = false;
        console.log("closing Modal...")
    }

    onContentChange(content: string){
        // console.log(content)
        this.showTripsContent = content === 'roundTrip'
    }

  render() {
    //Road Trip Forms   
      let roadTripContent = <slot/>
      if(!this.showTripsContent) {
          roadTripContent = (
            <div class="p-4">
                  <h1>Road Trip Form</h1>
            </div>
        )
      }

      let oneWayContent = <slot/>
      if(this.showTripsContent) {
        oneWayContent = (
            <div class="p-4">
                  <h1>One way Form</h1>
            </div>
        )
      }



    // Display all Modal Content
      let modalContent = null;
      if (this.opened) {
        modalContent = (
            <div class=' justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal-container'>
                <div class="relative  w-1/2 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div class="flex items-center  justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                        <h4 class="text-xl font-semibold text-blue-600 text-center">
                            Book a Taxi
                        </h4>
                        <button onClick={this.closeModal.bind(this)} class="text-gray-400 p-1 ml-auto bg-transparent border-0 outline-none focus:outline-none">x</button>
                        </div>
                        {/*body*/}
                        {/* <div class="relative p-6 flex-auto"></div> */}
                        <section id="tabs" class='p-4 flex justify-between w-full'>
                            <button onClick={this.onContentChange.bind(this, 'oneWay' )} class="text-center border-2 p-3 outline-none focus:outline-none custom-tabs-btn custom-active">Round Trip</button>
                            <button onClick={this.onContentChange.bind(this, 'roundTrip')} class=" text-center border-2 outline-none focus:outline-none custom-tabs-btn">One Way</button>
                        </section>

                        <main>
                            {roadTripContent}
                            {oneWayContent}
                        </main>
                    </div>
                        
                </div>
                
            </div>
        )
      }
    return modalContent;
  }
}