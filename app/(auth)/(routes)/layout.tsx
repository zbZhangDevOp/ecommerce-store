import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // the h-full classes are needed to make sure the layout takes up the entire screen
  return (
    <div className='flex justify-center items-center h-full'>{children}</div>
  );
}
