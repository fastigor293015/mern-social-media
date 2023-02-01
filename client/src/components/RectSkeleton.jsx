import { Skeleton } from "@mui/material";

const RectSkeleton = ({ width = "auto", height = "auto", borderRadius = "6px", bgcolor }) => {
  return (
    <Skeleton
      variant="rectangular"
      width={width}
      height={height}
      sx={{
        borderRadius: borderRadius,
        bgcolor: bgcolor ? bgcolor : undefined,
      }}
    />
  )
}

export default RectSkeleton;
