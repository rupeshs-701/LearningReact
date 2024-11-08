import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {data ? (
        <>
          Github followers: {data.followers}
          <img src={data.avatar_url} alt="Git picture" width={300} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");

  return response.json();
};
