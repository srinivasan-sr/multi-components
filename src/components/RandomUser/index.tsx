import axios from "axios";
import { useEffect, useState } from "react";
import { GET_RANDOM_USER_URL } from "../../constants/http_links";
import { UserCard } from "../UserCard";
import { UserProps } from "./user.types";

export const RandomUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);
  let content;
  const fetchRandomUser = async () => {
    setIsLoading(true);
    const response = await axios.get(GET_RANDOM_USER_URL);
    setUser(response.data.results[0]);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchRandomUser();
  }, []);

  if (isLoading) {
    content = `Loading...`;
  } else if (user) {
    content = (
      <div className="w-1/4 border p-1">
        <UserCard
          nationality={user?.nat}
          name={user?.name}
          picture={user?.picture}
          location={user?.location}
        />
      </div>
    );
  }
  return <div className="p-2">{content}</div>;
};
