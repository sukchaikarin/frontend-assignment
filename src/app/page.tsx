"use client";
import React, { useState } from "react";
import { Button, Card } from "antd";

interface Item {
  type: "Fruit" | "Vegetable";
  name: string;
}

// ตัวอย่างข้อมูลเริ่มต้น (Main List)
const initialData: Item[] = [
  { type: "Fruit", name: "Apple" },
  { type: "Vegetable", name: "Broccoli" },
  { type: "Vegetable", name: "Mushroom" },
  { type: "Fruit", name: "Banana" },
  { type: "Vegetable", name: "Tomato" },
  { type: "Fruit", name: "Orange" },
  { type: "Fruit", name: "Mango" },
];

const Home: React.FC = () => {
  const [mainList, setMainList] = useState<Item[]>([...initialData]); // Main List
  const [fruitList, setFruitList] = useState<Item[]>([]); // Fruit Column
  const [vegetableList, setVegetableList] = useState<Item[]>([]); // Vegetable Column
  const [timeouts, setTimeouts] = useState<Map<string, NodeJS.Timeout>>(
    new Map()
  ); // ติดตาม Timeout

  // ฟังก์ชัน Handle คลิกปุ่มจาก Main List
  const handleMainClick = (item: Item) => {
    // เอา Item ออกจาก Main List
    setMainList((prev) => prev.filter((i) => i.name !== item.name));

    if (item.type === "Fruit") {
      setFruitList((prev) => [...prev, item]); // ย้ายไปที่ Fruit Column
    } else {
      setVegetableList((prev) => [...prev, item]); // ย้ายไปที่ Vegetable Column
    }

    // ตั้ง Timeout 5 วินาที
    const timeoutId = setTimeout(() => {
      // ดึงกลับไปยัง Main List
      setMainList((prev) => [...prev, item]);
      if (item.type === "Fruit") {
        setFruitList((prev) => prev.filter((i) => i.name !== item.name));
      } else {
        setVegetableList((prev) => prev.filter((i) => i.name !== item.name));
      }
      timeouts.delete(item.name); // ลบ Timeout ที่ทำเสร็จแล้ว
    }, 5000);

    // บันทึก ID ของ Timeout
    setTimeouts((prev) => new Map(prev).set(item.name, timeoutId));
  };

  // ฟังก์ชัน Handle คลิกผลไม้หรือผักใน Column
  const handleColumnClick = (item: Item) => {
    if (timeouts.has(item.name)) {
      clearTimeout(timeouts.get(item.name)!); // Clear Timeout
      setTimeouts((prev) => {
        const newMap = new Map(prev);
        newMap.delete(item.name);
        return newMap;
      });
    }
    if (item.type === "Fruit") {
      setFruitList((prev) => prev.filter((i) => i.name !== item.name));
    } else {
      setVegetableList((prev) => prev.filter((i) => i.name !== item.name));
    }
    setMainList((prev) => [...prev, item]); // ย้ายกลับไปยัง Main List
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        To Do List with Ant Design
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {/* Main List */}
        <Card title="Main List" className="col-span-1">
          {mainList.map((item) => (
            <Button
              key={item.name}
              className="mb-2 w-full"
              onClick={() => handleMainClick(item)}
            >
              {item.name}
            </Button>
          ))}
        </Card>

        {/* Fruit Column */}
        <Card title="Fruits" className="col-span-1 bg-orange-50">
          {fruitList.map((item) => (
            <Button
              key={item.name}
              type="primary"
              danger
              className="mb-2 w-full"
              onClick={() => handleColumnClick(item)}
            >
              {item.name}
            </Button>
          ))}
        </Card>

        {/* Vegetable Column */}
        <Card title="Vegetables" className="col-span-1 bg-green-50">
          {vegetableList.map((item) => (
            <Button
              key={item.name}
              type="primary"
              className="mb-2 w-full"
              onClick={() => handleColumnClick(item)}
            >
              {item.name}
            </Button>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default Home;
