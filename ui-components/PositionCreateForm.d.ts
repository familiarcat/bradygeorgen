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
export declare type PositionCreateFormInputValues = {
    title?: string;
    company?: string;
    startDate?: string;
    endDate?: string;
};
export declare type PositionCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PositionCreateFormOverridesProps = {
    PositionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PositionCreateFormProps = React.PropsWithChildren<{
    overrides?: PositionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PositionCreateFormInputValues) => PositionCreateFormInputValues;
    onSuccess?: (fields: PositionCreateFormInputValues) => void;
    onError?: (fields: PositionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PositionCreateFormInputValues) => PositionCreateFormInputValues;
    onValidate?: PositionCreateFormValidationValues;
} & React.CSSProperties>;
export default function PositionCreateForm(props: PositionCreateFormProps): React.ReactElement;
