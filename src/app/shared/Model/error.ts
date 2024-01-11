import { AlertVariants } from "@spartan-ng/ui-alert-helm";

export class ResponseMessage {
    constructor(
        public success: boolean,
        public message: string,
        public type: AlertVariants['variant'],
        public body?: any,
        public status?: number,
    ) { }
}

export type ResponseType = "success" | "info" | "error" | null | undefined;