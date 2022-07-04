//------- Hook Form Custom Validation Functions --------------//

export const isFutureDate = (value) => {
  const dateToday = new Date(); // today's date
  const dob = new Date(value); // date of birth

  return dob < dateToday;
};

//------- Hook Form Custom Validation Functions Ends--------------//
