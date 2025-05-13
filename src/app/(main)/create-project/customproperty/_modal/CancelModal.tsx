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

const CancelModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-10 py-2 border-[#166DFB] border text-[#166DFB] rounded cursor-pointer">
          Cancel
        </button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <DialogContent className="sm:max-w-[500px] px-4">
        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-center items-center align-middle">
            <img src="/tick-circle.png" alt="" />
            <h1 className="mt-4 text-3xl">Discard Changes?</h1>
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
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelModal;
