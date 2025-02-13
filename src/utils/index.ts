export const displayImage = (url:string) => {
  if(url&&url.includes('http')) {
    return url
  }
  return process.env.STRAPI_BASE_URL!+url
}