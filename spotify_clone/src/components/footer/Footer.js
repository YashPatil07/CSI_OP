import React from "react";
import "./footer.css";
import {
  PlayCircleOutline,
  SkipNext,
  SkipPrevious,
  ShuffleRounded,
  RepeatOnRounded,
  PlaylistPlay,
} from "@mui/icons-material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Slider, Box, Stack } from "@mui/material";
import logo from "../../images/spotify-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img src={logo} alt="" className="footer_songImg" />
        <div class="footer_songInfo">
          <h4>yeah</h4>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleRounded className="footer_green"></ShuffleRounded>
        <SkipPrevious></SkipPrevious>
        <PlayCircleOutline></PlayCircleOutline>
        <SkipNext></SkipNext>
        <RepeatOnRounded className="footer_green"></RepeatOnRounded>
      </div>
      <div className="footer_right">
        <PlaylistPlay className="right_icon"></PlaylistPlay>
        <VolumeUpIcon className="right_icon"></VolumeUpIcon>
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider aria-label="Volume" />
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default Footer;
