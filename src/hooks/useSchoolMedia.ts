import { useState, useEffect } from 'react';
import {
  OFFICIAL_SCHOOL_PHOTOS,
  SchoolPhotoItem,
  getPhotoUrl,
  hasCustomPhoto,
  subscribeToMediaChanges,
  initializeMediaStore,
  storePhotoFile,
  matchFileToSlot,
  getCustomPhotoCount,
  clearAllCustomPhotos,
} from '../utils/mediaStore';

export function useSchoolMedia() {
  const [, setTick] = useState(0);

  useEffect(() => {
    initializeMediaStore();
    const unsubscribe = subscribeToMediaChanges(() => {
      setTick((t) => t + 1);
    });
    return unsubscribe;
  }, []);

  return {
    photos: OFFICIAL_SCHOOL_PHOTOS,
    getPhotoUrl,
    hasCustomPhoto,
    customCount: getCustomPhotoCount(),
    storePhotoFile,
    matchFileToSlot,
    clearAllCustomPhotos,
  };
}
