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
import { FiPlus } from "react-icons/fi";
import { toast } from "sonner";
import * as Yup from "yup";
import {
  CustomProjectType,
  fieldType,
  type,
  useCustomProject,
  visibility,
} from "../_mutation/custom-property";

const AddModalCategory = () => {
  const { mutateAsync } = useCustomProject();

  const schema = Yup.object().shape({
    selectField: Yup.string().required("Field is required"),
    fieldlabel: Yup.string().required("Label is required"),
    jobtitle: Yup.string().required("Placeholder is required"),
    visibility: Yup.string().required("Visibility is required"),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      selectField: "",
      fieldlabel: "",
      jobtitle: "",
      visibility: "",
      type: "",
    },

    onSubmit: async (values) => {
      const payload: CustomProjectType = {
        label: "Name",
        placeholder: "Enter name",
        fieldType: values.selectField as fieldType,
        visibility: values.visibility as visibility,
        type: values.visibility as type,
      };

      try {
        await mutateAsync(payload);
        toast.success("Data Saved...");
      } catch (error) {
        toast.error("API Error: " + error || "Unknown error");
      }
      formik.resetForm();
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center space-x-1 bg-[#166DFB] text-white px-4 py-1.5 rounded cursor-pointer">
          <FiPlus />
          <span>Add Custom Property</span>
        </button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle />
        <DialogDescription />
      </DialogHeader>

      <DialogContent className="w-full sm:max-w-[500px] px-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <h1 className="mt-4 text-2xl sm:text-3xl font-medium">
              Add New Property
            </h1>
            <p className="text-gray-400 mt-4 text-sm">
              You’ve made changes to custom properties that haven’t been saved
              yet. If you leave now, all unsaved changes will be lost.
            </p>

            {/* Select Field */}
            <div className="mt-6">
              <Label className="mb-2 font-normal">
                Select Field <span className="text-rose-400">*</span>
              </Label>
              <Select
                name="selectField"
                onValueChange={(val) =>
                  formik.setFieldValue("selectField", val)
                }
              >
                <SelectTrigger className="w-full py-6">
                  <SelectValue placeholder="Select Field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Short Text Field </SelectLabel>
                    <SelectItem value="long_text">Long Text Field</SelectItem>
                    <SelectItem value="gallery">Gallery</SelectItem>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="file">File</SelectItem>
                    <SelectItem value="link">Link</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="h-2 mt-0.5">
                {" "}
                {/* Fixed height container */}
                {formik.touched.selectField && formik.errors.selectField && (
                  <div className="text-rose-400 text-xs">
                    {formik.errors.selectField}
                  </div>
                )}
              </div>
            </div>

            {/* Field Label */}
            <div className="mt-6">
              <Label className="mb-2 font-normal">
                Enter Field Label <span className="text-rose-400">*</span>
              </Label>
              <Input
                className="w-full py-6"
                placeholder="Job Title"
                name="fieldlabel"
                value={formik.values.fieldlabel}
                onChange={formik.handleChange}
              />
              <div className="h-2 mt-0.5">
                {formik.touched.fieldlabel && formik.errors.fieldlabel && (
                  <div className="text-rose-400 text-xs">
                    {formik.errors.fieldlabel}
                  </div>
                )}
              </div>
            </div>

            {/* Placeholder */}
            <div className="mt-6">
              <Label className="mb-2 font-normal">
                Enter Placeholder <span className="text-rose-400">*</span>
              </Label>
              <Input
                className="w-full py-6"
                placeholder="Job Title"
                name="jobtitle"
                value={formik.values.jobtitle}
                onChange={formik.handleChange}
              />
              <div className="h-2 mt-0.5">
                {formik.touched.jobtitle && formik.errors.jobtitle && (
                  <div className="text-rose-400 text-xs">
                    {formik.errors.jobtitle}
                  </div>
                )}
              </div>
            </div>

            {/* Visibility */}
            <div className="mt-6">
              <Label className="font-normal">
                Visibility <span className="text-rose-400">*</span>
              </Label>
              <div className="flex flex-col sm:flex-row mt-4 gap-3">
                <div
                  className={`flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded shadow w-full sm:w-1/2 ${
                    formik.values.visibility === "public" &&
                    "border border-blue-400"
                  }`}
                >
                  <input
                    type="radio"
                    value="public"
                    id="public"
                    name="visibility"
                    checked={formik.values.visibility === "public"}
                    onChange={formik.handleChange}
                  />
                  <Label htmlFor="public" className="text-xs font-normal">
                    Public (Visible to all users)
                  </Label>
                </div>
                <div
                  className={`flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded shadow w-full sm:w-1/2 ${
                    formik.values.visibility === "private" &&
                    "border border-blue-400"
                  }`}
                >
                  <input
                    type="radio"
                    value="private"
                    id="private"
                    name="visibility"
                    checked={formik.values.visibility === "private"}
                    onChange={formik.handleChange}
                  />
                  <Label htmlFor="private" className="text-xs font-normal">
                    Private (Visible only to the admin)
                  </Label>
                </div>
              </div>
              <div className="h-2 mt-0.5">
                {formik.touched.visibility && formik.errors.visibility && (
                  <div className="text-rose-400 text-xs">
                    {formik.errors.visibility}
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
                Add Property
              </button>
            </div>
          </div>
          <DialogFooter />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddModalCategory;
