// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import Door from "@/components/Door";
import Gift from "@/components/Gift";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      {/* <Gift /> */}
      <Door selected />
      <Door />
    </div>
  );
}
