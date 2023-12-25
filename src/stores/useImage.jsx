import {create} from 'zustand';

const useImage = create(set => ({
  imageURI: null,

  setImageURI: image => set(state => ({imageURI: image})),
}));

export default useImage;
