import React from "react";

const TeamMemberHolder = ({ avatar, name }) => {
  return (
    <div className="rounded w-60 h-40 bg-[#F7F7F7] rounded-lg">
      <div className="flex flex-col">
        <div className="flex justify-center mt-8">
          <img src={avatar} alt="" className="w-20" />
        </div>
        <div className="text-center">
          <p className="mt-4 font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberHolder;
