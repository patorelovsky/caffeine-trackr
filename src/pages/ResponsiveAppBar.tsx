import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import InsightsIcon from "@mui/icons-material/Insights";
import { MouseEvent, useState } from "react";
import { ResponsiveAppBarParams } from "../types/responsiveAppBarParams";
import { ResponsiveAppBarMenuItem } from "../types/responsiveAppBarMenuItem";

export default function ResponsiveAppBar({
  label,
  navMenuItems,
  userMenuItems,
  getNavigateFn,
  user,
}: ResponsiveAppBarParams) {
  const [anchorElNav, setAnchorElNav] = useState<undefined | HTMLElement>();
  const [anchorElUser, setAnchorElUser] = useState<undefined | HTMLElement>();
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(undefined);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(undefined);
  };
  const navigate = getNavigateFn();
  const handleNavMenuItemClick = (navMenuItem: ResponsiveAppBarMenuItem) => {
    handleCloseNavMenu();
    navigate(navMenuItem.url);
  };
  const handleUserMenuItemClick = (userMenuItem: ResponsiveAppBarMenuItem) => {
    handleCloseUserMenu();
    navigate(userMenuItem.url);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <InsightsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {label}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navMenuItems.map((navMenuItem) => (
                <MenuItem
                  key={navMenuItem.url}
                  onClick={() => handleNavMenuItemClick(navMenuItem)}
                >
                  <Typography textAlign="center">
                    {navMenuItem.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <InsightsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {label}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navMenuItems.map((navMenuItem) => (
              <Button
                key={navMenuItem.url}
                onClick={() => handleNavMenuItemClick(navMenuItem)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {navMenuItem.label}
              </Button>
            ))}
          </Box>

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.email as string} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {userMenuItems.map((userMenuItem) => (
                  <MenuItem
                    key={userMenuItem.url}
                    onClick={() => handleUserMenuItemClick(userMenuItem)}
                  >
                    <Typography
                      textAlign="center"
                      component="a"
                      href={userMenuItem.url}
                    >
                      {userMenuItem.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
