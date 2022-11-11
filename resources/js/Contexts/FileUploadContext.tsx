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
};

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

  const upload = useCallback(
    (file: File) => {
      setData('file', file);
    },
    [setData]
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setUrl('');
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
    () => ({ progress, url, upload, status, reset }),
    [progress, url, upload, status, reset]
  );

  return (
    <FileUploadContext.Provider value={value}>
      {children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadContextProvider;
