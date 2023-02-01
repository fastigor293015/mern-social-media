import { Box, useTheme } from "@mui/material";
import CircleSkeleton from "components/CircleSkeleton";
import FlexBetween from "components/FlexBetween";
import RectSkeleton from "components/RectSkeleton";

const FriendSkeleton = ({ isProfile }) => {
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <CircleSkeleton size={55} />
        <Box>
          <Box mb="5px">
            <RectSkeleton width={115} height={18} />
          </Box>
          <RectSkeleton width={55} height={16} />
        </Box>
      </FlexBetween>
      {!isProfile && (
        <CircleSkeleton size={40} bgcolor={primaryLight} />
      )}
    </FlexBetween>
  )
}

export default FriendSkeleton;
