"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const ProjectSetting = () => {
  const [projectVisibility, setProjectVisibility] = useState({
    projectvisibility: false,
    agendaMeeting: false,
    privateChat: false,
    callOneToOne: false,
    matchMakingAlogrithm: false,
    videoCallSupport: false,
    affinityRate: false,
    aiBaseAssistant: false,
    enableBadge: false,
    enableQrBadgeScan: false,
    emailAndSurveySystem: false,
    enableSocialWall: false,
    statistics: false,
    indoorMapIntegration: false,
  });
  const [projectAccessRules, setProjectAccessRules] = useState({
    freeAccess: "",
  });

  console.log("projectVisibility", projectVisibility);

  return (
    <form>
      <div className="px-4 sm:px-10 lg:px-32">
        {/* Page Head */}
        <div className="mt-10">
          <h1 className="text-3xl font-medium">Project Settings</h1>
          <p className="mt-2">
            Configure project visibility, access rules, and additional settings
            to control how your project appears and functions.
          </p>
        </div>

        {/* section one */}
        <h2 className="mt-8 font-medium text-xl">
          Project Visibility Settings
        </h2>
        <div
          className={`flex justify-between bg-gray-100 rounded-xl px-6 py-7 mt-6 ${
            !projectVisibility.projectvisibility && "opacity-55"
          }`}
        >
          <div>
            <h3 className="font-medium">Project visibility</h3>
            <p>
              Choose whether your project is visible to everyone or restricted
              to a specific audience
            </p>
          </div>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              {projectVisibility.projectvisibility ? "Visible" : "Hide"}
            </label>
            <Switch
              className="cursor-pointer bg-blue-300"
              checked={projectVisibility.projectvisibility}
              onCheckedChange={(checked) =>
                setProjectVisibility((prev) => ({
                  ...prev,
                  projectvisibility: checked,
                }))
              }
            />
          </div>
        </div>

        {/* section two */}
        <h2 className="mt-8 font-medium text-xl">Project Access Rule</h2>
        <div className=" bg-gray-100 rounded-xl px-8 py-7 mt-6 mb-10">
          <RadioGroup
            defaultValue="freeaccess"
            onValueChange={(value) =>
              setProjectAccessRules({ freeAccess: value })
            }
          >
            <div className="flex gap-4">
              <div className="mt-1">
                <RadioGroupItem
                  className="text-blue-600 
            bg-gray-100 border-gray-300"
                  value="freeaccess"
                  id="freeaccess"
                />
              </div>
              <div>
                <h3 className="font-medium">Free Access</h3>
                <p>Anyone can join without restrictions.</p>
              </div>
            </div>
            <div className="my-5">
              <Separator />
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <RadioGroupItem
                  className="text-blue-600 
            bg-gray-100 border-gray-300"
                  value="projectaccess"
                  id="projectaccess"
                />
              </div>
              <div>
                <h3 className="font-medium">Project Access</h3>
                <p>Only users manually added by the admin can join.</p>
              </div>
            </div>
            <div className="my-5">
              <Separator />
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <RadioGroupItem
                  className="text-blue-600 
            bg-gray-100 border-gray-300"
                  value="adminapproval"
                  id="adminapproval"
                />
              </div>
              <div>
                <h3 className="font-medium">With Admin Approval</h3>
                <p>
                  Users can request to join, but require admin approval before
                  accessing the project dashboard.
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* section three */}
        <h2 className="mt-8 font-medium text-xl">Project Agenda Meeting</h2>
        <div className="flex justify-between bg-gray-100 rounded-xl px-6 py-7 mt-6">
          <div>
            <h3 className="font-medium">Agenda System</h3>
            <p>Enable agenda/meeting systems for your project.</p>
          </div>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              {projectVisibility.agendaMeeting ? "On" : "Off"}
            </label>
            <Switch
              className="cursor-pointer bg-blue-300"
              checked={projectVisibility.agendaMeeting}
              onCheckedChange={(checked) =>
                setProjectVisibility((prev) => ({
                  ...prev,
                  agendaMeeting: checked,
                }))
              }
            />
          </div>
        </div>

        {/* section four */}
        <h2 className="mt-8 font-medium text-xl ">Networking Features</h2>
        <div className="flex bg-gray-100 rounded-xl px-6 py-7 mt-6 flex-col mb-10">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Private Chat</h3>
              <p>Enable direct messaging between attendees.</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.privateChat ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.privateChat}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    privateChat: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-5">
            <Separator />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Call One-To-One</h3>
              <p>Provide voice calling options</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.callOneToOne ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.callOneToOne}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    callOneToOne: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-5">
            <Separator />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Matchmaking Alogrithm</h3>
              <p>Suggest relevant connections based on attendee preferences</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.matchMakingAlogrithm ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.matchMakingAlogrithm}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    matchMakingAlogrithm: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-5">
            <Separator />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Video Call Support</h3>
              <p>Allow video call for networking and sessions</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.videoCallSupport ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.videoCallSupport}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    videoCallSupport: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-5">
            <Separator />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Affinity Rate</h3>
              <p>Match users based on shared interests or affinity levels</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.affinityRate ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.affinityRate}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    affinityRate: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* section five */}
        <h2 className="mt-8 font-medium text-xl">
          User Support and Assistance
        </h2>
        <div className="flex justify-between bg-gray-100 rounded-xl px-6 py-7 mt-6 mb-10">
          <div>
            <h3 className="font-medium">AI Based Assistance</h3>
            <p>Enable automated AI-based assistance support for users</p>
          </div>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              {projectVisibility.aiBaseAssistant ? "On" : "Off"}
            </label>
            <Switch
              className="cursor-pointer bg-blue-300"
              checked={projectVisibility.aiBaseAssistant}
              onCheckedChange={(checked) =>
                setProjectVisibility((prev) => ({
                  ...prev,
                  aiBaseAssistant: checked,
                }))
              }
            />
          </div>
        </div>

        {/* section six */}
        <h2 className="mt-8 font-medium text-xl ">Badge Feature</h2>
        <div className="flex bg-gray-100 rounded-xl px-6 py-7 mt-6 flex-col mb-10">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Enable Badge</h3>
              <p>Generate digital or printable badges for participants</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.enableBadge ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.enableBadge}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    enableBadge: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-5">
            <Separator />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Enable QR Badge Scan </h3>
              <p>Allow badge scanning for attendance or verification</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.enableQrBadgeScan ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.enableQrBadgeScan}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    enableQrBadgeScan: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* section seven */}
        <h2 className="mt-8 font-medium text-xl ">
          Communication and Engagement
        </h2>
        <div className="flex bg-gray-100 rounded-xl px-6 py-7 mt-6 flex-col mb-10">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Email and Survey System</h3>
              <p>Send emails and collect feedback through surveys</p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.emailAndSurveySystem ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.emailAndSurveySystem}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    emailAndSurveySystem: checked,
                  }))
                }
              />
            </div>
          </div>
          <div className="my-5">
            <Separator />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Enable Social Wall</h3>
              <p>
                Allow users to post and interact in a social feed within the
                project
              </p>
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="" className="text-xs">
                {projectVisibility.enableSocialWall ? "On" : "Off"}
              </label>
              <Switch
                className="cursor-pointer bg-blue-300"
                checked={projectVisibility.enableSocialWall}
                onCheckedChange={(checked) =>
                  setProjectVisibility((prev) => ({
                    ...prev,
                    enableSocialWall: checked,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* section eight */}
        <h2 className="mt-8 font-medium text-xl">Project Analytics</h2>
        <div className="flex justify-between bg-gray-100 rounded-xl px-6 py-7 mt-6 mb-10">
          <div>
            <h3 className="font-medium">Statistics</h3>
            <p>
              View project performance, attendee engagement, and session
              analytics
            </p>
          </div>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              {projectVisibility.statistics ? "On" : "Off"}
            </label>
            <Switch
              className="cursor-pointer bg-blue-300"
              checked={projectVisibility.statistics}
              onCheckedChange={(checked) =>
                setProjectVisibility((prev) => ({
                  ...prev,
                  statistics: checked,
                }))
              }
            />
          </div>
        </div>

        {/* section nine */}
        <h2 className="mt-8 font-medium text-xl">
          Interactive and Navigation Features
        </h2>
        <div className="flex justify-between bg-gray-100 rounded-xl px-6 py-7 mt-6 mb-10">
          <div>
            <h3 className="font-medium">Indoor Map Integration</h3>
            <p>Display a virtual venue map for easy navigation</p>
          </div>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              {projectVisibility.indoorMapIntegration ? "On" : "Off"}
            </label>
            <Switch
              className="cursor-pointer bg-blue-300"
              checked={projectVisibility.indoorMapIntegration}
              onCheckedChange={(checked) =>
                setProjectVisibility((prev) => ({
                  ...prev,
                  indoorMapIntegration: checked,
                }))
              }
            />
          </div>
        </div>

        {/* Cancel and Submit */}
        <div className="flex justify-end  mt-6 mb-10 gap-5">
          <button
            className="border-[#166DFB] px-6 py-2 rounded border text-[#166DFB] cursor-pointer"
            type="button"
          >
            Cancel
          </button>
          <button
            className="bg-[#166DFB] text-white px-8 py-2 rounded cursor-pointer"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProjectSetting;
