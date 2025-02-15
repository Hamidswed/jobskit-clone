import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { formatDate } from "../../../utils/formatDate";
import { useJobContext } from "@/context/JobContext";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import truncateText from "@/utils/truncateText";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { Job } from "@/types/job";
import * as React from "react";

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
        title={truncateText(job.title, 20)}
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
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
