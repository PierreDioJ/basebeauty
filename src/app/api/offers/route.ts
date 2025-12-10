import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email } = req.body;
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
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
