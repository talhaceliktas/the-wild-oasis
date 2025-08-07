import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow.jsx";
import Button from "../../ui/Button.jsx";
import Input from "../../ui/Input.jsx";
import { countries } from "../../data/countries-data.js";
import Image from "../../ui/Image.jsx";
import Select from "../../ui/Select.jsx";
import { useState } from "react";
import { useCreateUser } from "./useCreateGuest.js";

const CreateBookingForm = () => {
  const [countryValue, setCountryValue] = useState("af");

  const { handleSubmit, register, formState, reset } = useForm();
  const { errors } = formState;

  const { createUser, isPending } = useCreateUser();

  function onSubmit(data) {
    const countryName = countries.find(
      (country) => country.value === countryValue
    ).label;

    const { fullName, email, nationalID } = data;

    const userData = {
      fullName,
      email,
      nationalID,
      countryFlag: `https://flagcdn.com/${countryValue}.svg`,
      nationality: countryName,
    };

    createUser(userData, {
      onSuccess: () => reset(),
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Full name" error={errors?.fullName?.message}>
          <Input
            type="text"
            id="fullName"
            {...register("fullName", { required: "This field is requied" })}
            disabled={isPending}
          />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is requied",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email adress",
              },
            })}
            disabled={isPending}
          />
        </FormRow>

        <FormRow label="National ID" error={errors?.nationalID?.message}>
          <Input
            type="number"
            id="nationalID"
            {...register("nationalID", {
              required: "This field is requied",
            })}
            disabled={isPending}
          />
        </FormRow>

        <FormRow label="Nationality" error={errors?.nationality?.message}>
          <Select
            options={countries}
            {...register("nationality", { required: "This field is required" })}
            disabled={isPending}
            onChange={(e) => {
              const selected = e.target.value;
              setCountryValue(selected);
            }}
          />
        </FormRow>

        <FormRow label="Country Flag">
          <Image
            src={`https://flagcdn.com/${countryValue}.svg`}
            width={80}
            height={60}
            alt="Country flag"
          />
        </FormRow>

        <FormRow>
          <Button variation="secondary" type="reset" disabled={isPending}>
            Cancel
          </Button>
          <Button disabled={isPending}>Create new Guest</Button>
        </FormRow>
      </form>
    </>
  );
};

export default CreateBookingForm;
