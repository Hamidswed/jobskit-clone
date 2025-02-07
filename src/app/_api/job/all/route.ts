import { Job } from "@/types/job";
import type { NextApiRequest, NextApiResponse } from "next";
import { runCors } from "../../../../middleware/corsMiddleware";

// Dummy data for demonstration purposes
const jobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    companyName: "Tech Corp",
    description: "Develop awesome applications.",
    location: "Remote",
  },
  {
    id: 2,
    title: "Product Manager",
    companyName: "Business Inc",
    description: "Manage product development cycles.",
    location: "New York",
  },
];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     const { page = 1, limit = 10 } = req.query;
//     const startIndex = (Number(page) - 1) * Number(limit);
//     const endIndex = startIndex + Number(limit);
//     const resultJobs = jobs.slice(startIndex, endIndex);

//     res.status(200).json(resultJobs);
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runCors(req, res);
  if (req.method === "GET") {
    // به سادگی همه شغل‌ها را برمی‌گردانیم
    res.status(200).json(jobs);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
