"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import * as Yup from "yup";

const CreatePasswordView = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
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
          <h1 className="text-2xl mb-2 font-semibold">Create Password</h1>
          <p className=" text-sm">
            Set a strong password and be sure to remember it. This will keep
            your account secure.
          </p>
          <div className="mt-6 relative">
            <Label htmlFor="email">
              Password<span className="text-rose-400">*</span>
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-2 py-5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-rose-400 absolute text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="mt-6 relative">
            <Label htmlFor="email">
              Confirm Password<span className="text-rose-400">*</span>
            </Label>
            <Input
              type="password"
              id="confirmpassword"
              placeholder="confirmpassword"
              className="mt-2 py-5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <div className="text-rose-400 absolute text-sm">
                {formik.errors.confirmpassword}
              </div>
            ) : null}
          </div>
          <div className="mt-12">
            <button
              type="submit"
              className="bg-[#166DFB] w-full py-3.5 text-white rounded-xl"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePasswordView;
