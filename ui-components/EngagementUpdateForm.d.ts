import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Engagement } from "./graphql/types";
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
export declare type EngagementUpdateFormInputValues = {
    client?: string;
    startDate?: string;
    endDate?: string;
    gptResponse?: string;
};
export declare type EngagementUpdateFormValidationValues = {
    client?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    gptResponse?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EngagementUpdateFormOverridesProps = {
    EngagementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    client?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    gptResponse?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EngagementUpdateFormProps = React.PropsWithChildren<{
    overrides?: EngagementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    engagement?: Engagement;
    onSubmit?: (fields: EngagementUpdateFormInputValues) => EngagementUpdateFormInputValues;
    onSuccess?: (fields: EngagementUpdateFormInputValues) => void;
    onError?: (fields: EngagementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EngagementUpdateFormInputValues) => EngagementUpdateFormInputValues;
    onValidate?: EngagementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EngagementUpdateForm(props: EngagementUpdateFormProps): React.ReactElement;
