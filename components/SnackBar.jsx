'use client';
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SnackBar({isOpen, message}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex flex-row-reverse sticky top-16 z-50"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
        >
          <p className="bg-green-400 text-background px-3 py-2 max-w-fit m-4 rounded-sm">
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
