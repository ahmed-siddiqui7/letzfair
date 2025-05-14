import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import CancelModal from "../_modal/CancelModal";
import { useState } from "react";
import AddModalCategory from "../_modal/AddModalCategory";

const CustomPropertyTable = () => {
  const [addNewProperty, setAddNewProperty] = useState({
    selectField: "",
    enterFieldLabel: "",
    enterPlaceHolder: "",
    visibility: {},
  });
  const contracts = [
    {
      name: "Ahmed",
      createdOn: "20-10-2009",
      address: "Karachi",
      noOfManager: "1",
    },
  ];

  return (
    <div>
      <div className="bg-white border rounded-2xl py-2 mb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6 px-6 pt-2">
          <div className="md:w-1/5 relative">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <Input
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border
               border-gray-300 placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="rounded-lg shadow-md p-0">
                <SelectGroup>
                  <SelectItem
                    value="All"
                    className="px-4 py-2 flex items-center gap-2 border-b"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-600 w-4 h-4 rounded"
                    />
                    <span>All</span>
                  </SelectItem>
                  <SelectItem
                    value="User"
                    className="px-4 py-2 flex items-center gap-2 border-b"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-600 w-4 h-4 rounded"
                    />
                    <span>User</span>
                  </SelectItem>
                  <SelectItem
                    value="Admin"
                    className="px-4 py-2 flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-600 w-4 h-4 rounded"
                    />
                    <span>Admin</span>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* ADD NEW PROPERTY */}
            <AddModalCategory />
          </div>
        </div>
        <div className="overflow-x-auto border">
          <table className="w-full text-sm text-left py-20">
            <thead className="bg-gray-100 text-gray-500 ">
              <tr>
                <th className="px-4 py-5 font-medium ">Property Name</th>
                <th className="px-4 py-5 font-medium">Property Type</th>
                <th className="px-4 py-5 font-medium">Visibility</th>
                <th className="px-4 py-5 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {contracts.length === 0 ? (
                <tr>
                  <td colSpan={4}>
                    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
                      <img
                        src="/noproject.png"
                        alt="No contracts"
                        className="w-90 h-70 mb-4 object-cover"
                      />
                      <h1 className="text-xl font-semibold">
                        No Custom Properties Created Yet
                      </h1>
                      <p className="text-wrap">
                        Create custom properties to tailor this entity to your
                        project needs. Start by adding fields that enhance
                        flexibility and control.
                      </p>
                      <button className="flex items-center">
                        <span>
                          <FiPlus />
                        </span>
                        <span>Add Custom Property</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                contracts.map((contract, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium flex items-center gap-2">
                      <input type="checkbox" />
                      {contract.name}
                    </td>
                    <td className="px-4 py-4">{contract.createdOn}</td>
                    <td className="px-4 py-4">{contract.noOfManager}</td>
                    <td className="px-4 py-4 flex space-x-4 justify-center">
                      <button>
                        <img
                          src="/edit.png"
                          alt="edit"
                          className="cursor-pointer"
                        />
                      </button>
                      <button>
                        <img
                          src="/trash.png"
                          alt="trash"
                          className="cursor-pointer"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row sm:flex-row items-center justify-end px-2 py-4 gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select className=" rounded-md px-2 py-1 text-sm">
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <span>1–5 of 10</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-3">
        <CancelModal />
        <button className="px-10 py-2 bg-[#166DFB] text-white rounded cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomPropertyTable;
