import { useDropzone } from 'react-dropzone'

import * as S from './styles'

type DropzoneProps = {
  onDrop: (acceptedFiles: File[]) => void
  filePreview?: string
}

export const Dropzone: React.FC<DropzoneProps> = ({ onDrop, filePreview }) => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        'image/png': ['.png'],
        'image/jpeg': ['.jpeg'],
        'image/jpg': ['.jpg']
      }
    })

  return (
    <S.Container {...getRootProps({ isDragAccept, isDragReject, isFocused })}>
      <input {...getInputProps()} />
      {!filePreview ? (
        <p>
          Arraste e solte uma imagem aqui,
          <br /> ou clique para selecionar o arquivo
        </p>
      ) : (
        <S.Image src={filePreview} alt="Image" />
      )}
    </S.Container>
  )
}
