import { Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import RectSkeleton from "components/RectSkeleton";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidgetSkeleton = () => {
  return (
    <WidgetWrapper>
      <FlexBetween>
        <RectSkeleton width={83} height={21} />
        <RectSkeleton width={62} height={20} />
      </FlexBetween>
      <Box m="0.75rem 0">
        <RectSkeleton height={258} borderRadius = "0.75rem" />
      </Box>
      <FlexBetween>
        <RectSkeleton width={90} height={20} />
        <RectSkeleton width={100} height={20} />
      </FlexBetween>
      <Box m="0.5rem 0">
        <Box mb="0.25rem">
          <RectSkeleton height={18} />
        </Box>
        <RectSkeleton width="85%" height={18} />
      </Box>
    </WidgetWrapper>
  )
}

export default AdvertWidgetSkeleton;
