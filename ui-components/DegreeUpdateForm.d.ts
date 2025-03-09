import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Degree } from "./graphql/types";
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
export declare type DegreeUpdateFormInputValues = {
    major?: string;
    startYear?: string;
    endYear?: string;
};
export declare type DegreeUpdateFormValidationValues = {
    major?: ValidationFunction<string>;
    startYear?: ValidationFunction<string>;
    endYear?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DegreeUpdateFormOverridesProps = {
    DegreeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    major?: PrimitiveOverrideProps<TextFieldProps>;
    startYear?: PrimitiveOverrideProps<TextFieldProps>;
    endYear?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DegreeUpdateFormProps = React.PropsWithChildren<{
    overrides?: DegreeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    degree?: Degree;
    onSubmit?: (fields: DegreeUpdateFormInputValues) => DegreeUpdateFormInputValues;
    onSuccess?: (fields: DegreeUpdateFormInputValues) => void;
    onError?: (fields: DegreeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DegreeUpdateFormInputValues) => DegreeUpdateFormInputValues;
    onValidate?: DegreeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DegreeUpdateForm(props: DegreeUpdateFormProps): React.ReactElement;
