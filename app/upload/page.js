"use client";
import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  return (
    <main className="bg-slate-50 px-6 py-10 min-h-screen">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Upload your Resume
        </h1>
        <p className="mt-2 text-slate-600">
          upload your resume in PDF format to get an AI-powered analysis
        </p>
        <div className="mt-10 rounded-xl border-2 border-dashed border-slate-300 bg-white text-center">
          <h2 className="text-xl" font-semibold text-slate-900>
            Upload Resume
          </h2>
          <p className="mt-6 text-slate-500 text-sm">
            select resume in PDF format
          </p>
          <input
            id="resume"
            className="hidden"
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label
            className="mt-6 inline-block cursor-pointer bg-blue-600 text-white rounded-lg font-semibold px-6 py-3 hover:bg-blue-700 mb-2"
            htmlFor="resume"
          >
            Chose PDF
          </label>
          {file && (
            <p className="mt-4 text-sm text-green-700">
              selected file name : {file.name}
            </p>
          )}
          {file && (
            <button>Analyze Resume</button>
          )}
        </div>
      </div>
    </main>
  );
}
