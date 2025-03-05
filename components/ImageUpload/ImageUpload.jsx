"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ImageUpload({ value, onChange }) {
  const [preview, setPreview] = useState(value);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      const data = await response.json();
      const imageUrl = data.url;
      setPreview(imageUrl);
      onChange(imageUrl);
    } catch (error) {
      console.error('Upload error:', error);
      alert(error.message || 'Failed to upload image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleFileChange}
          className="hidden"
          id="imageUpload"
        />
        <label
          htmlFor="imageUpload"
          className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded cursor-pointer"
        >
          {loading ? 'Uploading...' : 'Choose Image'}
        </label>
        {loading && <div className="animate-spin">⌛</div>}
      </div>

      {preview && (
        <div className="relative w-full h-48">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
    </div>
  );
}