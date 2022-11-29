import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";
import { ListItemText } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Toolbar
      sx={{
        bgcolor: theme.palette.grey[900],
        color: theme.palette.common.white,
        py: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        mt: "200px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          mx: theme.spacing(5),
          pb: theme.spacing(3),
          borderBottom: `1px solid ${theme.palette.grey[700]}`,
        }}
      >
        <Grid item xs={12} md={3}>
          <List disablePadding>
            <ListItem>
              <Typography
                variant="p"
                sx={{
                  textTransform: "uppercase",
                  color: theme.palette.grey[400],
                }}
              >
                About
              </Typography>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Contact Us</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>About Us</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Careers</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <List disablePadding>
            <ListItem>
              <Typography
                variant="p"
                sx={{
                  textTransform: "uppercase",
                  color: theme.palette.grey[400],
                }}
              >
                Help
              </Typography>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Payments</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Shipping</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Cancellation & Returns</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>FAQ</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <List disablePadding>
            <ListItem>
              <Typography
                variant="p"
                sx={{
                  textTransform: "uppercase",
                  color: theme.palette.grey[400],
                }}
              >
                Social
              </Typography>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Facebook</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Twitter</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Youtube</ListItemText>
            </ListItem>
            <ListItem sx={{ pb: 0 }}>
              <ListItemText>Instagram</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <List disablePadding>
            <ListItem>
              <Typography
                variant="p"
                sx={{
                  color: theme.palette.grey[400],
                }}
              >
                Registered Office Address
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores animi iure officiis nesciunt.
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography sx={{ mt: theme.spacing(2) }}>Made with 💗</Typography>
    </Toolbar>
  );
}
