export const TableBase: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <table className="border-collapse table-auto w-full mt-8">{children}</table>
  );
};

export const THead: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <thead className="bg-white dark:bg-slate-800">{children}</thead>;
};

export const Th: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left">
      {children}
    </th>
  );
};

export const TBody: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <tbody className="bg-white dark:bg-slate-800">{children}</tbody>;
};

export const Td: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
      {children}
    </td>
  );
};
