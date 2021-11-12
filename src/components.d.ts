/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AchanModal {
        "callIcon": string;
        "carIcon": string;
        "emailIcon": string;
        "opened": boolean;
        "previousBtn": string;
    }
    interface ModalBookingDetails {
        "date1": string | number;
        "date2": string | number;
        "dottedLines": string;
        "estimatedPrice": number;
        "from": string;
        "location1": string;
        "location2": string;
        "time1": string | number;
        "time2": string | number;
    }
    interface OneWayContent {
        "onBookChange": () => void;
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
    interface HTMLOneWayContentElement extends Components.OneWayContent, HTMLStencilElement {
    }
    var HTMLOneWayContentElement: {
        prototype: HTMLOneWayContentElement;
        new (): HTMLOneWayContentElement;
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
        "one-way-content": HTMLOneWayContentElement;
        "row-element": HTMLRowElementElement;
    }
}
declare namespace LocalJSX {
    interface AchanModal {
        "callIcon"?: string;
        "carIcon"?: string;
        "emailIcon"?: string;
        "opened"?: boolean;
        "previousBtn"?: string;
    }
    interface ModalBookingDetails {
        "date1"?: string | number;
        "date2"?: string | number;
        "dottedLines"?: string;
        "estimatedPrice"?: number;
        "from"?: string;
        "location1"?: string;
        "location2"?: string;
        "time1"?: string | number;
        "time2"?: string | number;
    }
    interface OneWayContent {
        "onBookChange"?: () => void;
    }
    interface RowElement {
    }
    interface IntrinsicElements {
        "achan-modal": AchanModal;
        "modal-booking-details": ModalBookingDetails;
        "one-way-content": OneWayContent;
        "row-element": RowElement;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "achan-modal": LocalJSX.AchanModal & JSXBase.HTMLAttributes<HTMLAchanModalElement>;
            "modal-booking-details": LocalJSX.ModalBookingDetails & JSXBase.HTMLAttributes<HTMLModalBookingDetailsElement>;
            "one-way-content": LocalJSX.OneWayContent & JSXBase.HTMLAttributes<HTMLOneWayContentElement>;
            "row-element": LocalJSX.RowElement & JSXBase.HTMLAttributes<HTMLRowElementElement>;
        }
    }
}
