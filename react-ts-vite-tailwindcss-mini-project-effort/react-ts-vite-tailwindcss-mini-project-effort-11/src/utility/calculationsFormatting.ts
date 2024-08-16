export const getDaysInMonth = (month: number, year: number): Date[] => {
  const days: Date[] = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  for (let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
    days.push(new Date(date));
  }

  return days;
};

export const getFirstDayOfMonth = (month: number, year: number): number => {
  const firstDay = new Date(year, month, 1);
  return firstDay.getDay(); // 0-based index (0 = Sunday)
};