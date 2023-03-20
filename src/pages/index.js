import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "@blueprintjs/table/lib/css/table.css";
import "@blueprintjs/core/lib/css/blueprint.css";

// import { Table } from "../comps/Table";
import { Grid } from "../comps/Grid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Blueprint</h1>
      <Grid />
    </>
  );
}
