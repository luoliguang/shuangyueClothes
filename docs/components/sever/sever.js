// src/api.js
import axios from 'axios';

const baseUrl = 'https://7bu.top/api/v1/images';
const token = '1607|NhSDNdWduqwRvuIQDOvey1vsaTCQL93BFei0J6jc';
// const token = import.meta.env.VITE_COOKIE;


const getImages = async (albumId) => {
  try {
    const response = await axios.get(`${baseUrl}`, {
      params: {
        album_id: albumId,
      },
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    console.error('获取图片列表失败:', error);
    return null;
  }
};


const getImagesUrl = async (id) => {
  try {
    const res = await getImages(id)
    // console.log('res = ',res);
    
    const images = res.data.data.map(item => ({
      id: item.key,
      url: item.links.url,
      name: item.origin_name
    }))
    // console.log("图片数据：", images) 
    return images 
  } catch (error) {
    console.error('获取图片失败：', error)
    return []
  }
}


export { getImages, getImagesUrl };
