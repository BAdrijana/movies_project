"use client";

import { Link } from "react-router-dom";

interface Link {
  url: string;
  name: string;
  canAccess: boolean;
}

const Sidebar = () => {
  return <div className="aside">Aside</div>;
};

export default Sidebar;
