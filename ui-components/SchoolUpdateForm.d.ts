import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { School } from "./graphql/types";
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
export declare type SchoolUpdateFormInputValues = {
    name?: string;
};
export declare type SchoolUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SchoolUpdateFormOverridesProps = {
    SchoolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SchoolUpdateFormProps = React.PropsWithChildren<{
    overrides?: SchoolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    school?: School;
    onSubmit?: (fields: SchoolUpdateFormInputValues) => SchoolUpdateFormInputValues;
    onSuccess?: (fields: SchoolUpdateFormInputValues) => void;
    onError?: (fields: SchoolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SchoolUpdateFormInputValues) => SchoolUpdateFormInputValues;
    onValidate?: SchoolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SchoolUpdateForm(props: SchoolUpdateFormProps): React.ReactElement;
