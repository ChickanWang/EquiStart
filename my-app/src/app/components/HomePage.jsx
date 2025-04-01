// TODO
"use client";
import React from 'react';
import Link from 'next/link';

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/gamepage">
        <button>Go to Game Page</button>
      </Link>
    </div>
  );
}