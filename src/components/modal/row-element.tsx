import { Component, h} from "@stencil/core";

@Component({
    tag: "row-element",
    styleUrl: 'achan-modal.css',
    shadow: true,
})


export class RowElement {
    render() {
        return (
            <div class="flex w-full flex-row justify-between mb-4 text-gray-400">
                <slot/>
            </div>
        );
    }
}