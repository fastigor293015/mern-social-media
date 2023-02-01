import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";
import FriendListWidgetSkeleton from "skeletons/FriendListWidgetSkeleton";
import MyPostWidgetSkeleton from "skeletons/MyPostWidgetSkeleton";
import NavbarSkeleton from "skeletons/NavbarSkeleton";
import PostsWidgetSkeleton from "skeletons/PostsWidgetSkeleton";
import UserWidgetSkeleton from "skeletons/UserWidgetSkeleton";
import { setUser } from "state";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    const data = await response.json();
    dispatch(setUser({ user: data }));
    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      {isLoading ? <NavbarSkeleton /> : <Navbar />}
      <Box
        width="100%"
        p="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {isLoading ? <UserWidgetSkeleton /> : <UserWidget isProfile />}
          <Box m="2rem 0" />
          {isLoading ? <FriendListWidgetSkeleton /> : <FriendListWidget />}
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {isLoading ? <MyPostWidgetSkeleton /> : <MyPostWidget />}
          {isLoading ? <PostsWidgetSkeleton /> : <PostsWidget userId={userId} isProfile />}
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage;
