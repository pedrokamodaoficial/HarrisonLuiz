import React from "react";
import { GraduationCap } from "lucide-react";

export default function Header() {
  {
    return (
      <header className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-end px-8">
          <div className="flex items-center space-x-2">
            <GraduationCap className="inline-block mr-2" />
            <span className="text-lg font-bold">Harrison Luiz</span>
          </div>
        </div>
      </header>
    );
  }
}
