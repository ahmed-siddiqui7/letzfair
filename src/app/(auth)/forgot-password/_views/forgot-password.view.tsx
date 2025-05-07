"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgotPassword } from "@/mutation/forgot-password";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import * as Yup from "yup";

const ForgotPasswordView = () => {
  const { data, mutateAsync } = useForgotPassword();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log("forgot-password", values);

      await mutateAsync(values, {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      });
    },
  });

  return (
    <div className="flex flex-wrap min-h-screen">
      <div className="w-1/2 flex items-center align-middle justify-center bg-gradient-to-r from-[#0D4195] to-[#166DFB]">
        <img src="/companylogo.png" alt="" />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-1/2 flex items-center align-middle justify-center relative"
      >
        <Link
          href={"/"}
          className="flex items-center gap-2 text-sm text-gray-600 mb-6 top-10 left-28 absolute "
        >
          <MdOutlineKeyboardBackspace className="text-lg" />
          <p> Back</p>
        </Link>
        <div className=" px-10 py-10 w-2/3 bg-[#F9FAFB]">
          <h1 className="text-2xl mb-2 font-semibold">Forgot Password?</h1>
          <p>Enter the email address associated with your account</p>
          <div className="mt-8 relative">
            <Label htmlFor="email">
              Email<span className="text-rose-400 pl-0">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-2.5 py-5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-rose-400 absolute text-sm">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-[#166DFB] w-full py-3.5 text-white rounded-xl"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordView;
