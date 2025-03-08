import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ContactInformation } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactInformationUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    resume?: string;
};
export declare type ContactInformationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    resume?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactInformationUpdateFormOverridesProps = {
    ContactInformationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    resume?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactInformationUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactInformationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactInformation?: ContactInformation;
    onSubmit?: (fields: ContactInformationUpdateFormInputValues) => ContactInformationUpdateFormInputValues;
    onSuccess?: (fields: ContactInformationUpdateFormInputValues) => void;
    onError?: (fields: ContactInformationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactInformationUpdateFormInputValues) => ContactInformationUpdateFormInputValues;
    onValidate?: ContactInformationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactInformationUpdateForm(props: ContactInformationUpdateFormProps): React.ReactElement;
