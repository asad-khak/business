import React from "react";
import DishCard from "../components/DishCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const dishes = [
  { name: "Пельмені", image: "/images/pelmeni.jpg" },
  { name: "Вареники (Pierogi)", image: "/images/varenyky.jpg" },
  { name: "Супи", image: "/images/soups.jpg" },
  { name: "Блини", image: "/images/blini.jpg" },
  { name: "Сирники", image: "/images/syrnyky.jpg" },
  { name: "Голубці", image: "/images/holubtsi.jpg" },
  { name: "Комплексні обіди", image: "/images/complex-lunch.jpg" },
  { name: "Компот", image: "/images/compote.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-yellow-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Український ресторан
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {dishes.map((dish, index) => (
          <DishCard key={index} name={dish.name} image={dish.image} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Button className="px-6 py-3 bg-yellow-600 text-white text-lg rounded-xl shadow-md hover:bg-yellow-700 transition">
          Замовити столик
        </Button>
      </div>
    </div>
  );
}
