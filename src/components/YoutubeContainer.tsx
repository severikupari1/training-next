import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import YouTube from 'react-youtube';
import getVideoId from "get-video-id";

type Props = {
  children: JSX.Element,
};

export interface YoutubeVideoData {
  videoId: string;
  videoFullUrl: string;
  id?: string;
  className?: string;
  iframeClassName?: string;
  height?: string,
  width?: string,
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    start?: number;
    end?: number;
    autoplay?: 0 | 1;
    mute?: 0 | 1;
    modestbranding?: 0 | 1;
  }
  style?: object;
}

const userYoutubeVideos = [
  {
    videoId: 'qVek72z3F1U',                  // defaults -> ''
    videoFullUrl: 'https://www.youtube.com/watch?v=qVek72z3F1U',
    id: 'video-1-id',                       // defaults -> ''
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      mute: 1, // Needed for autoplay to work
      start: 10,
      modestbranding: 1,
      // end: 30,
    },
    className: '',                // defaults -> ''
    iframeClassName: '',          // defaults -> ''
    style: {}                    // defaults -> {}
  } as YoutubeVideoData,
  {
    videoId: 'qVek72z3F1U',                  // defaults -> ''
    videoFullUrl: 'https://www.youtube.com/watch?v=qVek72z3F1U',
    id: 'video-1-id',                       // defaults -> ''
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      mute: 1, // Needed for autoplay to work
      start: 10,
      modestbranding: 1,
      // end: 30,
    },
    className: '',                // defaults -> ''
    iframeClassName: '',          // defaults -> ''
    style: {}                    // defaults -> {}
  } as YoutubeVideoData
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxHeight: '390',
  maxWidth: '640',
}));

export default function YoutubeContainer({ children }: Props) {
  return (
    <Box sx={ { flexGrow: 1, marginTop: '3rem' } }>
      <Grid container spacing={ 2 }>

        { userYoutubeVideos.map((videoData) => (

          <Grid item xs={ 12 }>
            <Item>
              <YouTube videoId={getVideoId(videoData.videoFullUrl).id || ''} opts={{
                height: videoData.height,
                width: videoData.width,
                playerVars: videoData.playerVars,
              }}/>
              { userYoutubeVideos.map((videoData) => (
                  <Item>
                    <h1>Testi</h1>
                  </Item>
              )) }
            </Item>
          </Grid>
        )) }

      </Grid>
    </Box>
  );
}
