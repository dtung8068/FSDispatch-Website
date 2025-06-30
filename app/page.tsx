'use client'
import Link from 'next/link'
const fileName = "FSDispatch_1.4.91.zip";

export default function Home() {
  const downloadFSDispatch = async () => {
    try {
      const response = await fetch("/download/")
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Download failed:', error);
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ul className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            <Link href="/download/" onClick={downloadFSDispatch}>Download FSDispatch</Link>
          </li>
          <li>
            <Link href="https://www.paypal.com/donate?token=gCCQysy6oRI7b7ztuxUIPO3KHSnF86dkQ-S8zsZPYUbNrOQDusMbB8R2JjyokzSsN59Wjs0FWXo0v_Ok">Donate</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
