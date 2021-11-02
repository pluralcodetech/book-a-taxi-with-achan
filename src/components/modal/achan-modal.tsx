import { Component, h } from '@stencil/core';

@Component({
  tag: 'achan-modal',
  styleUrl: 'achan-modal.css',
  shadow: true
})

export class AchhanModal {
  render() {
    return (
      <div class='bg-red-700'>
        <slot />
      </div>
    );
  }
}