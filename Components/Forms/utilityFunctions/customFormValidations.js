//------- Hook Form Custom Validation Functions --------------//

export const isFutureDate = (date) => {
  const dateToday = new Date(); // today's date
  const dob = new Date(date); // date of birth

  // return true if date of birth is less than today's date
  return dob < dateToday;
};

export const fileTooLarge = (file) => {
  // Size of the file
  const { size } = file[0];

  // If size is less than 100KB return true
  return size < 102400;
};

export const supportedFileTypes = (file) => {
  // Type of the file
  const { type } = file[0];

  // Return True if the file types are jpeg or png
  return type === "image/jpeg" || type === "image/png";
};
//------- Hook Form Custom Validation Functions Ends--------------//
