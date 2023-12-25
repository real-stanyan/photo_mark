import {create} from 'zustand';

const useExif = create(set => ({
  width: null,
  height: null,
  model: null,
  brand: null,
  ISO: null,
  shutterSpeed: null,
  f: null,
  exif: {},

  setWidth: width => set(state => ({width: width.toString()})),
  setHeight: height => set(state => ({height: height.toString()})),
  setBrand: brand => set(state => ({brand: brand.toString()})),
  setModel: model => set(state => ({model: model.toString()})),
  setISO: ISO => set(state => ({ISO: ISO.toString()})),
  setShutterSpeed: shutterSpeed =>
    set(state => ({shutterSpeed: shutterSpeed.toString()})),
  setF: f => set(state => ({f: f.toString()})),
  setExif: exif => set(state => ({exif: exif})),
}));

export default useExif;
