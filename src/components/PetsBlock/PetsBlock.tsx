import { Link } from "react-router-dom";

import { Icon, PetsList } from "../../components";

const PetsBlock = () => {
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <h4 className="text-[16px] font-bold leading-[1.25] text-[#2b2b2a]">
          My pets
        </h4>
        <Link
          to="/add-pet"
          className="flex h-[38px] w-[103px] items-center justify-center gap-[4px] rounded-[30px] bg-[#f6b83d] px-[16px] py-[10px] text-[14px] font-medium leading-[1.29] tracking-[-0.03em] text-white"
        >
          Add pet
          <Icon
            id="plus"
            size={18}
            className="fill-white stroke-white md:size-[px]"
          />
        </Link>
      </div>

      <PetsList />
    </>
  );
};

export default PetsBlock;
