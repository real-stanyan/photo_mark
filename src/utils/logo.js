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

  //   else {
  //     return 'audi_logo.jpg'; // 替换为 Audi logo 图片的路径
  //   }
};

export default getLogo;
