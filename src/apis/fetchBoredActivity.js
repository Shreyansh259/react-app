const fetchBoredActivity = async recreationType => {
  // Delay a little bit to enjoy the logo!!
  await new Promise(resolve => setTimeout(resolve, 200));
  const apiDataLink = `https://www.boredapi.com/api/activity?type=${recreationType}`;
  const response = await fetch(apiDataLink);
  const data = await response.json();
  return data;
};

export default fetchBoredActivity;
