'use client'
import Image from "next/image";
import Link from "next/link";

import type { RootState } from './store';
import { useSelector, useDispatch } from 'react-redux';
import { addStatements } from "./store/features/statements";

export default function Home() {
  return (
    <main>
      <h1>Monthly Econ</h1>
      <h2></h2>
      <button>
        Upload
      </button>
      <Link href="/user">users</Link>
    </main>
  );
}
