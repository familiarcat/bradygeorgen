import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AccomplishmentCreateFormInputValues = {
    title?: string;
    description?: string;
    link?: string;
};
export declare type AccomplishmentCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccomplishmentCreateFormOverridesProps = {
    AccomplishmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccomplishmentCreateFormProps = React.PropsWithChildren<{
    overrides?: AccomplishmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccomplishmentCreateFormInputValues) => AccomplishmentCreateFormInputValues;
    onSuccess?: (fields: AccomplishmentCreateFormInputValues) => void;
    onError?: (fields: AccomplishmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccomplishmentCreateFormInputValues) => AccomplishmentCreateFormInputValues;
    onValidate?: AccomplishmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccomplishmentCreateForm(props: AccomplishmentCreateFormProps): React.ReactElement;
