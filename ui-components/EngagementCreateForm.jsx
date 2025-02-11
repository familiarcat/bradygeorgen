/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createEngagement } from "./graphql/mutations";
const client = generateClient();
export default function EngagementCreateForm(props) {
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
    client: "",
    startDate: "",
    endDate: "",
    gptResponse: "",
  };
  const [client, setClient] = React.useState(initialValues.client);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [gptResponse, setGptResponse] = React.useState(
    initialValues.gptResponse
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setClient(initialValues.client);
    setStartDate(initialValues.startDate);
    setEndDate(initialValues.endDate);
    setGptResponse(initialValues.gptResponse);
    setErrors({});
  };
  const validations = {
    client: [],
    startDate: [],
    endDate: [],
    gptResponse: [],
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
          client,
          startDate,
          endDate,
          gptResponse,
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
            query: createEngagement.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "EngagementCreateForm")}
      {...rest}
    >
      <TextField
        label="Client"
        isRequired={false}
        isReadOnly={false}
        value={client}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client: value,
              startDate,
              endDate,
              gptResponse,
            };
            const result = onChange(modelFields);
            value = result?.client ?? value;
          }
          if (errors.client?.hasError) {
            runValidationTasks("client", value);
          }
          setClient(value);
        }}
        onBlur={() => runValidationTasks("client", client)}
        errorMessage={errors.client?.errorMessage}
        hasError={errors.client?.hasError}
        {...getOverrideProps(overrides, "client")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client,
              startDate: value,
              endDate,
              gptResponse,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        value={endDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client,
              startDate,
              endDate: value,
              gptResponse,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
      ></TextField>
      <TextField
        label="Gpt response"
        isRequired={false}
        isReadOnly={false}
        value={gptResponse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              client,
              startDate,
              endDate,
              gptResponse: value,
            };
            const result = onChange(modelFields);
            value = result?.gptResponse ?? value;
          }
          if (errors.gptResponse?.hasError) {
            runValidationTasks("gptResponse", value);
          }
          setGptResponse(value);
        }}
        onBlur={() => runValidationTasks("gptResponse", gptResponse)}
        errorMessage={errors.gptResponse?.errorMessage}
        hasError={errors.gptResponse?.hasError}
        {...getOverrideProps(overrides, "gptResponse")}
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
