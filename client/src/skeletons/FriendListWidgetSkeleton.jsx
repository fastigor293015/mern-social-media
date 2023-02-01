import { Box } from "@mui/material";
import RectSkeleton from "components/RectSkeleton";
import WidgetWrapper from "components/WidgetWrapper";
import FriendSkeleton from "./FriendSkeleton";

const FriendListWidgetSkeleton = () => {
  return (
    <WidgetWrapper>
      <RectSkeleton width={85} height={21} />
      <Box display="flex" flexDirection="column" gap="1.5rem" mt="1.5rem">
        <FriendSkeleton />
        <FriendSkeleton />
        <FriendSkeleton />
        <FriendSkeleton />
      </Box>
    </WidgetWrapper>
  )
};

export default FriendListWidgetSkeleton;
