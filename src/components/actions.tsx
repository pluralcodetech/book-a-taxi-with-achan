const handleErrors = (response: any) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
export { handleErrors };