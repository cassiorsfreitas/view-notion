"use client";

import { CalendarCheck, Square } from "lucide-react";
import Separator from "../components/Separator";
import { emit } from "@tauri-apps/api/event";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

const MenuItem = dynamic(() => import("../components/MenuItem"), {
  ssr: false,
});

interface ItemsProps {
  id: string;
  name: string;
}

const HEIGHT_MAP: {
  [key: number]: number;
} = {
  0: 172,
  1: 179,
  2: 202,
  3: 225,
  4: 248,
};

export default function Home() {
  const [items, setItems] = useState<ItemsProps[]>([]);

  const refreshItems = async () => {
    const formattedData: ItemsProps[] = [];
    const response = await fetch("/api/notion");
    const data = await response.json();
    const { appWindow, LogicalSize } = await import("@tauri-apps/api/window");
    await appWindow.setSize(new LogicalSize(280, HEIGHT_MAP[data.length]));
    data.forEach((item: any) => {
      formattedData.push({
        id: item.id,
        name: item.properties.Name.title[0].plain_text,
      });
    });
    setItems(formattedData);
  };

  useEffect(() => {
    refreshItems();
  }, []);

  return (
    <div className="flex flex-col gap-2 rounded-md border border-primary/30 py-1.5 text-sm text-primary ">
      <div className="flex items-center gap-2 px-3">
        <CalendarCheck className="h-4 w-4 stroke-[1.5px]" />
        Tasks
      </div>
      <Separator />
      <nav className={`flex select-none flex-col px-1`}>
        <p className="mb-1 px-2 text-xs text-primary/30">Today</p>
        {items.length > 0 ? (
          items.slice(0, 4).map((item) => (
            <MenuItem key={item.id}>
              <div className="flex items-center">
                <Square className="h-4 w-4 min-h-4 min-w-4 stroke-[1.5px] mr-2" />
                <div className="line-clamp-1 text-left">{item.name.trim()}</div>
              </div>
            </MenuItem>
          ))
        ) : (
          <div className="text-center text-xs text-primary/30">
            No items found in Notion
          </div>
        )}
      </nav>
      <Separator />
      <nav className="flex select-none flex-col px-1">
        <MenuItem hotkey="mod+R" onClick={() => refreshItems()}>
          Refresh
        </MenuItem>
        <MenuItem hotkey="mod+,">Settings</MenuItem>
        <MenuItem hotkey="mod+Q" onClick={() => emit("quit")}>
          Quit
        </MenuItem>
      </nav>
    </div>
  );
}
