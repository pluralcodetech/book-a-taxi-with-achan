/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface AchanModal {
        "callIcon": string;
        "carIcon": string;
        "name": string;
        "opened": boolean;
        "previousBtn": string;
        "whatappIcon": string;
    }
    interface ModalBookingDetails {
        "airport": string;
        "date": string | number;
        "destination": string;
        "destinationAddress": string;
        "dottedLines": string;
        "estimatedPriceMax": string | number;
        "estimatedPriceMin": string | number;
        "time": string | number;
    }
    interface ModalBotton {
        "class": string;
        "externalbtn": string;
    }
    interface RowElement {
    }
}
declare global {
    interface HTMLAchanModalElement extends Components.AchanModal, HTMLStencilElement {
    }
    var HTMLAchanModalElement: {
        prototype: HTMLAchanModalElement;
        new (): HTMLAchanModalElement;
    };
    interface HTMLModalBookingDetailsElement extends Components.ModalBookingDetails, HTMLStencilElement {
    }
    var HTMLModalBookingDetailsElement: {
        prototype: HTMLModalBookingDetailsElement;
        new (): HTMLModalBookingDetailsElement;
    };
    interface HTMLModalBottonElement extends Components.ModalBotton, HTMLStencilElement {
    }
    var HTMLModalBottonElement: {
        prototype: HTMLModalBottonElement;
        new (): HTMLModalBottonElement;
    };
    interface HTMLRowElementElement extends Components.RowElement, HTMLStencilElement {
    }
    var HTMLRowElementElement: {
        prototype: HTMLRowElementElement;
        new (): HTMLRowElementElement;
    };
    interface HTMLElementTagNameMap {
        "achan-modal": HTMLAchanModalElement;
        "modal-booking-details": HTMLModalBookingDetailsElement;
        "modal-botton": HTMLModalBottonElement;
        "row-element": HTMLRowElementElement;
    }
}
declare namespace LocalJSX {
    interface AchanModal {
        "callIcon"?: string;
        "carIcon"?: string;
        "name"?: string;
        "opened"?: boolean;
        "previousBtn"?: string;
        "whatappIcon"?: string;
    }
    interface ModalBookingDetails {
        "airport"?: string;
        "date"?: string | number;
        "destination"?: string;
        "destinationAddress"?: string;
        "dottedLines"?: string;
        "estimatedPriceMax"?: string | number;
        "estimatedPriceMin"?: string | number;
        "time"?: string | number;
    }
    interface ModalBotton {
        "class"?: string;
        "externalbtn"?: string;
    }
    interface RowElement {
    }
    interface IntrinsicElements {
        "achan-modal": AchanModal;
        "modal-booking-details": ModalBookingDetails;
        "modal-botton": ModalBotton;
        "row-element": RowElement;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "achan-modal": LocalJSX.AchanModal & JSXBase.HTMLAttributes<HTMLAchanModalElement>;
            "modal-booking-details": LocalJSX.ModalBookingDetails & JSXBase.HTMLAttributes<HTMLModalBookingDetailsElement>;
            "modal-botton": LocalJSX.ModalBotton & JSXBase.HTMLAttributes<HTMLModalBottonElement>;
            "row-element": LocalJSX.RowElement & JSXBase.HTMLAttributes<HTMLRowElementElement>;
        }
    }
}
