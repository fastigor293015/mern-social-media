import { Box, Divider } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import CircleSkeleton from "components/CircleSkeleton";
import RectSkeleton from "components/RectSkeleton";

const UserWidgetSkeleton = () => {
  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
      >
        <FlexBetween gap="1rem">
          <CircleSkeleton size={55} />
          <Box>
            <Box mb="5px">
              <RectSkeleton width={88} height={22} />
            </Box>
            <RectSkeleton width={55} height={18} />
          </Box>
        </FlexBetween>
        <CircleSkeleton size={38} />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <CircleSkeleton size={30} />
          <RectSkeleton width={90} height={18} />
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <CircleSkeleton size={30} />
          <RectSkeleton width={90} height={18} />
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <RectSkeleton width={140} height={18} />
          <RectSkeleton width={35} height={18} />
        </FlexBetween>
        <FlexBetween>
          <RectSkeleton width={140} height={18} />
          <RectSkeleton width={35} height={18} />
        </FlexBetween>
      </Box>

      <Divider />

      {/* FORTH ROW */}
      <Box p="1rem 0">
        <Box mb="1rem">
          <RectSkeleton width={110} height={22} />
        </Box>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <CircleSkeleton size={25} />
            <Box>
              <Box mb="5px">
                <RectSkeleton width={55} height={16} />
              </Box>
              <RectSkeleton width={95} height={16} />
            </Box>
          </FlexBetween>
          <CircleSkeleton size={20} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <CircleSkeleton size={25} />
            <Box>
              <Box mb="5px">
                <RectSkeleton width={55} height={16} />
              </Box>
              <RectSkeleton width={95} height={16} />
            </Box>
          </FlexBetween>
          <CircleSkeleton size={20} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  )
}

export default UserWidgetSkeleton;
