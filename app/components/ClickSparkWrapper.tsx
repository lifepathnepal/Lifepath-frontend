"use client";

import ClickSpark from "@/components/ClickSpark";
import React from "react";

interface ClickSparkWrapperProps {
  children: React.ReactNode;
}

export default function ClickSparkWrapper({
  children,
}: ClickSparkWrapperProps) {
  return (
    <ClickSpark
      sparkColor="#3b82f6"
      sparkSize={8}
      sparkRadius={50}
      sparkCount={12}
      duration={600}
      easing="ease-out"
      extraScale={1.2}
    >
      {children}
    </ClickSpark>
  );
}
