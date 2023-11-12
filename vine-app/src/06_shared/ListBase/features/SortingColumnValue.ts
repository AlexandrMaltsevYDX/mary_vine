// // ascending, descending
// // number, string

// const stringValueSorting: <T>  = (
//   array: T[],
//   order: "asc" | "desc",
//   column: keyof T,
// ): T[] =>
//   {
//   return [...array].sort((a, b) => {
//     const nameA = a[column].toUpperCase(); // Используйте переданное имя столбца
//     const nameB = b[column].toUpperCase();

//     if (nameA < nameB) {
//       return order === "asc" ? -1 : 1;
//     }
//     if (nameA > nameB) {
//       return order === "asc" ? 1 : -1;
//     }
//     return 0;
//   });
// };

export const numberValueSorting = <T>(
  persons: T[],
  ord: "asc" | "desc",
  column: keyof T,
): T[] => {
  return [...persons].sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];

    if (valueA < valueB) {
      return ord === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return ord === "asc" ? 1 : -1;
    }

    return 0;
  });
};
