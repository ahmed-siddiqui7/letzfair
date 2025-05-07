import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const OtpVerificationView = () => {
  return (
    <div className="flex flex-wrap min-h-screen">
      <div className="w-1/2 flex items-center align-middle justify-center bg-gradient-to-r from-[#0D4195] to-[#166DFB]">
        <img src="/companylogo.png" alt="" />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center relative">
        {/* Back Button */}
        <Link
          href={"/"}
          className="flex items-center gap-2 text-sm text-gray-600 mb-6 top-10 left-28 absolute "
        >
          <MdOutlineKeyboardBackspace className="text-lg" />
          <p> Back</p>
        </Link>
        <div className="px-10 py-10 w-2/3 bg-[#F9FAFB] self-center">
          <h1 className="text-2xl mb-2 font-semibold">OTP Verification</h1>
          <p className="text-sm">
            Enter the 6 digit code sent to{" "}
            <span className="font-semibold">johndo@example.com</span>
          </p>
          <div className="mt-6">
            <InputOTP maxLength={6}>
              <InputOTPGroup className="flex flex-wrap gap-2 justify-center w-full">
                {[...Array(6)].map((_, i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="w-[60px] h-[50px] bg-white rounded border-0"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="mt-4 flex justify-center gap-1">
            <span className="font-semibold">Didn’t receive code?</span>
            <button className="text-[#4B98FA] border-b border-b-[#4B98FA]">
              Resend Code
            </button>
          </div>
          <div className="mt-12">
            <button className="bg-[#166DFB] w-full py-3.5 text-white rounded-xl">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationView;
