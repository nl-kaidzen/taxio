import React from "react";
import { Link, Icon } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import style from "./style.module.css";

export const SupportButton = () => {
  return (
    <Link
      target={"_blank"}
      href={"https://www.buymeacoffee.com/akdev"}
      className={style.button}
    >
      <Icon component={LocalCafeIcon} className={style.icon} />
      Support
    </Link>
  );
};
