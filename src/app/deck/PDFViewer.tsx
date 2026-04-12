"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { Loader2 } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface PDFViewerProps {
  url: string;
  pageNumber: number;
  width: number;
  onLoadSuccess: (numPages: number) => void;
}

export default function PDFViewer({
  url,
  pageNumber,
  width,
  onLoadSuccess,
}: PDFViewerProps) {
  return (
    <div className="shadow-2xl">
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => onLoadSuccess(numPages)}
        loading={
          <div
            className="flex items-center justify-center"
            style={{ width, height: width * (9 / 16) }}
          >
            <Loader2 size={32} className="animate-spin text-white/40" />
          </div>
        }
      >
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading={
            <div
              className="flex items-center justify-center bg-white"
              style={{ width, height: width * (9 / 16) }}
            >
              <Loader2 size={24} className="animate-spin text-gray-300" />
            </div>
          }
        />
      </Document>
    </div>
  );
}
