import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAuth } from "../firebase/Auth";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function ProfileInfo() {
  const { user } = useAuth();
  console.log(user);
  const theme = useTheme();
  return (
    <Card sx={{ py: 3, px: 2 }}>
      <CardContent sx={{ mb: 3 }}>
        <Typography variant="h5">Profile Information</Typography>
      </CardContent>
      <Box
        component="section"
        sx={{ px: 2, display: "flex", flexDirection: "column", gap: 5 }}
      >
        <Box>
          <TextField
            defaultValue={user?.displayName ?? user?.email.split("@")[0]}
            name="name"
            id="name"
            label="Name"
            disabled
            variant="standard"
            sx={{ width: theme.spacing(35) }}
          />
          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>
        <Box>
          <TextField
            defaultValue={user?.email}
            name="email"
            id="email"
            label="Email"
            disabled
            variant="standard"
            sx={{ width: theme.spacing(35) }}
          />
        </Box>
      </Box>
    </Card>
  );
}
