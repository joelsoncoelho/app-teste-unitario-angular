import { Photo } from "../interfaces/photo";

export function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: ''
    });
  }
  return photos;
}

export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value != null;
}
