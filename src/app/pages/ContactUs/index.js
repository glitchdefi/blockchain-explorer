import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import tw, { styled, css, theme } from "twin.macro";

import { CONTACT_US_IDS } from "src/constants/refIds";

import { Spinner } from "src/app/components/LoadingIndicator/Spinner";
import { Card } from "src/app/components/Card";
import { Text } from "src/app/components/Text";
import { Input as InputBase } from "src/app/components/Input";
import { Grid } from "src/app/components/Grid";
import { Button } from "src/app/components/Button";
import { Label } from "./components/Label";
import { TextArea } from "./components/TextArea";
import { Field } from "./components/Field";
import { FormError } from "./components/FormError";
import { onSubmittingToZendesk } from "./hooks";
import { useToast } from "src/hooks/useToast";
import {
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from "src/app/components/Svg/Icons";
import { useTheme } from "src/hooks/useTheme";
import { LinkExternal } from "src/app/components/Link/LinkExternal";

export function ContactPage() {
  const history = useHistory();
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { toastSuccess, toastError } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const watchFirstname = watch("firstName", null);
  const watchLastName = watch("lastName", null);
  const watchEmail = watch("email", null);
  const watchMessage = watch("message", null);

  const isEnableSubmit =
    watchFirstname && watchLastName && watchEmail && watchMessage;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const status = await onSubmittingToZendesk(data);

    if (status === 201) {
      toastSuccess(t("contactPage.thank_you"), t("contactPage.create_success"));
      history.push("/");
    } else {
      toastError(t("contactPage.error"), t("contactPage.create_error"));
    }

    setIsSubmitting(false);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Card tw="block mt-4 p-0">
        <Grid cols="3" tw="gap-0">
          <div
            tw="bg-color2 p-8 col-span-2 lg:col-span-1"
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text>FOLLOW US ON</Text>

            <div>
              <Grid cols="2" tw="gap-8 mt-8 lg:mt-0">
                <LinkExternal
                  tw="grid"
                  href="https://medium.com/glitchfinance"
                  target="_blank"
                >
                  <Button shadow tw="p-0">
                    <div tw="bg-color1 dark:bg-color2 p-8">
                      <MediumIcon />
                      <Text tw="mt-4">Medium</Text>
                    </div>
                  </Button>
                </LinkExternal>
              </Grid>

              <Grid cols="2" tw="gap-8 mt-8">
                <LinkExternal
                  tw="grid"
                  href="https://t.me/glitchprotocol"
                  target="_blank"
                >
                  <Button shadow tw="p-0">
                    <div tw="bg-color1 dark:bg-color2 p-8">
                      <TelegramIcon />
                      <Text tw="mt-4">Telegram</Text>
                    </div>
                  </Button>
                </LinkExternal>

                <LinkExternal
                  tw="grid"
                  href="https://twitter.com/glitchprotocol"
                  target="_blank"
                >
                  <Button shadow tw="p-0">
                    <div tw="bg-color1 dark:bg-color2 p-8">
                      <TwitterIcon />
                      <Text tw="mt-4">Twitter</Text>
                    </div>
                  </Button>
                </LinkExternal>
              </Grid>
            </div>
          </div>

          <div tw="col-span-2 p-10">
            <Text bold style={{ fontSize: 24 }}>
              {t("contactPage.contact_us")}
            </Text>
            <Grid cols="2" tw="mt-8">
              <Field tw="mt-0">
                <Label>{t("contactPage.first_name")}</Label>
                <Input
                  type="text"
                  hasError={errors.firstName?.type === "required"}
                  {...register("firstName", { required: true })}
                  placeholder="Enter first name"
                />
                {errors.firstName?.type === "required" && (
                  <FormError msg="First name is required" />
                )}
              </Field>
              <Field tw="mt-0">
                <Label>{t("contactPage.last_name")}</Label>
                <Input
                  type="text"
                  hasError={errors.lastName?.type === "required"}
                  {...register("lastName", { required: true })}
                  placeholder="Enter last name"
                />
                {errors.lastName?.type === "required" && (
                  <FormError msg="Last name is required" />
                )}
              </Field>
            </Grid>

            <Field>
              <Label>Email</Label>
              <Input
                type="text"
                hasError={
                  errors.email?.type === "pattern" ||
                  errors.email?.type === "required"
                }
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Enter email"
              />
              {(errors.email?.type === "pattern" ||
                errors.email?.type === "required") && (
                <FormError msg="Invalid email" />
              )}
            </Field>

            <Field>
              <Label>Message</Label>
              <TextArea
                hasError={errors.message?.type === "required"}
                {...register("message", { required: true })}
                placeholder="Enter your message here..."
                rows={10}
              />
              {errors.message?.type === "required" && (
                <FormError msg="Message is required" />
              )}
            </Field>

            <Field>
              <Button
                shadow={isEnableSubmit}
                id={CONTACT_US_IDS.submit}
                onClick={handleSubmit(onSubmit)}
                tw="p-0"
                disabled={!isEnableSubmit}
              >
                <div
                  style={{
                    opacity: isEnableSubmit ? 1 : 0.5,
                    backgroundColor:
                      !isEnableSubmit && !isDark && theme`colors.color2`,
                  }}
                  tw="bg-color1 dark:bg-color7 py-3 px-8"
                >
                  {isSubmitting ? (
                    <Spinner
                      tw="mr-2"
                      stroke={
                        isDark ? theme`colors.color1` : theme`colors.color7`
                      }
                    />
                  ) : (
                    <Text bold tw="text-color7 dark:text-color1">
                      Submit
                    </Text>
                  )}
                </div>
              </Button>
            </Field>
          </div>
        </Grid>
      </Card>
    </>
  );
}

const Input = styled(InputBase)(({ hasError }) => [
  tw`mt-2 w-full h-12`,
  hasError &&
    css`
      border: 1px solid ${theme`colors.fail`};
    `,
]);
