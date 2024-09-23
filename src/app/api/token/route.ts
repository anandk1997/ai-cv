import { customErrRes } from "@/lib/utils";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { access, refresh, user } = await request.json();

    if (!access) customErrRes("Access token is required", 400);
    if (!refresh) customErrRes("Refresh token is required", 400);
    if (!user) customErrRes("User details is required", 400);

    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    cookies().set("access", access, { expires, httpOnly: true });
    cookies().set("refresh", refresh, { expires, httpOnly: true });
    cookies().set("user", user, { expires, httpOnly: true });

    return NextResponse.json({ data: "orders" }, { status: 200 });
  } catch (error) {
    console.error("error", error);

    return customErrRes("Internal Server Error", 500);
  }
}

export async function GET() {
  try {
    const access = cookies().get("access")?.value;
    const refresh = cookies().get("refresh")?.value;
    const user = cookies().get("user")?.value;

    let parsedUser;

    if (user) {
      parsedUser = JSON.parse(user);
    }

    return NextResponse.json(
      {
        data: {
          access,
          refresh,
          user: parsedUser,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("error", error);

    return customErrRes("Internal Server Error", 500);
  }
}

export async function DELETE() {
  try {
    cookies().set("access", "", { expires: new Date(0) });
    cookies().set("refresh", "", { expires: new Date(0) });
    cookies().set("user", "", { expires: new Date(0) });

    return NextResponse.json(
      {
        message: "Logged out successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("error", error);

    return customErrRes("Internal Server Error", 500);
  }
}
