import React from 'react';
import { useSelector } from 'react-redux';

export default function Username() {
  const userName = useSelector((state) => state.user.username);
  if (!userName) return;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}
