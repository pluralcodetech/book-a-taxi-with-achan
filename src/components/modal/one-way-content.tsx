import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "one-way-content",
    styleUrl: "achan-modal.css",
    shadow: true,
})


export class OneWayContent {
    @Prop({ reflect: true, mutable: true}) onBookChange: () => void;
    render() {
        return (
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
            
            <button 
              type="button" 
              onClick={this.onBookChange.bind(this)}  
              class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none custom-book-btn">Book Now</button>
          </form>
        
        );
    }
}
 