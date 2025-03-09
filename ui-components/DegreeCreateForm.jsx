/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createDegree } from "./graphql/mutations";
const client = generateClient();
export default function DegreeCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    major: "",
    startYear: "",
    endYear: "",
  };
  const [major, setMajor] = React.useState(initialValues.major);
  const [startYear, setStartYear] = React.useState(initialValues.startYear);
  const [endYear, setEndYear] = React.useState(initialValues.endYear);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMajor(initialValues.major);
    setStartYear(initialValues.startYear);
    setEndYear(initialValues.endYear);
    setErrors({});
  };
  const validations = {
    major: [],
    startYear: [],
    endYear: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          major,
          startYear,
          endYear,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createDegree.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DegreeCreateForm")}
      {...rest}
    >
      <TextField
        label="Major"
        isRequired={false}
        isReadOnly={false}
        value={major}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              major: value,
              startYear,
              endYear,
            };
            const result = onChange(modelFields);
            value = result?.major ?? value;
          }
          if (errors.major?.hasError) {
            runValidationTasks("major", value);
          }
          setMajor(value);
        }}
        onBlur={() => runValidationTasks("major", major)}
        errorMessage={errors.major?.errorMessage}
        hasError={errors.major?.hasError}
        {...getOverrideProps(overrides, "major")}
      ></TextField>
      <TextField
        label="Start year"
        isRequired={false}
        isReadOnly={false}
        value={startYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              major,
              startYear: value,
              endYear,
            };
            const result = onChange(modelFields);
            value = result?.startYear ?? value;
          }
          if (errors.startYear?.hasError) {
            runValidationTasks("startYear", value);
          }
          setStartYear(value);
        }}
        onBlur={() => runValidationTasks("startYear", startYear)}
        errorMessage={errors.startYear?.errorMessage}
        hasError={errors.startYear?.hasError}
        {...getOverrideProps(overrides, "startYear")}
      ></TextField>
      <TextField
        label="End year"
        isRequired={false}
        isReadOnly={false}
        value={endYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              major,
              startYear,
              endYear: value,
            };
            const result = onChange(modelFields);
            value = result?.endYear ?? value;
          }
          if (errors.endYear?.hasError) {
            runValidationTasks("endYear", value);
          }
          setEndYear(value);
        }}
        onBlur={() => runValidationTasks("endYear", endYear)}
        errorMessage={errors.endYear?.errorMessage}
        hasError={errors.endYear?.hasError}
        {...getOverrideProps(overrides, "endYear")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
