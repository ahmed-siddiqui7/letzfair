import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const ContractFeatures = () => {
  const [checkedList, setcheckedList] = useState({
    Agenda_System: false,
    Private_Chat: false,
    Call_One_to_One: false,
    Matchmaking_Algorithm: false,
    Video_Call_Support: false,
    AI_Based_Assistance: false,
    Enable_Badge: false,
    Enable_QR_Badge_Scan: false,
    Email_and_Survey_System: false,
    Enable_Social_Wall: false,
    Statistics: false,
    Indoor_Map_Integration: false,
  });

  console.log(checkedList);

  return (
    <form className="mt-10">
      {/* section one */}
      <div>
        <h1 className="text-xl font-medium">Project Agenda/Meetings</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Agenda System</h2>
              <p className="text-gray-500">
                Enable agenda/meeting systems for your project.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Agenda_System}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Agenda_System: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* section two */}
      <div className="mt-6 mb-6">
        <h1 className="text-xl font-medium">Networking Features</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Private Chat </h2>
              <p className="text-gray-500">
                Enable direct messaging between attendees.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Private_Chat}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Private_Chat: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-4 px-6">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Call One-to-One</h2>
              <p className="text-gray-500">Provide voice calling options</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Call_One_to_One}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Call_One_to_One: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-4 px-6">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Matchmaking Algorithm</h2>
              <p className="text-gray-500">
                Suggest relevant connections based on attendee preferences
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Matchmaking_Algorithm}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Matchmaking_Algorithm: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-4 px-6">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Video Call Support </h2>
              <p className="text-gray-500">
                Allow video call for networking and sessions
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Video_Call_Support}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Video_Call_Support: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* section three */}
      <div className="mt-6 mb-6">
        <h1 className="text-xl font-medium">User Support and Assistance</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">AI Based Assistance</h2>
              <p className="text-gray-500">
                Enable automated AI-based assistance support for users
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.AI_Based_Assistance}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    AI_Based_Assistance: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* section four */}
      <div className="mt-6 mb-6">
        <h1 className="text-xl font-medium">Badge Feature</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Enable Badge</h2>
              <p className="text-gray-500">
                Generate digital or printable badges for participants
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Enable_Badge}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Enable_Badge: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-4 px-6">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Enable QR Badge Scan </h2>
              <p className="text-gray-500">
                Allow badge scanning for attendance or verification
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Enable_QR_Badge_Scan}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Enable_QR_Badge_Scan: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* section five */}
      <div className="mt-6 mb-6">
        <h1 className="text-xl font-medium">Communication and Engagement</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Email and Survey System</h2>
              <p className="text-gray-500">
                Send emails and collect feedback through surveys
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Email_and_Survey_System}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Email_and_Survey_System: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-4 px-6">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Enable Social Wall </h2>
              <p className="text-gray-500">
                Allow users to post and interact in a social feed within the
                project
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                On
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Enable_Social_Wall}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Enable_Social_Wall: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* section six */}
      <div className="mt-6 mb-6">
        <h1 className="text-xl font-medium">Project Analytics</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Statistics</h2>
              <p className="text-gray-500">
                View project performance, attendee engagement, and session
                analytics
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {checkedList.Statistics ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Statistics}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Statistics: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* section seven */}
      <div className="mt-6 mb-6">
        <h1 className="text-xl font-medium">
          Interactive and Navigation Features
        </h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Indoor Map Integration</h2>
              <p className="text-gray-500">
                Display a virtual venue map for easy navigation
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {checkedList.Indoor_Map_Integration ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={checkedList.Indoor_Map_Integration}
                onCheckedChange={(checked) =>
                  setcheckedList((prev) => ({
                    ...prev,
                    Indoor_Map_Integration: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContractFeatures;
