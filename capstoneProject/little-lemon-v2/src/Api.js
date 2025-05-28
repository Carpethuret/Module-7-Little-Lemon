export const fetchAPI = (date) => {
  const availableTimes = [
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ];
  return availableTimes;
};

export const submitAPI = (formData) => {
  console.log("Submitted booking data:", formData);
  return true;
};
