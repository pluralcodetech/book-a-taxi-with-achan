import { Component, getAssetPath, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'achan-modal',
  styleUrl: 'achan-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})



// w-auto items-center
export class AchhanModal {
    @State() showTripsContent = false;
    @State() showFormContent = false;
    @Prop() previousBtn = 'arrow-left.svg'
    @Prop({ reflect: true, mutable: true}) opened: boolean;

    closeModal() {
        this.opened = false;
        console.log("closing Modal...")
    }

    onContentChange(content: string){
        this.showTripsContent = content === 'roundTrip'
    }

    onBookChange() {
      this.showFormContent = true;
    }

    previousChange() {
      this.showFormContent = false;
    }

  render() {
    //Conditionally rendered Road Trip Forms   
      let roadTripContent = <slot/>
      if(!this.showTripsContent) {
          roadTripContent = (
            <form class="p-4">
              <div class="flex justify-between">
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Firstname</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
                </div>
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Surname</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
                </div>
              </div>

              <div class="flex justify-between mt-4">
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Phone Number</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
                </div>
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Email Address</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="email"  />
                </div>
              </div>
              <div class="flex justify-between mt-4">
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">From</label>
                  <div class="relative w-full">
                    <div class="pointer-events-none text-gray-600 absolute xl:mt-3 xl:ml-64  ">
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
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Destination</label>
                  <div class="relative w-full">
                    <div class="pointer-events-none text-gray-600 absolute xl:mt-3 xl:ml-64  ">
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
              <div class="flex justify-between mt-4">
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Date</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="date"  />
                </div>
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Return Date</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="date"  />
                </div>
              </div>
              <div class="flex justify-between mt-4">
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Time</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="time"  />
                </div>
                <div class="customInput">
                  <label class="block text-gray-400 text-sm font-light mb-2">Return Time</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="time"  />
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
          <form class="px-4 pt-4 pb-10">
            <div class="flex justify-between">
              <div class="customInput">
                <label class="block text-gray-400 text-sm font-light mb-2">Firstname</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
              </div>
              <div class="customInput">
                <label class="block text-gray-400 text-sm font-light mb-2">Surname</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
              </div>
            </div>

            <div class="flex justify-between mt-4">
              <div class="customInput">
                <label class="block text-gray-400 text-sm font-light mb-2">Phone Number</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="text"  />
              </div>
              <div class="customInput">
                <label class="block text-gray-400 text-sm font-light mb-2">Email Address</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="email"  />
              </div>
            </div>
            <div class="flex justify-between mt-4">
              <div class="customInput">
                <label class="block text-gray-400 text-sm font-light mb-2">From</label>
                <div class="relative w-full">
                  <div class="pointer-events-none text-gray-600 absolute xl:mt-3 xl:ml-64  ">
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
              <div class="customInput">
                <label class="block text-gray-400 text-sm font-light mb-2">Destination</label>
                <div class="relative w-full">
                  <div class="pointer-events-none text-gray-600 absolute xl:mt-3 xl:ml-64  ">
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
            <div class="flex justify-between mt-4">
              <div class="customInput">
                <label class="block text-gray-400 text-sm font-light mb-2">Date</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="date"  />
              </div>
              <div class="customInput">
              <label class="block text-gray-400 text-sm font-light mb-2">Time</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" type="time"  />
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
                <div class="relative  w-1/2 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div class="flex items-center  justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                          <div class="flex">
                            {this.showFormContent ? (
                                <img 
                                  onClick={this.previousChange.bind(this)}  
                                  class="mr-6" 
                                  src={getAssetPath(`../assets/${this.previousBtn}`)} 
                                  alt="previous-icon"/>
                              ) : null 
                            }
                            
                            <h4 class="text-xl font-semibold text-blue-600 text-center">
                                Book a Taxi
                            </h4>
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

                        {this.showFormContent ? (
                          <div class="p-4">
                            <modal-booking-details></modal-booking-details>
                          </div>
                        ): null}

                    </div>
                        
                </div>
                
            </div>
        )
      }
    return modalContent;
  }
}