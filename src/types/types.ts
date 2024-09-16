export type TaskEvent = { title: string; description?: string; colId: string };
export type ColumnType = {
  title: string;
  id: string;
  tasks: { title: string; description?: string; status: string }[];
};
export type TaskType = { title: string; description?: string; status: string };
