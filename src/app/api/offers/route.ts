import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { login, password } = req.body;
      const newUser = await prisma.user.create({
        data: {
          login,
          password,
        },
      });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при создании пользователя' });
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешен' });
  }
}
