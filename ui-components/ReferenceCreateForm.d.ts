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
export declare type ReferenceCreateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
};
export declare type ReferenceCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReferenceCreateFormOverridesProps = {
    ReferenceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReferenceCreateFormProps = React.PropsWithChildren<{
    overrides?: ReferenceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReferenceCreateFormInputValues) => ReferenceCreateFormInputValues;
    onSuccess?: (fields: ReferenceCreateFormInputValues) => void;
    onError?: (fields: ReferenceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReferenceCreateFormInputValues) => ReferenceCreateFormInputValues;
    onValidate?: ReferenceCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReferenceCreateForm(props: ReferenceCreateFormProps): React.ReactElement;
