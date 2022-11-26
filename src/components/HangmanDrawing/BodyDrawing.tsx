const Head = (
  <div className="w-[65px] h-[65px] border-[10px] border-solid border-black rounded-full absolute top-[50px] -right-[27.5px]" />
);

const Body = (
  <div className="w-[10px] h-[100px] bg-black absolute top-[115px] right-0" />
);

const RightArm = (
  <div className="w-[90px] h-[10px] bg-black absolute top-[145px] -right-[90px] -rotate-[30deg] origin-bottom-left" />
);

const LeftArm = (
  <div className="w-[90px] h-[10px] bg-black absolute top-[145px] right-[10px] rotate-[30deg] origin-bottom-right" />
);

const RightLeg = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[205px] -right-[90px] rotate-[60deg] origin-bottom-left" />
);

const LeftLeg = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[205px] right-0 -rotate-[60deg] origin-bottom-right" />
);

const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

export default BodyParts;
