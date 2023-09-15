"use client";

import { trpc } from "@/app/_trpc/client";
import React, { useState } from "react";

const TodoList = () => {
  const getTodos = trpc.getTodos.useQuery();
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  const todos = getTodos.data;
  const [content, setContent] = useState<string>("");

  const handleSubmit = async () => {
    console.log(content);
    if (content !== "") {
      addTodo.mutate(content);
      setContent("");
    }
  };
  const checkTodo = async (todo: { id: number; completed: boolean }) => {
    
  }
  return (
    <div>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            <input
              id={`checkBox-${todo.id}`}
              type="checkbox"
              checked={!!todo.completed}
              onChange={() => {}}
            />
          </div>
        ))}
      </div>
      <input
        placeholder="hii"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
};

export default TodoList;
