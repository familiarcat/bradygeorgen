import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { Experience } from "./graphql/types";
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
export declare type ExperienceUpdateFormInputValues = {};
export declare type ExperienceUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExperienceUpdateFormOverridesProps = {
    ExperienceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ExperienceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExperienceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    experience?: Experience;
    onSubmit?: (fields: ExperienceUpdateFormInputValues) => ExperienceUpdateFormInputValues;
    onSuccess?: (fields: ExperienceUpdateFormInputValues) => void;
    onError?: (fields: ExperienceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExperienceUpdateFormInputValues) => ExperienceUpdateFormInputValues;
    onValidate?: ExperienceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExperienceUpdateForm(props: ExperienceUpdateFormProps): React.ReactElement;
