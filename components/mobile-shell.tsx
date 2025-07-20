import React from 'react';

export const MobileShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mobile-shell">
      <div className="mobile-shell-content">
        {children}
      </div>
    </div>
  );
};
