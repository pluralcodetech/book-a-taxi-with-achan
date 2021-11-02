import { Component, h } from '@stencil/core';

@Component({
  tag: 'achan-modal',
  styleUrl: 'achan-modal.css',
  shadow: true
})

// w-auto items-center
export class AchhanModal {
  render() {
    return (
      <div class='justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
           <div class="relative  w-1/2 my-6 mx-auto max-w-3xl">
               {/*content*/}
              <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div class="flex items-center  justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h4 class="text-xl font-semibold text-blue-600 text-center">
                    Book a Taxi
                  </h4>
                  <button class="text-gray-400 p-1 ml-auto bg-transparent border-0 outline-none focus:outline-none">x</button>
                </div>
                {/*body*/}
                <slot />
              </div>
                
           </div>
        
      </div>
    );
  }
}