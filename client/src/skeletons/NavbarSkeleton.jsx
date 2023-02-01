import {
  IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  Menu,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import CircleSkeleton from "../components/CircleSkeleton";
import RectSkeleton from "components/RectSkeleton";

const NavbarSkeleton = () => {
  const isnonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const alt = theme.palette.background.alt;

  return (
    <FlexBetween padding="1rem 6%" bgcolor={alt}>
      <FlexBetween gap="1.75rem">
        <RectSkeleton width={155} height={46} />
        {isnonMobileScreens && (
          <RectSkeleton width={270} height={38} />
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isnonMobileScreens ? (
        <FlexBetween gap="1.5rem">
          <CircleSkeleton size={35} />
          <CircleSkeleton size={35} />
          <CircleSkeleton size={35} />
          <CircleSkeleton size={35} />
          <RectSkeleton width={140} height={37.5} />
        </FlexBetween>
      ) : (
        <IconButton>
          <Menu />
        </IconButton>
      )}
    </FlexBetween>
  )
}

export default NavbarSkeleton;
