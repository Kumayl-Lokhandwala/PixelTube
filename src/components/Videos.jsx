import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import { useLocation, useParams} from "react-router-dom";

const Videos = ({ videos, direction }) => {
  const params = useParams()
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {
        params?.id ? (
          videos.map((item, idx) => (
            <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))
        ) : (
          videos[0].map((item, idx) => (
            <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>))
        ) 
      }
    </Stack>
  );
};



export default Videos;
