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
export declare type SchoolCreateFormInputValues = {
    name?: string;
};
export declare type SchoolCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SchoolCreateFormOverridesProps = {
    SchoolCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SchoolCreateFormProps = React.PropsWithChildren<{
    overrides?: SchoolCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SchoolCreateFormInputValues) => SchoolCreateFormInputValues;
    onSuccess?: (fields: SchoolCreateFormInputValues) => void;
    onError?: (fields: SchoolCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SchoolCreateFormInputValues) => SchoolCreateFormInputValues;
    onValidate?: SchoolCreateFormValidationValues;
} & React.CSSProperties>;
export default function SchoolCreateForm(props: SchoolCreateFormProps): React.ReactElement;
