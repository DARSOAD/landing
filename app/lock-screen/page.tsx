// app/lock-screen/page.tsx

'use client';

import LockScreenForm from '@/components/ui/auth/lock-screen-form';

const LockScreenPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
      <LockScreenForm />
    </div>
  );
};

export default LockScreenPage;
