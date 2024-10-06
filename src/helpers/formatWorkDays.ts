import { IWorkDay } from "../types";

export const formatWorkDays = (workDays: IWorkDay[]) => {
  if (!workDays?.length) return "Day and night";
  const openDays = workDays?.filter((day) => day.isOpen);

  if (openDays.length > 0) {
    return `${openDays[0].from} - ${openDays[0].to}`;
  }
};
