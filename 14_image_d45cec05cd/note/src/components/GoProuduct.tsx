"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function GoProduct() {
  const navigation = useRouter();
  return (
    <button
      onClick={() => {
        navigation.push("/products");
      }}
    >
      제품페이지로 이동하기
    </button>
  );
}
