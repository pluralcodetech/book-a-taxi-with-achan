import { Component, getAssetPath, h, Prop } from "@stencil/core";

@Component({
    tag: "modal-botton",
    styleUrl: 'achan-modal.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class ModalBotton { 
    @Prop({ reflect: true, mutable: true }) class: string;
    @Prop() externalbtn = "32dp.png"

    render() {
        return (
            <button class="animate-bounce w-72 fixed right-0 bottom-0">
                <img  
                    class="" 
                    src={getAssetPath(`../assets/${this.externalbtn}`)} 
                    alt="external-btn-icon"
                /> 
            </button>
        );
    }
}
