// src/api.js
import axios from 'axios';

const baseUrl = 'https://7bu.top/api/v1/images';
const token = '1607|NhSDNdWduqwRvuIQDOvey1vsaTCQL93BFei0J6jc';

const getImages = async (albumId) => {
  try {
    const response = await axios.get(`${baseUrl}`, {
      params: {
        album_id: albumId
      },
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      }
    });
    // console.log('图床返回的图片数据:', response.data);
    return response.data;
  } catch (error) {
    console.error('获取图片列表失败:', error);
    return null;
  }
};

export { getImages };
