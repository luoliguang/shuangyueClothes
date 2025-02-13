import axios from 'axios';

const fetchFileList = async (accessToken, limit, parentFileId = '', startTime = null, endTime = null, lastFileId = null) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/api/v1/oss/file/list`;
    
    const headers = {
        'Authorization': accessToken,
        'Platform': 'open_platform'
    };

    const body = {
        parentFileId,
        limit,
        startTime,
        endTime,
        lastFileId,
        type: 1
    };

    try {
        const response = await axios.post(url, body, { headers });
        console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        console.error('请求图片列表失败:', error);
        throw error;
    }
};

const getAccessToken = async () => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/v1/access_token`;
  const headers = {
      'Platform': 'open_platform'
  };

  const body = {
      clientId: import.meta.env.VITE_CLIENT_ID,
      clientSecret: import.meta.env.VITE_CLIENT_SECRET,
  };

  try {
      const response = await axios.post(url, body, { headers });
      return response.data.data.accessToken;
  } catch (error) {
      console.error('AccessToken获取失败:', error);
      throw error;
  }
}

export { fetchFileList, getAccessToken };