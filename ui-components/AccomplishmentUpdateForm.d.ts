import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Accomplishment } from "./graphql/types";
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
export declare type AccomplishmentUpdateFormInputValues = {
    title?: string;
    description?: string;
    link?: string;
};
export declare type AccomplishmentUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccomplishmentUpdateFormOverridesProps = {
    AccomplishmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccomplishmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccomplishmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    accomplishment?: Accomplishment;
    onSubmit?: (fields: AccomplishmentUpdateFormInputValues) => AccomplishmentUpdateFormInputValues;
    onSuccess?: (fields: AccomplishmentUpdateFormInputValues) => void;
    onError?: (fields: AccomplishmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccomplishmentUpdateFormInputValues) => AccomplishmentUpdateFormInputValues;
    onValidate?: AccomplishmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccomplishmentUpdateForm(props: AccomplishmentUpdateFormProps): React.ReactElement;
