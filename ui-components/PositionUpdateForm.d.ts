import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Position } from "./graphql/types";
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
export declare type PositionUpdateFormInputValues = {
    title?: string;
    company?: string;
    startDate?: string;
    endDate?: string;
};
export declare type PositionUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PositionUpdateFormOverridesProps = {
    PositionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PositionUpdateFormProps = React.PropsWithChildren<{
    overrides?: PositionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    position?: Position;
    onSubmit?: (fields: PositionUpdateFormInputValues) => PositionUpdateFormInputValues;
    onSuccess?: (fields: PositionUpdateFormInputValues) => void;
    onError?: (fields: PositionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PositionUpdateFormInputValues) => PositionUpdateFormInputValues;
    onValidate?: PositionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PositionUpdateForm(props: PositionUpdateFormProps): React.ReactElement;
