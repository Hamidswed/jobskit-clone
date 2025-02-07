import { NextResponse } from "next/server";
import { User } from "@/types/user";

const users: User[] = [
  {
    id: 1,
    name: "Ali",
    email: "ali@example.com",
    phone: "09000000000",
    password: "password123",
    role: "USER",
    verified: true,
    phoneVerified: true,
    balance: 0,
    level: "basic",
    referralCode: "XYZ123",
    avatarId: 0,
    telegramUserId: 0,
    googleUserWithoutPassword: true,
  },
];

export async function POST(req: Request) {
  const { identifier, password } = await req.json();

  const user = users.find(
    (user) =>
      (user.email === identifier || user.phone === identifier) &&
      user.password === password
  );

  if (user) {
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "Username or password is not correct!" },
      { status: 401 }
    );
  }
}
