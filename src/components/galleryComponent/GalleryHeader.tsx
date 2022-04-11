import Image from "next/image";
import React from "react";
import TagComponent from "../TagComponent";
import Searchicon from "../../../public/image/searchicon.svg";
import DropDown from "../../common/dropDown/DropDown";
import UploadButton from "../../common/uploadButton/UploadButton";

function GalleryHeader() {
  return (
    <div className="bg-black h-[30em]">
      <div className="bg-white h-20 p-5 flex justify-between">
        <div className="flex justify-evenly w-[50%] items-center">
          <p className="text-2xl">Gallery</p>
          <div className="flex justify-evenly w-[78%]">
            <div>
              <TagComponent width="w-10" name="All" />
            </div>
            <div>
              <TagComponent width="w-12" name="Ads" />
            </div>
            <div>
              <TagComponent width="w-28" name="Solar Sub Parts" />
            </div>
            <div>
              <TagComponent width="w-24" name="Solar Parts" />
            </div>
            <div>
              <TagComponent width="w-28" name="Solar Pictures" />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly w-[30%] items-center">
          <div>
            <Image src={Searchicon} alt="icon" height={25} width={25} />
          </div>
          <div>
            <DropDown
              name="Filter"
              DropDownCls={`w-[125px]  mr-2 relative justify-center flex `}
            />
          </div>
          <div>
            <UploadButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryHeader;
