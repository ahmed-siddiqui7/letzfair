import { Separator } from "@/components/ui/separator";
import React from "react";

const GeneralSetting = () => {
  return (
    <form className="mt-10">
      {/* Section one */}
      <div>
        <h1 className="text-xl font-medium">Project Configuration</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Maximum Projects Allowed</h2>
              <p className="text-gray-500">
                This is the maximum number of projects your contract allows.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">10 Projects</h3>
            </div>
          </div>
          <div className="px-6 my-4">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Contract Expiration Date</h2>
              <p className="text-gray-500">
                Your contract will remain active until this date.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">December 31, 2025</h3>
            </div>
          </div>
          <div className="px-6 my-4">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Available Languages</h2>
              <p className="text-gray-500">
                These languages are available for users in your project.
                LetzFair manages language availability based on your contract.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">
                English, French and Spanish
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* section two */}
      <div className="mt-6 mb-10">
        <h1 className="text-xl font-medium">Email Sender Settings</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Email Sender Address</h2>
              <p className="text-gray-500">
                All project-related emails will be sent from this address.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">
                noreply@expoproject2025.com
              </h3>
            </div>
          </div>
          <div className="px-6 my-4">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Email Sender Name</h2>
              <p className="text-gray-500">
                Displayed as the sender name in your attendees inbox.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">Expo Project Support</h3>
            </div>
          </div>
        </div>
      </div>
      {/* section three */}
      <div className="mt-6 mb-10">
        <h1 className="text-xl font-medium">Email Connection (SMTP/API)</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className="text-lg">Server Domain</h2>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">
                smtp.expoproject2025.com
              </h3>
            </div>
          </div>
          <div className="px-6 my-4">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className="text-lg">Port</h2>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">587</h3>
            </div>
          </div>
          <div className="px-6 my-4">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className="text-lg">Username</h2>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">
                noreply@expoproject2025.com
              </h3>
            </div>
          </div>
          <div className="px-6 my-4">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className="text-lg">Status</h2>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">Connected</h3>
            </div>
          </div>
        </div>
      </div>
      {/* section four */}
      <div className="mt-6 mb-10">
        <h1 className="text-xl font-medium">Push Notifications Settings</h1>
        <div className="flex flex-col bg-gray-100 rounded-xl py-4 mt-4">
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Push Notifications</h2>
              <p className="text-gray-500">
                Real-time push notifications are active
              </p>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">Enabled</h3>
            </div>
          </div>
          <div className="px-6 my-4">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Push Notification Gateway Provider</h2>
              <p className="text-gray-500">
                This gateway is used to send notifications to attendees.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">
                Something Cloud Messaging
              </h3>
            </div>
          </div>
          <div className="px-6 my-4">
            <Separator />
          </div>
          <div className="flex justify-between items-center px-6">
            <div>
              <h2 className=" text-lg">Project ID</h2>
              <p className="text-gray-500">
                Real-time push notifications are active
              </p>
            </div>
            <div>
              <h3 className="text-lg text-gray-500">expo2025</h3>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default GeneralSetting;
