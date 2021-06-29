import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import tw from "twin.macro";

import { CONTACT_US_IDS } from "src/constants/refIds";

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

export function ContactPage() {
  const { t } = useTranslation();
  const { toastSuccess, toastError } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const watchMessage = watch("message", null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const status = await onSubmittingToZendesk(data);
    status === 201
      ? toastSuccess(
          t("contactPage.thank_you"),
          t("contactPage.create_success")
        )
      : toastError(t("contactPage.error"), t("contactPage.create_error"));
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
      <Text bold tw="text-lg">
        {t("contactPage.contact_us")}
      </Text>
      <Card tw="block mt-4 p-6">
        <Grid cols="2">
          <Field tw="mt-0">
            <Label isRequired>{t("contactPage.first_name")}</Label>
            <Input
              type="text"
              {...register("firstName", { required: true })}
              placeholder="First Name"
            />
            {errors.firstName?.type === "required" && (
              <FormError msg="First name is required" />
            )}
          </Field>
          <Field tw="mt-0">
            <Label isRequired>{t("contactPage.last_name")}</Label>
            <Input
              type="text"
              {...register("lastName", { required: true })}
              placeholder="Last Name"
            />
            {errors.lastName?.type === "required" && (
              <FormError msg="Last name is required" />
            )}
          </Field>
        </Grid>

        <Field>
          <Label isRequired>Email</Label>
          <Input
            type="text"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
          />
          {(errors.email?.type === "pattern" ||
            errors.email?.type === "required") && (
            <FormError msg="Please enter a valid email address" />
          )}
        </Field>

        <Field>
          <Label isRequired>Your Message</Label>
          <TextArea
            {...register("message", { required: true, maxLength: 300 })}
            placeholder="Your Message"
            rows={10}
          />
          <p tw="block text-sm font-medium text-textSecondary">
            {watchMessage?.length || 0} of 300 max characters
          </p>
          {errors.message?.type === "required" && (
            <FormError msg="Your message is required" />
          )}

          {(errors.message?.type === "maxLength" ||
            watchMessage?.length > 300) && (
            <FormError msg="Your message must be maximum 300 characters" />
          )}
        </Field>

        <Field>
          <Button
            id={CONTACT_US_IDS.submit}
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            tw="bg-gradient-to-r from-primary to-secondary text-white text-base px-8"
          >
            Submit
          </Button>
        </Field>
      </Card>
    </>
  );
}

const Input = tw(InputBase)`mt-2 w-full h-12`;
