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
export declare type EngagementCreateFormInputValues = {
    client?: string;
    startDate?: string;
    endDate?: string;
    gptResponse?: string;
};
export declare type EngagementCreateFormValidationValues = {
    client?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    gptResponse?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EngagementCreateFormOverridesProps = {
    EngagementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    client?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    gptResponse?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EngagementCreateFormProps = React.PropsWithChildren<{
    overrides?: EngagementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EngagementCreateFormInputValues) => EngagementCreateFormInputValues;
    onSuccess?: (fields: EngagementCreateFormInputValues) => void;
    onError?: (fields: EngagementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EngagementCreateFormInputValues) => EngagementCreateFormInputValues;
    onValidate?: EngagementCreateFormValidationValues;
} & React.CSSProperties>;
export default function EngagementCreateForm(props: EngagementCreateFormProps): React.ReactElement;
