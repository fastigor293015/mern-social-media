import { Box } from "@mui/material";
import CircleSkeleton from "components/CircleSkeleton";
import FlexBetween from "components/FlexBetween";
import RectSkeleton from "components/RectSkeleton";
import WidgetWrapper from "components/WidgetWrapper";
import FriendSkeleton from "./FriendSkeleton";

const PostWidgetSkeleton = ({ isProfile = false }) => {
  return (
    <WidgetWrapper m="2rem 0">
      <FriendSkeleton isProfile={isProfile} />
      <Box mt="1rem">
        <RectSkeleton height={18} />
      </Box>
      <Box mt="0.4rem">
        <RectSkeleton width={200} height={18} />
      </Box>
      <Box mt="0.75rem">
        <RectSkeleton height={550} />
      </Box>
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <CircleSkeleton size={36} />
          <CircleSkeleton size={36} />
        </FlexBetween>

        <CircleSkeleton size={36} />
      </FlexBetween>
    </WidgetWrapper>
  )
}

export default PostWidgetSkeleton;
