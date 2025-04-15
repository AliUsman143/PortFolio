// app/components/AppTransition.jsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Stair from "./Stair";

export default function AppTransition({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(true);

  // Handle route changes
  useEffect(() => {
    const handleStart = () => setIsAnimating(true);
    const handleComplete = () => {
      setTimeout(() => setIsAnimating(false), 1000); // Match this with your animation duration
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Stair animation */}
        {isAnimating && (
          <div className="h-screen text-white w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stair />
          </div>
        )}

        {/* Overlay fade */}
        {isAnimating && (
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-30"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}
          />
        )}

        {/* Content with delayed render */}
        {!isAnimating && children}
      </AnimatePresence>
    </>
  );
}