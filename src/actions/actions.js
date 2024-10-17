"use server";

import Todo from "@/models/Todo";
import { dbConnect } from "@/database/dbConnect";
import { revalidatePath } from "next/cache";

export async function addTask(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  await dbConnect();
  console.log(title, description);

  const newTodo = await Todo.create({
    title,
    description,
  });

  revalidatePath("/dashboard");
  return newTodo;
}
