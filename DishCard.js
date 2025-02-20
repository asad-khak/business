import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function DishCard({ name, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <CardContent className="p-4 text-center">
          <h2 className="text-xl font-semibold text-yellow-900">{name}</h2>
        </CardContent>
      </Card>
    </motion.div>
  );
}
