import { Skeleton } from "@mui/material";

const CircleSkeleton = ({ size = 30, bgcolor }) => {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      sx={bgcolor ? {
        bgcolor: bgcolor,
      }: {}}
    />
  )
}

export default CircleSkeleton;
