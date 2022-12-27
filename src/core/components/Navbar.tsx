import {
  GitHubLogoIcon,
  HomeIcon,
  MixIcon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";

import type { NavbarConfig } from "../lib/config";
import GhostButton from "./Button";
import ColorModeToggle from "./ColorModeToggle";
import StyledSeparator from "./Separator";

const icons = {
  HomeIcon: HomeIcon,
  MixIcon: MixIcon,
  GithubIcon: GitHubLogoIcon,
  PersonIcon: PersonIcon,
  TwitterIcon: TwitterLogoIcon,
};

const Navbar: React.FC<{ config: NavbarConfig; page?: string }> = ({
  config,
  page,
}) => {
  return (
    <Tooltip.Provider>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex items-center justify-center">
          {config.items.map((item) => {
            const id = item.href || item.type;
            let ele;
            let Icon;
            if (item.type === "separator") {
              ele = (
                <StyledSeparator orientation="vertical" className="mr-0 ml-0" />
              );
            } else {
              if (item.icon) {
                Icon = icons[item.icon];
              }
              ele = (
                <GhostButton
                  tooltip={item.tooltip}
                  active={page === item.href}
                  href={item.href}
                  variant="text"
                  aria-label={`${item.tooltip} button`}
                >
                  {Icon && <Icon />}
                </GhostButton>
              );
            }

            return (
              <div key={id} className="[&:not(:last-child)]:mr-4">
                {ele}
              </div>
            );
          })}
        </div>

        {config.colorModeToggle && (
          <ColorModeToggle
            tooltip={config.colorModeToggle.tooltip}
            variant="text"
          />
        )}
      </nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
