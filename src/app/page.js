"use client"
import App from './App'
import { useEffect, useState } from 'react'

export default function Main() {
    const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? <App/> : null;
  }
  