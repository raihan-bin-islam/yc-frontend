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
    emergencyContactContainer,
    firstContactName,
    firstContactAddress,
    firstContactTel,
    firstContactBusinessName,
    firstContactBusinessAddress,
    firstContactBusinessTel,
    firstContactRelation,
    secondContactName,
    secondContactAddress,
    secondContactTel,
    secondContactBusinessName,
    secondContactBusinessAddress,
    secondContactBusinessTel,
    secondContactRelation,
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
          {/* PERSONAL INFORMATION */}

          <div className={personalInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>
                Apply at-least 1 months before start date; Facilitation Fee $50
                for a week
              </p>
            </div>
            <div className={`${purposeBox} ${box}`}>
              <label htmlFor="purpose">Purpose of Visit</label>
              <input id="purpose" type="text" {...register("purpose")} />
            </div>
            <div className={`${familyNameBox} ${box}`}>
              <label htmlFor="familyName">Family Name</label>
              <input id="familyName" type="text" {...register("familyName")} />
            </div>
            <div className={`${firstNameBox} ${box}`}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" {...register("firstName")} />
            </div>
            <div className={`${dobBox} ${box}`}>
              <label htmlFor="dob">Date of Birth</label>
              <input id="dob" type="date" {...register("dob")} />
            </div>
            <div className={`${durationBox} ${box}`}>
              <label htmlFor="duration">Expected Duration</label>
              <input id="duration" type="number" {...register("duration")} />
            </div>
            <div className={`${startDateBox} ${box}`}>
              <label htmlFor="startDate">Start Date</label>
              <input id="startDate" type="date" {...register("startDate")} />
            </div>
            <div className={`${nationalityBox} ${box}`}>
              <label htmlFor="nationality">Nationality</label>
              <input
                id="nationality"
                type="text"
                {...register("nationality")}
              />
            </div>
            <div className={`${genderBox} ${box}`}>
              <label htmlFor="gender">Gender</label>
              <select {...register("gender")}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={`${passportNumberBox} ${box}`}>
              <label htmlFor="passportNumber">Passport Number</label>
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
              <label htmlFor="mailingAdd">Mailing Address</label>
              <input id="mailingAdd" type="text" {...register("mailingAdd")} />
            </div>
            <div className={`${telephoneNoBox} ${box}`}>
              <label htmlFor="telephoneNo">Telephone No.</label>
              <input id="telephoneNo" type="tel" {...register("telephoneNo")} />
            </div>
            <div className={`${residenceBox} ${box}`}>
              <label htmlFor="residence">Residence</label>
              <input id="residence" type="text" {...register("residence")} />
            </div>
            <div className={`${mobilePhoneBox} ${box}`}>
              <label htmlFor="mobilePhone">Mobile Phone</label>
              <input
                id="mobilePhone"
                type="text"
                {...register("mobilePhone")}
              />
            </div>
            <div className={`${emailBox} ${box}`}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="text" {...register("email")} />
            </div>
          </div>

          {/* EDUCATION STATUS */}

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

          {/* CURRENT EMPLOYMENT STATUS */}

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

          {/* EMERGENCY CONTACTS */}

          <div className={emergencyContactContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Emergency Contacts</p>
            </div>
            {/* First Contact */}
            <div className={`${firstContactName} ${box}`}>
              <label htmlFor="firstContactName">
                Name of <b>First</b> Contact
              </label>
              <input
                id="firstContactName"
                type="text"
                {...register("firstContactName")}
              />
            </div>
            <div className={`${firstContactAddress} ${box}`}>
              <label htmlFor="firstContactAddress">Address</label>
              <input
                id="firstContactAddress"
                type="text"
                {...register("firstContactAddress")}
              />
            </div>
            <div className={`${firstContactTel} ${box}`}>
              <label htmlFor="firstContactTel">Telephone</label>
              <input
                id="firstContactTel"
                type="tel"
                {...register("firstContactTel")}
              />
            </div>
            <div className={`${firstContactBusinessName} ${box}`}>
              <label htmlFor="firstContactBusinessName">Business Name</label>
              <input
                id="firstContactBusinessName"
                type="text"
                {...register("firstContactBusinessName")}
              />
            </div>
            <div className={`${firstContactBusinessAddress} ${box}`}>
              <label htmlFor="firstContactBusinessAddress">
                Business Address
              </label>
              <input
                id="firstContactBusinessAddress"
                type="text"
                {...register("firstContactBusinessAddress")}
              />
            </div>
            <div className={`${firstContactBusinessTel} ${box}`}>
              <label htmlFor="firstContactBusinessTel">Telephone</label>
              <input
                id="firstContactBusinessTel"
                type="tel"
                {...register("firstContactBusinessTel")}
              />
            </div>
            <div className={`${firstContactRelation} ${box}`}>
              <label htmlFor="firstContactRelation">
                Relation to Applicant
              </label>
              <input
                id="firstContactRelation"
                type="text"
                {...register("firstContactRelation")}
              />
            </div>

            {/* Second Contact */}
            <div className={`${secondContactName} ${box}`}>
              <label htmlFor="secondContactName">
                Name of <b>second</b> Contact
              </label>
              <input
                id="secondContactName"
                type="text"
                {...register("secondContactName")}
              />
            </div>
            <div className={`${secondContactAddress} ${box}`}>
              <label htmlFor="secondContactAddress">Address</label>
              <input
                id="secondContactAddress"
                type="text"
                {...register("secondContactAddress")}
              />
            </div>
            <div className={`${secondContactTel} ${box}`}>
              <label htmlFor="secondContactTel">Telephone</label>
              <input
                id="secondContactTel"
                type="tel"
                {...register("secondContactTel")}
              />
            </div>
            <div className={`${secondContactBusinessName} ${box}`}>
              <label htmlFor="secondContactBusinessName">Business Name</label>
              <input
                id="secondContactBusinessName"
                type="text"
                {...register("secondContactBusinessName")}
              />
            </div>
            <div className={`${secondContactBusinessAddress} ${box}`}>
              <label htmlFor="secondContactBusinessAddress">
                Business Address
              </label>
              <input
                id="secondContactBusinessAddress"
                type="text"
                {...register("secondContactBusinessAddress")}
              />
            </div>
            <div className={`${secondContactBusinessTel} ${box}`}>
              <label htmlFor="secondContactBusinessTel">Telephone</label>
              <input
                id="secondContactBusinessTel"
                type="tel"
                {...register("secondContactBusinessTel")}
              />
            </div>
            <div className={`${secondContactRelation} ${box}`}>
              <label htmlFor="secondContactRelation">
                Relation to Applicant
              </label>
              <input
                id="secondContactRelation"
                type="text"
                {...register("secondContactRelation")}
              />
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ExposureVisitForm;
