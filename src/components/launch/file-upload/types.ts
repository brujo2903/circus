export interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  onDrop: (file: File | null) => void;
  disabled?: boolean;
}

export interface DropzoneProps extends FileUploadProps {
  children: React.ReactNode;
}