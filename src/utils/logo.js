const getLogo = model => {
  if (model.toLowerCase().includes('apple')) {
    return 'apple'; // 替换为 Audi logo 图片的路径
  }

  if (model.toLowerCase().includes('xiaomi')) {
    return 'xiaomi';
  }
  if (model.toLowerCase().includes('fujifilm')) {
    return 'fujifilm';
  }
  if (model.toLowerCase().includes('canon')) {
    return 'canon';
  }
  if (model.toLowerCase().includes('nikon')) {
    return 'nikon';
  }
  if (model.toLowerCase().includes('panasonic')) {
    return 'panasonic';
  }
  if (model.toLowerCase().includes('leica')) {
    return 'leica';
  }
  if (model.toLowerCase().includes('sony')) {
    return 'sony';
  }
  if (model.toLowerCase().includes('hasselblad')) {
    return 'hasselblad';
  }
  if (model.toLowerCase().includes('ricoh')) {
    return 'ricoh';
  }
  if (model.toLowerCase().includes('huawei')) {
    return 'huawei';
  }
  if (model.toLowerCase().includes('samsung')) {
    return 'samsung';
  }

  //   else {
  //     return 'audi_logo.jpg'; // 替换为 Audi logo 图片的路径
  //   }
};

export default getLogo;
