import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";

const FriendListWidget = () => {
  const { friends } = useSelector(state => state.user);
  const { palette } = useTheme();

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends?.map(friend => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  )
};

export default FriendListWidget;
