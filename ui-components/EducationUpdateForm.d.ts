import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Education } from "./graphql/types";
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
export declare type EducationUpdateFormInputValues = {
    summary?: string;
    resume?: string;
};
export declare type EducationUpdateFormValidationValues = {
    summary?: ValidationFunction<string>;
    resume?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EducationUpdateFormOverridesProps = {
    EducationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    resume?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EducationUpdateFormProps = React.PropsWithChildren<{
    overrides?: EducationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    education?: Education;
    onSubmit?: (fields: EducationUpdateFormInputValues) => EducationUpdateFormInputValues;
    onSuccess?: (fields: EducationUpdateFormInputValues) => void;
    onError?: (fields: EducationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EducationUpdateFormInputValues) => EducationUpdateFormInputValues;
    onValidate?: EducationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EducationUpdateForm(props: EducationUpdateFormProps): React.ReactElement;
