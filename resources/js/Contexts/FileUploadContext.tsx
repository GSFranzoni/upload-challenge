import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Progress } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

type FileUploadStatus = 'idle' | 'uploading' | 'success' | 'error';

type FileUploadContextType = {
  upload: (file: File) => void;
  reset: () => void;
  status: FileUploadStatus;
  url: string;
  progress: Progress | null;
  error: string | null;
};

const MAX_FILE_SIZE_5_MB = 1024 * 1024 * 5;

const allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];

export const FileUploadContext = createContext<FileUploadContextType>(
  {} as FileUploadContextType
);

const FileUploadContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { data, setData, post, progress } = useForm<{ file: File | undefined }>(
    {
      file: undefined,
    }
  );

  const [status, setStatus] = useState<FileUploadStatus>('idle');

  const [url, setUrl] = useState<string>('');

  const [error, setError] = useState<string>('');

  const upload = useCallback(
    (file: File) => {
      if (!allowedTypes.includes(file.type)) {
        setError('File type not allowed');
        return setStatus('error');
      }
      if (file.size > MAX_FILE_SIZE_5_MB) {
        setError('File size too large');
        return setStatus('error');
      }
      return setData('file', file);
    },
    [setData]
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setUrl('');
    setError('');
  }, []);

  useEffect(() => {
    if (!data.file) {
      return;
    }
    setStatus('uploading');
    post('/upload', {
      data: {
        file: data.file as File,
      },
      replace: true,
      onSuccess: (page) => {
        setStatus('success');
        setUrl(page?.props?.fileUrl as string);
      },
      onError: () => {
        setStatus('error');
      },
    });
  }, [data.file]);

  const value = useMemo(
    () => ({ progress, url, upload, status, reset, error }),
    [progress, url, upload, status, reset, error]
  );

  return (
    <FileUploadContext.Provider value={value}>
      {children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadContextProvider;
