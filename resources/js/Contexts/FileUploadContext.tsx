import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

type FileUploadStatus = 'idle' | 'uploading' | 'success' | 'error';

type FileUploadContextType = {
  upload: (file: File) => void;
  reset: () => void;
  status: FileUploadStatus;
  url: string;
};

export const FileUploadContext = createContext<FileUploadContextType>(
  {} as FileUploadContextType
);

const FileUploadContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [status, setStatus] = useState<FileUploadStatus>('idle');
  const [url, setUrl] = useState<string>('TESTE');

  const upload = useCallback((file: File) => {
    setStatus('uploading');
    setTimeout(() => {
      setStatus('success');
      setUrl(URL.createObjectURL(file));
    }, 3000);
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setUrl('');
  }, []);

  const value = useMemo(
    () => ({ url, upload, status, reset }),
    [url, upload, status, reset]
  );

  return (
    <FileUploadContext.Provider value={value}>
      {children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadContextProvider;
