export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22608276-8f1776cedb6d248faba2c32c2';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
