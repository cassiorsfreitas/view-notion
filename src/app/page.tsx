"use client";

import { CalendarCheck, Square } from "lucide-react";
import Separator from "../components/Separator";
import { emit } from "@tauri-apps/api/event";

import dynamic from "next/dynamic";

const MenuItem = dynamic(() => import("../components/MenuItem"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-primary/30 py-1.5 text-sm text-primary ">
      <div className="flex items-center gap-2 px-3">
        <CalendarCheck className="h-4 w-4 stroke-[1.5px]" />
        Tasks
      </div>
      <Separator />
      <nav className="flex select-none flex-col px-1">
        <p className="mb-1 px-2 text-xs text-primary/30">Today</p>
        <MenuItem>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 stroke-[1.5px]" />
            <div className="line-clamp-1">
              E nisi non veniam dolore vaer potato...
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 stroke-[1.5px]" />
            <div className="line-clamp-1">
              E nisi non veniam dolore vaer potato...
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 stroke-[1.5px]" />
            <div className="line-clamp-1">
              E nisi non veniam dolore vaer potato...
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 stroke-[1.5px]" />
            <div className="line-clamp-1">
              E nisi non veniam dolore vaer potato...
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 stroke-[1.5px]" />
            <div className="line-clamp-1">
              E nisi non veniam dolore vaer potato...
            </div>
          </div>
        </MenuItem>
      </nav>
      <Separator />
      <nav className="flex select-none flex-col px-1">
        <MenuItem hotkey="mod+,">Settings</MenuItem>
        <MenuItem hotkey="mod+Q" onClick={() => emit("quit")}>
          Quit
        </MenuItem>
      </nav>
    </div>
  );
}
