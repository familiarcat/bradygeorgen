import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Reference } from "./graphql/types";
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
export declare type ReferenceUpdateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
};
export declare type ReferenceUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReferenceUpdateFormOverridesProps = {
    ReferenceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReferenceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReferenceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reference?: Reference;
    onSubmit?: (fields: ReferenceUpdateFormInputValues) => ReferenceUpdateFormInputValues;
    onSuccess?: (fields: ReferenceUpdateFormInputValues) => void;
    onError?: (fields: ReferenceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReferenceUpdateFormInputValues) => ReferenceUpdateFormInputValues;
    onValidate?: ReferenceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReferenceUpdateForm(props: ReferenceUpdateFormProps): React.ReactElement;
