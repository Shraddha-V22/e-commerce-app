import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShopIcon from "@mui/icons-material/Shop";
import PersonIcon from "@mui/icons-material/Person";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@mui/material";
import { useAuth } from "../firebase/Auth";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={4} spacing={1}>
          <Grid item sm={12}>
            <Paper sx={{ py: 0, px: 2 }}>
              <List>
                <ListItem
                  sx={{
                    p: 0,
                  }}
                >
                  <ListItemIcon>
                    <AccountCircleRoundedIcon color="action" fontSize="large" />
                  </ListItemIcon>

                  <ListItemText>
                    <Typography variant="p" color="text.secondary">
                      Hello,
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {user?.displayName ?? user?.email.split("@")[0]}!
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <Paper>
              <List
                sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ShopIcon color="info" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ textTransform: "uppercase" }}
                      >
                        My orders
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
              <List
                sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
              >
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon color="info" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{ textTransform: "uppercase" }}
                    >
                      Account settings
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary="Profile Information"
                      onClick={() => navigate("/profile/profile-info")}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Manage Address" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Notification Preference" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List
                sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
              >
                <ListItem>
                  <ListItemIcon>
                    <AccountBalanceWalletIcon color="info" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{ textTransform: "uppercase" }}
                    >
                      Payments
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Wallet" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Gift Cards" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Saved Cards" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List
                sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
              >
                <ListItem>
                  <ListItemIcon>
                    <FolderSharedIcon color="info" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{ textTransform: "uppercase" }}
                    >
                      My Stuff
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="My Rewards" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="My Reviews & Ratings" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="All Notifications" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="My Wishlist" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
