// 处理图片获取
 export const getIconUrl = (image: any) => {
    return new URL(`../icon/${image}`, import.meta.url).href;
  };
  
  export const getImageUrl = (image: any) => {
    return new URL(`../../assets/${image}`, import.meta.url).href;
  };

  
  