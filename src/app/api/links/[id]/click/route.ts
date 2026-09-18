import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "링크 id가 필요합니다." }, { status: 400 });
  }

  const db = await getDb();
  await db
    .collection("linkClicks")
    .updateOne(
      { linkId: id },
      { $inc: { count: 1 }, $setOnInsert: { linkId: id } },
      { upsert: true }
    );

  return NextResponse.json({ ok: true });
}
