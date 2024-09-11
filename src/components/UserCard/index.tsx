import { UserCard as UserCardProps } from "./user.types";
import { EMPLOYEE_LABEL } from "../../constants/textconstants";
export const UserCard = ({
  name,
  picture,
  nationality,
  location,
}: UserCardProps) => {
  return (
    <>
      <div className="w-full h-6 bg-purple-400 text-white uppercase text-center my-2">
        {EMPLOYEE_LABEL}
      </div>
      <div className="flex">
        <div className="relative mr-3">
          <img
            src={picture?.medium}
            className="rounded-full"
            alt={name?.first}
          />
          <img
            src={`https://flagsapi.com/${nationality}/flat/24.png`}
            alt={nationality}
            className="absolute left-12 top-12"
          />
        </div>
        <div>
          <div className="flex flex-col">
            <div id="emp_name">
              {name?.first}, {name?.last}
            </div>
            <div
              id="emp_address"
              className="text-gray-600 flex flex-col text-sm"
            >
              <div>
                {location?.street?.number}, {location?.street?.name}
              </div>
              <div>
                {location?.city}, {location?.state}
              </div>
              <div>
                {location?.postcode}, {location?.country}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
