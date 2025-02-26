# **To-Do List with Next.js, TailwindCSS, and Ant Design**

## **Overview**

โปรเจกต์นี้เป็นระบบ **Interactive To-Do List** ที่จัดการข้อมูลของ **Fruit** และ **Vegetable** โดยมีคอลัมน์สามส่วน คือ:

- **Main List** สำหรับแสดงรายการเริ่มต้น.
- **Fruit Column และ Vegetable Column** แบ่งประเภทของรายการ.
- ฟังก์ชันหลัก:
  - ย้ายรายการระหว่างคอลัมน์เมื่อมีการคลิก.
  - ส่งกลับ Main List อัตโนมัติใน **5 วินาที**.
  - ย้ายกลับ Main List ได้ทันทีเมื่อคลิกที่รายการใน Fruit หรือ Vegetable Column.

---

## **Features**

1. **Main List (คอลัมน์ซ้าย):**

   - แสดงรายการเริ่มต้นทั้งหมด (Fruit & Vegetable).
   - คลิกที่รายการเพื่อย้ายไปยัง Fruit หรือ Vegetable Column ตามประเภท.

2. **Fruit และ Vegetable Columns:**

   - แสดงรายการที่ถูกคลิกจาก Main List.
   - เมื่อคลิกที่รายการในคอลัมน์ด้านขวา รายการจะถูกย้ายกลับ Main List ทันที.

3. **Dynamic Timeout (5 วินาที):**
   - เมื่อรายการใน Fruit หรือ Vegetable Column จะถูกย้ายกลับ Main List **อัตโนมัติ** หลังรอ 5 วินาที.

---

## **Tech Stack**

### **Frontend**

- **Next.js**: สำหรับสร้างและจัดการหน้าเว็บ.
- **React.js**: ใช้จัดการการทำงานของ State และ Components.

### **Styling**

- **TailwindCSS**: ควบคุม Layout และปรับแต่ง UI.
- **Ant Design**: ใช้ส่วนประกอบ UI สำเร็จรูป เช่น `Card`, `Button`.

---

## **Installation**

### 1. Clone Repository

```bash
git clone https://github.com/sukchaikarin/frontend-assignment.git
cd frontend-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

---

## **How it Works**

### **Main List**

- รายการเริ่มต้นทั้งหมดจะถูกโหลดจากอาร์เรย์ `initialData`.
- เมื่อมีการคลิก:
  - รายการจะถูกลบออกจาก Main List.
  - และเพิ่มไปยังคอลัมน์ที่เหมาะสม (Fruit/Vegetable).

### **Fruit/Vegetable Columns**

- เมื่อ Item ถูกเพิ่มเข้าคอลัมน์ใด คอลัมน์นั้นจะตั้ง Timer (**5 วินาที**) เพื่อย้ายกลับไปยัง Main List.
- เมื่อคลิกปุ่มในคอลัมน์ใด รายการจะถูกย้ายกลับไปยัง **Main List ทันที** และยกเลิก Timer.

### **Timeout Logic**

- Timer ถูกจัดการโดย `setTimeout`.
- ใช้ `Map<string, NodeJS.Timeout>` เพื่อบันทึก Timeout ID ของแต่ละรายการ:
  - Clear Timeout ทันทีเมื่อคลิกคืนจาก Fruit/Vegetable Column กลับไปยัง Main List.

---

## **Code Structure**

```bash
.
├── public/ # เก็บไฟล์ Static เช่น รูปภาพหรือ favicon
├── src/ # โฟลเดอร์หลักสำหรับซอร์สโค้ดทั้งหมด
│ ├── app/ # โฟลเดอร์สำหรับ Pages และ Layout ของ Next.js
│ │ ├── favicon.ico # ไฟล์ Favicon สำหรับเว็บแอป
│ │ ├── globals.css # สไตล์ CSS ทั่วไปของโปรเจกต์
│ │ ├── layout.tsx # ไฟล์ Layout หลักสำหรับหน้าต่างๆ
│ │ ├── page.tsx # Entry Page หรือ Homepage ของแอป
│ ├── components/ # เก็บ Components ที่สามารถนำกลับมาใช้ซ้ำ
│ ├── utils/ # Utility Functions และฟังก์ชันช่วยเหลือ
├── .gitignore # ระบุไฟล์/โฟลเดอร์ที่ไม่ต้องการให้ Git ติดตาม
├── next.config.ts # การตั้งค่าเฉพาะของ Next.js
├── next-env.d.ts # ประเภท (Type) ที่เกี่ยวข้องกับ Next.js
├── package-lock.json # ล็อกไฟล์ Dependency
├── package.json # รายละเอียดของ Dependencies และ Scripts
├── postcss.config.mjs # การตั้งค่า PostCSS
├── tailwind.config.ts # การตั้งค่า TailwindCSS
├── tsconfig.json # การตั้งค่า TypeScript
└── README.md # ไฟล์คำอธิบายโปรเจกต์
```

---

## **Demo**

URL ตัวอย่าง (เมื่อ Deploy ด้วย Vercel หรือโฮสอื่นๆ):  
[https://<project-name>.vercel.app](https://<project-name>.vercel.app)

---
