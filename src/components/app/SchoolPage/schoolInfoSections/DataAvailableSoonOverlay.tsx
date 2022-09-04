import { FC, ReactNode } from 'react';

const DataAvailableSoonOverlay: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="relative">
    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-gray">
      Dane dostępne wkrótce
    </span>
    <div className="opacity-10 select-none">{children}</div>
  </div>
);

export default DataAvailableSoonOverlay;
