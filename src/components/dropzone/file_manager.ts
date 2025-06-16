import { type Ref } from "vue";

interface TUploadableFile {
  file: File;
  id: string;
  url: string;
  status?: string;
}

class UploadableFile implements TUploadableFile {
  file: File;
  id: string;
  url: string;

  constructor(file: File) {
    this.file = file;
    this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
    this.url = URL.createObjectURL(file);
  }
}

export default function (files: Ref<TUploadableFile[]>) {
  function addFiles(newFiles: File[]) {
    const newUploadableFiles = [...newFiles]
      .map((file) => new UploadableFile(file))
      .filter((file) => !fileExists(file.id));
    files.value = files.value.concat(newUploadableFiles);
  }

  function fileExists(otherId: string) {
    return files.value.some(({ id }) => id === otherId);
  }

  function removeFile(file: TUploadableFile) {
    const index = files.value.indexOf(file);

    if (index > -1) files.value.splice(index, 1);
  }

  return { files, addFiles, removeFile };
}
