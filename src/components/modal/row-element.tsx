import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "row-element",
    styleUrl: 'achan-modal.css',
    shadow: true,
})


export class RowElement {
    // @Prop({ reflect: true, mutable: true}) slot: string;
    render() {
        return (
            <div class="flex w-full flex-row justify-between mb-4 text-gray-400">
                <slot/>
            </div>
        );
    }
}