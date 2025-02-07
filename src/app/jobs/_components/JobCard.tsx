import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Job } from "@/types/job";
import { formatDate } from "../../../utils/formatDate";
import { useJobContext } from "@/context/JobContext";

type PropsType = {
  job: Job;
};

export default function JobCard({ job }: PropsType) {
  const { toggleBookmark } = useJobContext();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="job">
            {job.title.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={job.title}
        subheader={formatDate(job.datePosted as string)}
      />
      <CardMedia
        component="img"
        height="194"
        image={job.company?.imageURL || "/default-image.png"}
        alt={job.company?.name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {job.company?.industry}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => toggleBookmark(job.id)}
          sx={{
            color: job.isBookmarked ? red[500] : "inherit",
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
