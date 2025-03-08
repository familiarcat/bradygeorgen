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
export declare type DegreeCreateFormInputValues = {
    major?: string;
    startYear?: string;
    endYear?: string;
};
export declare type DegreeCreateFormValidationValues = {
    major?: ValidationFunction<string>;
    startYear?: ValidationFunction<string>;
    endYear?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DegreeCreateFormOverridesProps = {
    DegreeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    major?: PrimitiveOverrideProps<TextFieldProps>;
    startYear?: PrimitiveOverrideProps<TextFieldProps>;
    endYear?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DegreeCreateFormProps = React.PropsWithChildren<{
    overrides?: DegreeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DegreeCreateFormInputValues) => DegreeCreateFormInputValues;
    onSuccess?: (fields: DegreeCreateFormInputValues) => void;
    onError?: (fields: DegreeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DegreeCreateFormInputValues) => DegreeCreateFormInputValues;
    onValidate?: DegreeCreateFormValidationValues;
} & React.CSSProperties>;
export default function DegreeCreateForm(props: DegreeCreateFormProps): React.ReactElement;
