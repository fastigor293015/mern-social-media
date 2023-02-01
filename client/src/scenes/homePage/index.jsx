import { Box, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import { setUser } from "state";
import { useEffect, useState } from "react";
import NavbarSkeleton from "skeletons/NavbarSkeleton";
import UserWidgetSkeleton from "skeletons/UserWidgetSkeleton";
import PostsWidgetSkeleton from "skeletons/PostsWidgetSkeleton";
import MyPostWidgetSkeleton from "skeletons/MyPostWidgetSkeleton";
import FriendListWidgetSkeleton from "skeletons/FriendListWidgetSkeleton";
import AdvertWidgetSkeleton from "skeletons/AdvertWidgetSkeleton";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const {
    _id,
    picturePath
  } = useSelector(state => state.loggedInUser);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${_id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
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
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {isLoading ? <UserWidgetSkeleton /> : <UserWidget />}
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {isLoading ? <MyPostWidgetSkeleton /> : <MyPostWidget picturePath={picturePath} />}
          {isLoading ? <PostsWidgetSkeleton /> : <PostsWidget userId={_id} />}
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {isLoading ? <AdvertWidgetSkeleton /> : <AdvertWidget />}
            <Box m="2rem 0" />
            {isLoading ? <FriendListWidgetSkeleton /> : <FriendListWidget />}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage;
