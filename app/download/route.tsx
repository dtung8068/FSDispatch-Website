import path from 'node:path';
import AdmZip from 'adm-zip';

export async function GET() {
    const fileName = "FSDispatch_1.4.91.zip";
    const filePath = path.join(process.cwd(),
        "public", fileName); // Path to your file

    const zip = new AdmZip(filePath);
    const zipBuffer = zip.toBuffer();

    const headers = new Headers();
    headers.append('Content-Disposition', 'attachment; filename=archive.zip');
    headers.append('Content-Type', 'application/zip');

    return new Response(zipBuffer, {
        headers,
    });
}