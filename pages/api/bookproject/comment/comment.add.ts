import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const { userId, isbn, isbn13, content, displayName, title } = JSON.parse(
    req.body
  );

  const document = await prisma.comment.create({
    data: { userId, isbn, isbn13, content, displayName, title },
  });

  console.log("코멘트 저장되었습니다.");
  res.status(200).json({ message: "포스트 끝났어용" });
}
