"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignIn } from "@/app/(auth)/sign-in/_mutation/sign-in";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";
import { useUserContext } from "@/context/user";
import { useUserDetails } from "../_query/user-details";

const SignInView = () => {
  const { isPending, mutateAsync } = useSignIn();
  const router = useRouter();
  const existsToken = hasCookie("accessToken");
  // CUSTOM HOOKS
  // const { user, setuserDetails } = useUserContext();
  // const { data: userDetails, isLoading } = useUserDetails();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      await mutateAsync(values, {
        onSuccess: (data) => {
          if (data) {
            console.log("Sign In", data);
            // setuserDetails(userDetails);
            setCookie("accessToken", data.accessToken);
            router.push("/");
            toast.success("Logged In");
          }
        },
        onError: (error) => {
          toast.error("Invalid Credentials.");
        },
      });
      console.log({ values });
    },
  });

  return (
    <div className="flex flex-wrap md:min-h-screen md:flex-row flex-col">
      <div className="md:w-1/2 w-full  flex items-center align-middle justify-center bg-gradient-to-r from-[#0D4195] to-[#166DFB]">
        <img src="/companylogo.png" alt="" />
      </div>
      <div className="md:w-1/2 w-full flex items-center align-middle justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className=" px-10 py-10 w-2/3 bg-[#F9FAFB]"
        >
          <h1 className="text-2xl mb-2 font-semibold">Sign In</h1>
          <div className="mt-6 relative">
            <Label htmlFor="email">
              Email<span className="text-rose-400 pl-0">*</span>
            </Label>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-2 py-5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disabled={isPending}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs text-rose-400 absolute">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mt-6">
            <Label htmlFor="email">
              Password<span className="text-rose-400">*</span>
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-2 py-5"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              disabled={isPending}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-xs text-rose-400 absolute">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="text-[#4B98FA] border-b border-b-[#4B98FA]"
            >
              Forgot Password ?
            </button>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-[#166DFB] w-full py-3.5 text-white rounded-xl disabled:cursor-not-allowed cursor-pointer disabled:bg-gray-200"
              disabled={formik.isSubmitting && isPending && formik.isValidating}
            >
              {isPending ? (
                <BeatLoader color="#ffffff" size="10px" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInView;
