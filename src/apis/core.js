import Axios from "axios";

const apiUrl = `${process.env.GATSBY_CORE_BASE_URL}/api`;//https://core.redlion.com/api';
const jsonApiUrl = `${process.env.GATSBY_CORE_BASE_URL}/jsonapi`;


const core = Axios.create({
  baseURL: apiUrl,
  headers: {
    'api-key': process.env.GATSBY_CORE_API_KEY
  }
});
const coreContent = Axios.create({
  baseURL: jsonApiUrl,
  headers: {
    'api-key': process.env.GATSBY_CORE_API_KEY
  }
})

export const coreGet = async (url, source = null) => {
  let data = null;
  let options = {};
  if (source !== null) {
    options.cancelToken = source.token;
  }
  try {
    const response = await core.get(url, options);
    if (response.status === 200) {
      data = response.data;
    }

  } catch (error) {
    console.log(error);
    data = {
      error: true,
      message: error.message
    };
  }
  return data;
}

export const coreGetContent = async (url, source = null) => {
  let data = null;
  let options = {};
  if (source !== null) {
    options.cancelToken = source.token;
  }
  try {
    const response = await coreContent.get(url, options);
    if (response.status === 200) {
      data = response.data;
    }

  } catch (error) {
    console.log(error);
  }
  return data;
}

export const coreRequest = async (param) => {
  let url = param.url,
    data = param.data || {},
    method = param.method || 'post',
    source = param.source || null,
    options = {},
    responseData = null;

  if (source !== null) {
    options.cancelToken = source.token;
  }
  try {
    let response;
    if (method === 'post') {
      response = await core.post(url, data, options);
    } else if (method === 'patch') {
      response = await core.patch(url, data, options);
    } else if (method === 'put') {
      response = await core.put(url, data, options);
    }
    if (response.status === 200 || response.status === 201) {
      responseData = response.data || response;
    }

  } catch (error) {
    console.log(error);
    responseData = {
      error: true,
      message: 'Oops!! Something went wrong, please try again.',
      apiResponse: error.response && error.response.data
    };
  }
  return responseData;
}
