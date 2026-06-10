"use client";

import React, { useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

// Dynamically import ReactQuill to prevent SSR issues (document is not defined)
const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-md">Loading editor...</div>
});

const FONT_SIZES = ['12px', '14px', '16px', '18px', '20px', '24px', '32px', '40px', '48px', '56px', '64px'];

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function RichTextEditor({ value, onChange, placeholder, className }: RichTextEditorProps) {
  useEffect(() => {
    // Register custom font sizes with Quill on mount
    import('react-quill-new').then((ReactQuillModule) => {
      const Quill = ReactQuillModule.Quill;
      const Size = Quill.import('attributors/style/size');
      Size.whitelist = FONT_SIZES;
      Quill.register(Size, true);
    });
  }, []);

  // Memoize modules to avoid unnecessary re-renders
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'size': FONT_SIZES }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }), []);

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'list', 'indent',
    'align',
    'blockquote', 'code-block',
    'link', 'image', 'video'
  ];

  return (
    <div className={`rich-text-container ${className || ''}`}>
      <ReactQuill 
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder || 'Write your content here...'}
        className="bg-white rounded-md flex flex-col"
      />
      <style jsx global>{`
        .rich-text-container .quill {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .rich-text-container .ql-toolbar {
          position: sticky;
          top: 0;
          z-index: 10;
          background: white;
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
        }
        .rich-text-container .ql-container {
          min-height: 400px;
          max-height: 600px;
          font-family: inherit;
          font-size: 16px;
          overflow-y: auto;
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
        }
        .rich-text-container .ql-editor {
          min-height: 100%;
        }
      `}</style>
    </div>
  );
}
