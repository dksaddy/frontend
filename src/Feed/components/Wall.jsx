import { Box } from "@mui/material";
import React from "react";
import PostField from "./PostField";
import Posts from "./Posts";
import { useQuery } from "@tanstack/react-query";
import getPosts from "../Functions/getPosts";
const Wall = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getposts"],
    queryFn: getPosts,
    staleTime: 100000,
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Error..</h1>;
  }
  console.log(data);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <PostField />

      {data &&
        data.data.posts.map((item, index) => {
          return <Posts {...item} key={index} reactions />;
        })}
    </Box>
  );
};

export default Wall;
