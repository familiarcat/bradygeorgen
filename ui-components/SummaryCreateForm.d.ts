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
export declare type SummaryCreateFormInputValues = {
    goals?: string;
    persona?: string;
    url?: string;
    headshot?: string;
    gptResponse?: string;
    resume?: string;
};
export declare type SummaryCreateFormValidationValues = {
    goals?: ValidationFunction<string>;
    persona?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    headshot?: ValidationFunction<string>;
    gptResponse?: ValidationFunction<string>;
    resume?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SummaryCreateFormOverridesProps = {
    SummaryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    goals?: PrimitiveOverrideProps<TextFieldProps>;
    persona?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    headshot?: PrimitiveOverrideProps<TextFieldProps>;
    gptResponse?: PrimitiveOverrideProps<TextFieldProps>;
    resume?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SummaryCreateFormProps = React.PropsWithChildren<{
    overrides?: SummaryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SummaryCreateFormInputValues) => SummaryCreateFormInputValues;
    onSuccess?: (fields: SummaryCreateFormInputValues) => void;
    onError?: (fields: SummaryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SummaryCreateFormInputValues) => SummaryCreateFormInputValues;
    onValidate?: SummaryCreateFormValidationValues;
} & React.CSSProperties>;
export default function SummaryCreateForm(props: SummaryCreateFormProps): React.ReactElement;
