"use client";

import { ComponentProps, ElementRef, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";

interface MenuItemProps extends ComponentProps<"button"> {
  hotkey?: string;
}

const isMac =
  typeof window !== "undefined"
    ? navigator.userAgent.toUpperCase().indexOf("MAC") >= 0
    : false;

function getSymbolCombination(hotkey: string): string {
  const modifierMap: Record<string, string> = {
    shift: "⇧",
    alt: "⌥",
    ctrl: "⌃",
    meta: "⌘",
    mod: isMac ? "⌘" : "⌃",
  };

  const keys = hotkey.split("+");

  const symbolModifiers = keys
    .map((key) => {
      return key in modifierMap ? modifierMap[key] : key.toLocaleUpperCase();
    })
    .join("");

  return symbolModifiers;
}

export default function MenuItem({
  hotkey = "",
  children,
  className,
  ...props
}: MenuItemProps) {
  const buttonRef = useRef<ElementRef<"button">>(null);

  useHotkeys(
    hotkey,
    () => {
      const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
      });

      buttonRef.current?.dispatchEvent(clickEvent);
    },
    {
      enabled: hotkey !== "",
      preventDefault: true,
    }
  );

  return (
    <button
      ref={buttonRef}
      className={`flex cursor-default items-center justify-between gap-2 rounded-md px-2 py-0.5 hover:bg-hover ${className}`}
      {...props}
    >
      {children}
      {hotkey !== "" && (
        <span className="text-xs text-primary/30">
          {getSymbolCombination(hotkey)}
        </span>
      )}
    </button>
  );
}
