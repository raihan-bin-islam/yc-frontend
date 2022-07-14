//------- Hook Form Custom Validation Functions --------------//

export const isFutureDate = (date) => {
  const dateToday = new Date(); // today's date
  const dob = new Date(date); // date of birth

  return dob < dateToday;
};

export const fileTooLarge = (file) => {
  // Size of the file
  const { size } = file[0];
  console.log(size);
  // If size is less than 100KB return true
  return size < 102400;
};
//------- Hook Form Custom Validation Functions Ends--------------//
