import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { FiPlus } from "react-icons/fi";

const AddModalCategory = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center space-x-1 bg-[#166DFB] text-white px-4 py-1.5 rounded cursor-pointer">
          <span>
            <FiPlus />
          </span>
          <span>Add Custom Property</span>
        </button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <DialogContent className="sm:max-w-[500px] px-4">
        <div className="flex flex-col align-middle">
          <h1 className="mt-4 text-3xl">Add New Property</h1>
          <p className="text-gray-400 text-wrap mt-4">
            You’ve made changes to custom properties that haven’t been yet. If
            you leave now, all unsaved changes will be lost.
          </p>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="px-20 py-4 border-[#166DFB] border text-[#166DFB] rounded cursor-pointer">
              Discard
            </button>
            <button className="px-16 py-4 bg-[#166DFB] text-white rounded cursor-pointer">
              Stay On page
            </button>
          </div>
        </div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddModalCategory;
