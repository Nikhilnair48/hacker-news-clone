const fetchNews = async (params) => {
  const response = await fetch(
    `https://hn.algolia.com/api/v1/search_by_date?query=...&page=${params.page}&numericFilters=points>10`,
    {
      method: "GET"
    }
  );
  return await response.json();
};

export { fetchNews };
