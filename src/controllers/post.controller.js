import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener posts" });
  }
};
export const createPost = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const post = await prisma.post.create({
      data: {
        name,
        userId: Number(userId),
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
};
export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error getting post" });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userId } = req.body;
    const post = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        userId: Number(userId),
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
};
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
};
