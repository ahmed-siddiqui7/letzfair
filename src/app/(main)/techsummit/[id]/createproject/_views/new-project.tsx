"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon, ImagePlus } from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { useNewProject } from "@/mutation/new-project";
import axios from "axios";

const NewProject = () => {
  const { data, mutateAsync } = useNewProject();
  const params = useParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [bannerFile, setBannerFile] = useState<File | string>();

  const router = useRouter();
  const contractId = Number(params.id);
  const projectId = Number(params.pid);

  const formik = useFormik({
    initialValues: {
      projectName: "",
      description: "",
      location: "",
    },
    validationSchema: Yup.object({
      projectName: Yup.string().required("Project name is required"),
      description: Yup.string().required("Description is required"),
      location: Yup.string().required("Location is required"),
    }),
    onSubmit: async (values) => {
      if (!startDate || !endDate || !bannerFile) {
        toast.error("Please fill all fields including dates and banner.");
        return;
      }

      try {
        const payload = {
          name: values.projectName,
          description: values.description,
          location: values.location,
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
          banner_image_url: bannerFile,
        };

        await mutateAsync(payload);
        toast.success("Data saved");
        router.push(`/techsummit/${contractId}/createproject`);
        console.log("values:", { values, bannerFile, startDate, endDate });
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Failed to save data. Please try again.");
      }
    },
  });

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleBannerChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("files", file);
      try {
        const res = await axios.post(
          "https://staging-api.flowbills.com/api/v1/upload/files",
          formData
        );
        console.log(res);
        const imageUrl = res.data.urls[0];
        console.log("imageUrl", imageUrl);
        setBannerFile(imageUrl);
        toast.success("Image uploaded");
      } catch (error: any) {
        console.error("Upload failed", error.response?.data || error.message);
        toast.error("Banner upload failed");
      }
    }
  };

  return (
    <div className="px-4 sm:px-10 lg:px-32">
      <div className="mt-10">
        <h1 className="text-2xl sm:text-3xl font-medium">Create New Project</h1>
        <p className="text-sm sm:text-base text-[#666566] mt-1">
          Begin by adding the core details of your project. These details help
          attendees understand your project at a glance.
        </p>
      </div>

      <form className="mt-8 mb-10 space-y-8" onSubmit={formik.handleSubmit}>
        {/* Project Name */}
        <div>
          <Label htmlFor="projectName">Project Name</Label>
          <Input
            id="projectName"
            name="projectName"
            placeholder="Eg.. Annual"
            className="py-6 mt-3"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.projectName && formik.errors.projectName && (
            <p className="text-xs text-red-500 mt-1">
              {formik.errors.projectName}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Project Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Type your message here."
            className="py-6 mt-3"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-xs text-red-500 mt-1">
              {formik.errors.description}
            </p>
          )}
        </div>

        {/* Dates */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Start Date */}
          <div className="w-full sm:w-1/2">
            <Label className="mb-2">Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal py-6 bg-transparent",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? startDate.toLocaleDateString() : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* End Date */}
          <div className="w-full sm:w-1/2">
            <Label className="mb-2">End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal py-6 bg-transparent",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? endDate.toLocaleDateString() : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            placeholder="Eg.. Delhi"
            className="py-6 mt-3"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.location && formik.errors.location && (
            <p className="text-xs text-red-500 mt-1">
              {formik.errors.location}
            </p>
          )}
        </div>

        {/* Banner Upload */}
        <div>
          <Label className="mb-2 block">Banner</Label>
          <div
            onClick={handleClick}
            className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-md h-48 text-center p-4 hover:bg-gray-50 transition-colors"
          >
            {bannerFile ? (
              <img src={bannerFile} alt="edit image" className="w-10" />
            ) : (
              <>
                <ImagePlus className="text-blue-500 mb-2 h-6 w-6" />
                <p className="text-sm">
                  <span className="text-blue-600 font-medium">Click here</span>{" "}
                  to upload Banner
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  The format must be a png/jpg format.
                  <br />
                  (Max. File size: 5 MB)
                </p>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  className="hidden"
                  ref={inputRef}
                  onChange={handleBannerChange}
                />
              </>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 mb-20 sm:mb-28 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="button"
            className="border border-blue-400 px-4 py-2 rounded text-blue-400 w-full sm:w-auto cursor-pointer"
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="border bg-blue-400 px-4 py-2 rounded text-white w-full sm:w-auto cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProject;
