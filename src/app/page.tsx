"use client";

import { CalendarCheck, Square } from "lucide-react";
import Separator from "../components/Separator";
import { emit } from "@tauri-apps/api/event";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MenuItem = dynamic(() => import("../components/MenuItem"), {
  ssr: false,
});

interface ItemsProps {
  id: string;
  name: string;
}

export default function Home() {
  const [items, setItems] = useState<ItemsProps[]>([]);

  const refreshItems = async () => {
    const formattedData: ItemsProps[] = [];
    const response = await fetch("/api/notion");
    const data = await response.json();
    console.log(data);
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
      <nav className="h-28 flex select-none flex-col px-1">
        <p className="mb-1 px-2 text-xs text-primary/30">Today</p>
        {items
          ? items.map((item) => (
              <MenuItem key={item.id}>
                <div className="flex items-center gap-1">
                  <Square className="h-4 w-4 stroke-[1.5px]" />
                  <div className="line-clamp-1">{item.name}</div>
                </div>
              </MenuItem>
            ))
          : "No items found in Notion"}
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
