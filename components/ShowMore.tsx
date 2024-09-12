"use client"
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";
import { ShowMoreProps } from "@/types"
import { CustomButton } from "."

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname, {scroll: false});
  };

    
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white hover:bg-indigo-700 duration-200"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore