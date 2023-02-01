import {
  Divider,
  useTheme,
  useMediaQuery,
  Box
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import CircleSkeleton from "components/CircleSkeleton";
import RectSkeleton from "components/RectSkeleton";

const MyPostWidgetSkeleton = () => {
  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <CircleSkeleton size={55} />
        <Box flexGrow={1}>
        <RectSkeleton height={60} borderRadius="2rem" />
        </Box>
      </FlexBetween>

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <RectSkeleton width={55} height={20} />

        {isNonMobileScreens ? (
          <>
            <RectSkeleton width={55} height={20} />

            <RectSkeleton width={55} height={20} />

            <RectSkeleton width={55} height={20} />
          </>
        ) : (
          <RectSkeleton width={55} height={20} />
        )}

        <RectSkeleton width={64} height={33} borderRadius="3rem" bgcolor={palette.primary.main} />
      </FlexBetween>
    </WidgetWrapper>
  )
}

export default MyPostWidgetSkeleton;
