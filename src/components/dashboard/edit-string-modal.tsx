import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormik } from "formik";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { toast } from "sonner";
import * as Yup from "yup";

const EditStringModal = () => {
  const schema = Yup.object().shape({
    stringkey: Yup.string().required("stringkey is required"),
    english: Yup.string().required("english is required"),
    french: Yup.string().required("french is required"),
    spanish: Yup.string().required("spanish is required"),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      stringkey: "",
      english: "",
      french: "",
      spanish: "",
    },

    onSubmit: async (values) => {
      try {
        toast.success("Succes");
        console.log("Edit modal string", values);
      } catch (error) {
        toast.error("API Error: " + error || "Unknown error");
      }
      formik.resetForm();
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <FaRegEdit className="rounded size-5 cursor-pointer" />
        </button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle />
        <DialogDescription />
      </DialogHeader>
      <DialogContent className="w-full sm:max-w-[600px] px-8">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-medium">
              Edit String Translation
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Assign roles and projects to your admin. Admins will receive an
              invitation email to join.
            </p>

            {/* stringkey Field */}
            <div className="mt-6">
              <Label className="mb-2 font-normal">
                String Key <span className="text-rose-400">*</span>
              </Label>
              <Input
                className="w-full py-6"
                placeholder="home_title"
                name="stringkey"
                value={formik.values.stringkey}
                onChange={formik.handleChange}
              />
              <div className="h-2 mt-0.5">
                {" "}
                {/* Fixed height container */}
                {formik.touched.stringkey && formik.errors.stringkey && (
                  <div className="text-rose-400 text-xs">
                    {formik.errors.stringkey}
                  </div>
                )}
              </div>
            </div>

            {/* english */}
            <div className="mt-6">
              <Label className="mb-2 font-normal">
                English (EN) <span className="text-rose-400">*</span>
              </Label>
              <Input
                className="w-full py-6"
                placeholder="Home"
                name="english"
                value={formik.values.english}
                onChange={formik.handleChange}
              />
              <div className="h-2 mt-0.5">
                {formik.touched.english && formik.errors.english && (
                  <div className="text-rose-400 text-xs">
                    {formik.errors.english}
                  </div>
                )}
              </div>
            </div>

            {/* French (FR) */}
            <div className="mt-6">
              <Label className="mb-2 font-normal">
                French (FR) <span className="text-rose-400">*</span>
              </Label>
              <Input
                className="w-full py-6"
                placeholder="Accrual"
                name="french"
                value={formik.values.french}
                onChange={formik.handleChange}
              />
              <div className="h-2 mt-0.5">
                {formik.touched.french && formik.errors.french && (
                  <div className="text-rose-400 text-xs">
                    {formik.errors.french}
                  </div>
                )}
              </div>
            </div>

            {/* Spanish (ES) */}
            <div className="mt-6">
              <Label className="mb-2 font-normal">
                Spanish (ES) <span className="text-rose-400">*</span>
              </Label>
              <Input
                className="w-full py-6"
                placeholder="Perfil"
                name="spanish"
                value={formik.values.spanish}
                onChange={formik.handleChange}
              />
              <div className="h-2 mt-0.5">
                {formik.touched.spanish && formik.errors.spanish && (
                  <div className="text-rose-400 text-xs">
                    {formik.errors.spanish}
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end mt-6 gap-2">
              <button
                type="button"
                className="w-full sm:w-auto px-4 py-2 border-[#166DFB] border text-[#166DFB] rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-[#166DFB] text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
          <DialogFooter />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditStringModal;
