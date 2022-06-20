import React from "react";
import { useForm } from "react-hook-form";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";

// CSS
import styles from "./ExposureVisitForm.module.scss";

const ExposureVisitForm = () => {
  // Style ClassName
  const {
    exposureForm,
    exposureFormHeader,
    exposureFormBody,
    personalInfoContainer,
    headingContainer,
    purposeBox,
    familyNameBox,
    firstNameBox,
    dobBox,
    durationBox,
    startDateBox,
    nationalityBox,
    genderBox,
    imageFileBox,
    passportNumberBox,
    mailingAddBox,
    telephoneNoBox,
    residenceBox,
    mobilePhoneBox,
    emailBox,
    box,
    educationInfoContainer,
    institutionHeading,
    institutionField,
    periodHeading,
    periodFromHeading,
    periodFromField,
    periodToHeading,
    periodToField,
    majorHeading,
    majorField,
    qualificationHeading,
    qualificationField,
    employmentStatusContainer,
    orgField,
    orgHeader,
    desigHeader,
    desigField,
    sinceHeader,
    sinceField,
    responHeader,
    responField,
    questionOne,
    ansOne,
    questionTwo,
    ansTwo,
    questionThree,
    ansThree,
    questionFour,
    ansFour,
    questionFive,
    ansFive,
  } = styles;

  //   useForm API
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(watch("purpose"));
  };

  return (
    <div className={exposureForm}>
      <div className={exposureFormHeader}>
        <HeroBannerSmall title="Exposure Visit Form" />
      </div>
      <div className={`${exposureFormBody} container-layout`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={personalInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>
                Apply at-least 1 months before start date; Facilitation Fee $50
                for a week
              </p>
            </div>
            <div className={`${purposeBox} ${box}`}>
              <label for="purpose">Purpose of Visit</label>
              <input id="purpose" type="text" {...register("purpose")} />
            </div>
            <div className={`${familyNameBox} ${box}`}>
              <label for="familyName">Family Name</label>
              <input id="familyName" type="text" {...register("familyName")} />
            </div>
            <div className={`${firstNameBox} ${box}`}>
              <label for="firstName">First Name</label>
              <input id="firstName" type="text" {...register("firstName")} />
            </div>
            <div className={`${dobBox} ${box}`}>
              <label for="dob">Date of Birth</label>
              <input id="dob" type="date" {...register("dob")} />
            </div>
            <div className={`${durationBox} ${box}`}>
              <label for="duration">Expected Duration</label>
              <input id="duration" type="number" {...register("duration")} />
            </div>
            <div className={`${startDateBox} ${box}`}>
              <label for="startDate">Start Date</label>
              <input id="startDate" type="date" {...register("startDate")} />
            </div>
            <div className={`${nationalityBox} ${box}`}>
              <label for="nationality">Nationality</label>
              <input
                id="nationality"
                type="text"
                {...register("nationality")}
              />
            </div>
            <div className={`${genderBox} ${box}`}>
              <label for="gender">Gender</label>
              <select {...register("gender")}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={`${passportNumberBox} ${box}`}>
              <label for="passportNumber">Passport Number</label>
              <input
                id="passportNumber"
                type="text"
                {...register("passportNumber")}
              />
            </div>
            <div className={`${imageFileBox} ${box}`}>
              <p>Recent Photo</p>
              {/* <input id="imageFile" type="file" {...register("imageFile")} /> */}
            </div>
            <div className={`${mailingAddBox} ${box}`}>
              <label for="mailingAdd">Mailing Address</label>
              <input id="mailingAdd" type="text" {...register("mailingAdd")} />
            </div>
            <div className={`${telephoneNoBox} ${box}`}>
              <label for="telephoneNo">Telephone No.</label>
              <input id="telephoneNo" type="tel" {...register("telephoneNo")} />
            </div>
            <div className={`${residenceBox} ${box}`}>
              <label for="residence">Residence</label>
              <input id="residence" type="text" {...register("residence")} />
            </div>
            <div className={`${mobilePhoneBox} ${box}`}>
              <label for="mobilePhone">Mobile Phone</label>
              <input
                id="mobilePhone"
                type="text"
                {...register("mobilePhone")}
              />
            </div>
            <div className={`${emailBox} ${box}`}>
              <label for="email">Email Address</label>
              <input id="email" type="text" {...register("email")} />
            </div>
          </div>
          <div className={educationInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Education (in chronological order)</p>
            </div>
            <div className={`${institutionHeading} ${box}`}>
              <p>School, College, University, Etc. Attended / Attending</p>
            </div>
            <div className={`${institutionField} ${box}`}>
              <p>field</p>
            </div>
            <div className={`${periodHeading} ${box}`}>
              <p>Period</p>
            </div>
            <div className={`${periodFromHeading} ${box}`}>
              <p>From (month/year)</p>
            </div>
            <div className={`${periodFromField} ${box}`}>
              <p>From Field</p>
            </div>
            <div className={`${periodToHeading} ${box}`}>
              <p>To (month/year)</p>
            </div>
            <div className={`${periodToField} ${box}`}>
              <p>To Field</p>
            </div>
            <div className={`${majorHeading} ${box}`}>
              <p>Major</p>
            </div>
            <div className={`${majorField} ${box}`}>
              <p>Major Field</p>
            </div>
            <div className={`${qualificationHeading} ${box}`}>
              <p>Qualification Obtained/ to be obtained</p>
            </div>
            <div className={`${qualificationField} ${box}`}>
              <p>Qualification Field</p>
            </div>
          </div>
          <div className={employmentStatusContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Current Employment Status</p>
            </div>
            <div className={`${orgHeader} ${box}`}>
              <p>Name of Organization</p>
            </div>
            <div className={`${orgField} ${box}`}>
              <p>Field</p>
            </div>
            <div className={`${desigHeader} ${box}`}>
              <p>Designation</p>
            </div>
            <div className={`${desigField} ${box}`}>
              <p>Field</p>
            </div>
            <div className={`${sinceHeader} ${box}`}>
              <p>Since</p>
            </div>
            <div className={`${sinceField} ${box}`}>
              <p>Field</p>
            </div>
            <div className={`${responHeader} ${box}`}>
              <p>Responsibilities</p>
            </div>
            <div className={`${responField} ${box}`}>
              <p>Field</p>
            </div>
            <div className={`${questionOne} ${box}`}>
              <p>
                How will an exposure visit at the Yunus Centre apply to your
                professional goals?
              </p>
            </div>
            <div className={`${ansOne} ${box}`}>
              <p>Field</p>
            </div>
            <div className={`${questionTwo} ${box}`}>
              <p>What does the future of Social Business look like to you?</p>
            </div>
            <div className={`${ansTwo} ${box}`}>
              <p>Field</p>
            </div>
            <div className={`${questionThree} ${box}`}>
              <p>
                Tick (√) five or less Grameen Organizations you would like to
                meet during your time here?
              </p>
            </div>
            <div className={`${ansThree} ${box}`}>
              <p>checkboxs Field</p>
            </div>
            <div className={`${questionFour} ${box}`}>
              <p>
                Did you participate in any field trip with any Grameen
                organization before?
              </p>
              <p>
                If yes, please specify the organization, the date and duration?
              </p>
            </div>
            <div className={`${ansFour} ${box}`}>
              <p>checkboxs Field</p>
            </div>
            <div className={`${questionFive} ${box}`}>
              <p>
                Where did you learn about the program (Please tick √ as
                appropriate)
              </p>
            </div>
            <div className={`${ansFive} ${box}`}>
              <p>checkboxs Field</p>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ExposureVisitForm;
