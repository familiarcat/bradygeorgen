/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSummary } from "./graphql/mutations";
const client = generateClient();
export default function SummaryCreateForm(props) {
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
    goals: "",
    persona: "",
    url: "",
    headshot: "",
    gptResponse: "",
    resume: "",
  };
  const [goals, setGoals] = React.useState(initialValues.goals);
  const [persona, setPersona] = React.useState(initialValues.persona);
  const [url, setUrl] = React.useState(initialValues.url);
  const [headshot, setHeadshot] = React.useState(initialValues.headshot);
  const [gptResponse, setGptResponse] = React.useState(
    initialValues.gptResponse
  );
  const [resume, setResume] = React.useState(initialValues.resume);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGoals(initialValues.goals);
    setPersona(initialValues.persona);
    setUrl(initialValues.url);
    setHeadshot(initialValues.headshot);
    setGptResponse(initialValues.gptResponse);
    setResume(initialValues.resume);
    setErrors({});
  };
  const validations = {
    goals: [],
    persona: [],
    url: [],
    headshot: [],
    gptResponse: [],
    resume: [],
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
          goals,
          persona,
          url,
          headshot,
          gptResponse,
          resume,
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
            query: createSummary.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "SummaryCreateForm")}
      {...rest}
    >
      <TextField
        label="Goals"
        isRequired={false}
        isReadOnly={false}
        value={goals}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goals: value,
              persona,
              url,
              headshot,
              gptResponse,
              resume,
            };
            const result = onChange(modelFields);
            value = result?.goals ?? value;
          }
          if (errors.goals?.hasError) {
            runValidationTasks("goals", value);
          }
          setGoals(value);
        }}
        onBlur={() => runValidationTasks("goals", goals)}
        errorMessage={errors.goals?.errorMessage}
        hasError={errors.goals?.hasError}
        {...getOverrideProps(overrides, "goals")}
      ></TextField>
      <TextField
        label="Persona"
        isRequired={false}
        isReadOnly={false}
        value={persona}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goals,
              persona: value,
              url,
              headshot,
              gptResponse,
              resume,
            };
            const result = onChange(modelFields);
            value = result?.persona ?? value;
          }
          if (errors.persona?.hasError) {
            runValidationTasks("persona", value);
          }
          setPersona(value);
        }}
        onBlur={() => runValidationTasks("persona", persona)}
        errorMessage={errors.persona?.errorMessage}
        hasError={errors.persona?.hasError}
        {...getOverrideProps(overrides, "persona")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goals,
              persona,
              url: value,
              headshot,
              gptResponse,
              resume,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Headshot"
        isRequired={false}
        isReadOnly={false}
        value={headshot}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goals,
              persona,
              url,
              headshot: value,
              gptResponse,
              resume,
            };
            const result = onChange(modelFields);
            value = result?.headshot ?? value;
          }
          if (errors.headshot?.hasError) {
            runValidationTasks("headshot", value);
          }
          setHeadshot(value);
        }}
        onBlur={() => runValidationTasks("headshot", headshot)}
        errorMessage={errors.headshot?.errorMessage}
        hasError={errors.headshot?.hasError}
        {...getOverrideProps(overrides, "headshot")}
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
              goals,
              persona,
              url,
              headshot,
              gptResponse: value,
              resume,
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
      <TextField
        label="Resume"
        isRequired={false}
        isReadOnly={false}
        value={resume}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goals,
              persona,
              url,
              headshot,
              gptResponse,
              resume: value,
            };
            const result = onChange(modelFields);
            value = result?.resume ?? value;
          }
          if (errors.resume?.hasError) {
            runValidationTasks("resume", value);
          }
          setResume(value);
        }}
        onBlur={() => runValidationTasks("resume", resume)}
        errorMessage={errors.resume?.errorMessage}
        hasError={errors.resume?.hasError}
        {...getOverrideProps(overrides, "resume")}
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
