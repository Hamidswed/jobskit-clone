// pages/api/job/all.detailed.ts
import { Job } from "@/types/job";
import type { NextApiRequest, NextApiResponse } from "next";

// Dummy detailed data for demonstration purposes
const detailedJobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    companyName: "Tech Corp",
    description: "Develop awesome applications.",
    location: "Remote",
    salary: 100000,
    requirements: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Product Manager",
    companyName: "Business Inc",
    description: "Manage product development cycles.",
    location: "New York",
    salary: 120000,
    requirements: ["Agile", "Communication"],
  },
  // سایر مشاغل را با جزئیات بیشتر به اینجا اضافه کنید
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // در اینجا می‌توانیم بررسی کنیم که آیا کاربر احراز هویت شده است
    // و سپس جزئیات مربوط به مشاغل را برگردانیم
    res.status(200).json(detailedJobs);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
