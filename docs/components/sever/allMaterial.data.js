import { getImagesUrl } from './sever'; // 导入 getImagesUrl 函数
import { apiNumbers } from '../data/AllMaterial.js'; // 导入 apiNumbers
const apiNumbersTest = {
  'numDetail2': 1521, // 面料细节
}

let cachedData = null; // 用于缓存数据

export default {
  async load() {
    if (cachedData) {
      return cachedData; // 如果缓存中有数据，直接返回
    }

    // const albumIds = Object.values(apiNumbers); // 获取所有的请求 ID
    const albumIds = Object.values(apiNumbersTest); // 获取所有的请求 ID
    const results = await Promise.all(albumIds.map(id => getImagesUrl(id))); // 并发请求所有的图片数据
    // 调试信息
    
    // console.log('获取到的图片数据:', results);

    return results.flat(); // 使用 flat() 合并所有数组
  }
} 