"use client";
import React from 'react';
// import { signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/dist/client/router";
import Link from "next/link"

function Card({ user }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-5 max-w-xs w-full bg-white shadow-lg rounded-lg font-bold text-xl">
      welcom back {user}

      <li><Link href="/api/auth/signout">Sign Out</Link></li>
    </div>
  );
}

export default Card