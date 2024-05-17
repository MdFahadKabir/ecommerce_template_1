import React from "react";

const Profile = () => {
  return (
    <div className="lg:w-[700px] h-[373px]  mx-auto mt-5">
      <div className="flex justify-between font-semibold px-2 lg:px-0">
        <div>
          <h2>My Profile</h2>
        </div>

        <div>
          <h3 className="text-[#0074DE] text-sm font-semibold">Edit Profile</h3>
        </div>
      </div>

      <div className="lg:w-[700px] lg:h-[300px]  mx-auto bg-[#F6FBFF] rounded-lg mt-5">
        <div className="pt-5 my-5 pl-16">
          <h2 className="text-sm text-gray-600">Name</h2>
          <h2 className="font-semibold mt-1">Aman Molla</h2>
        </div>

        <div className="my-5 pl-16">
          <h2 className="text-sm text-gray-600">Birthdate</h2>
          <h2 className="font-semibold mt-1">12th January, 1998</h2>
        </div>

        <div className="my-5 pl-16">
          <h2 className="text-sm text-gray-600">Gender</h2>
          <h2 className="font-semibold mt-1">Male</h2>
        </div>

        <div className="my-5 pl-16">
          <h2 className="text-sm text-gray-600">Phone Number</h2>
          <h2 className="font-semibold mt-1">01829337755</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
