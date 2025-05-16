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

const ImportStringModal = () => {
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
        <button className="border px-4 py-2 rounded-2xl flex items-center gap-1.5 cursor-pointer">
          <span>
            <img src="/import.png" alt="" className="object-cover" />
          </span>
          <span>Import</span>
        </button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle />
        <DialogDescription />
      </DialogHeader>
      <DialogContent className="w-full sm:max-w-[600px] px-6">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-medium">Import Strings</h1>
            <p className="text-gray-400 mt-4 text-sm">
              Upload a CSV file to import strings for your projects. Existing
              strings with the same name will be updated automatically.
            </p>

            {/* stringkey Field */}
            <div className="mt-6">
              <Label className="mb-2 font-normal">
                Upload CSV File <span className="text-rose-400">*</span>
              </Label>
              <div className="mt-2 border-dashed py-12 border-2 bg-gray-100 rounded">
                <div className="px-4 flex flex-col justify-center items-center">
                  <img src="/export.png" alt="" />
                  <div className="flex gap-2 items-center">
                    <h1 className="text-[#166DFB] font-medium text-lg">
                      Click Here
                    </h1>
                    <p>to Upload CSV file</p>
                  </div>
                  <p className="font-normal text-gray-500">
                    Maximum File Size: 5 MB per file
                  </p>
                </div>
              </div>
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
                Import
              </button>
            </div>
          </div>
          <DialogFooter />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ImportStringModal;
