import React from "react";
import { useForm } from "react-hook-form";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import ButtonLight from "../../Shared/Button/Button";

// Data
import orgData from "./data/checkboxOrgData.json";

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
    checkboxContainer,
    gridBox,
    optionContainer,
    btnContainer,
    imageFileBtn,
    imageContainer,
  } = styles;

  //   useForm API
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    required,
  } = useForm({
    defaultValues: {
      purpose: "",
      familyName: "",
      firstName: "",
      dob: "",
      duration: "",
      startDate: "",
      nationality: "",
      gender: "",
      passportNumber: "",
      imageFile: "",
      mailingAdd: "",
      telephoneNo: "",
      residence: "",
      mobilePhone: "",
      email: "",
      institutionName: "",
      institutionFrom: "",
      institutionTo: "",
      major: "",
      qualification: "",
      orgName: "",
      designation: "",
      since: "",
      responsibility: "",
      profGoal: "",
      futureSocialBusiness: "",
      organization: [],
      participateGrameenOrg: "",
      sourceCampus: "",
      firstContactName: "",
      firstContactAddress: "",
      firstContactTel: "",
      firstContactBusinessName: "",
      firstContactBusinessAddress: "",
      firstContactBusinessTel: "",
      firstContactRelation: "",
      secondContactName: "",
      secondContactAddress: "",
      secondContactTel: "",
      secondContactBusinessName: "",
      secondContactBusinessAddress: "",
      secondContactBusinessTel: "",
      secondContactRelation: "",
    },
  });
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
              <input
                id="purpose"
                type="text"
                {...register("purpose")}
                value="hello"
              />
              {/* {errors.purpose?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${familyNameBox} ${box}`}>
              <label htmlFor="familyName">Family Name</label>
              <input id="familyName" type="text" {...register("familyName")} />
              {/* {errors.familyName?.type === "required" && (
                <FormErrorMessage msg="Family Name Required" />
              )} */}
            </div>
            <div className={`${firstNameBox} ${box}`}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" {...register("firstName")} />
              {/* {errors.firstName?.type === "required" && (
                <FormErrorMessage msg="First Name Required" />
              )} */}
            </div>
            <div className={`${dobBox} ${box}`}>
              <label htmlFor="dob">Date of Birth</label>
              <input id="dob" type="date" {...register("dob")} />
              {/* {errors.dob?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${durationBox} ${box}`}>
              <label htmlFor="duration">Expected Duration</label>
              <input id="duration" type="number" {...register("duration")} />
              {/* {errors.duration?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${startDateBox} ${box}`}>
              <label htmlFor="startDate">Start Date</label>
              <input id="startDate" type="date" {...register("startDate")} />
              {/* {errors.startDate?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${nationalityBox} ${box}`}>
              <label htmlFor="nationality">Nationality</label>
              <input
                id="nationality"
                type="text"
                {...register("nationality")}
              />
              {/* {errors.nationality?.type === "required" && (
                <FormErrorMessage msg="Nationality Required" />
              )} */}
            </div>
            <div className={`${genderBox} ${box}`}>
              <label htmlFor="gender">Gender</label>
              <select {...register("gender")}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              {/* {errors.gender?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${passportNumberBox} ${box}`}>
              <label htmlFor="passportNumber">Passport Number</label>
              <input
                id="passportNumber"
                type="text"
                {...register("passportNumber")}
              />
              {/* {errors.passportNumber?.type === "required" && (
                <FormErrorMessage msg="Passport No. Required" />
              )} */}
            </div>
            <div className={`${imageFileBox} ${box}`}>
              <div className={imageContainer}>
                <p>Recent Photo</p>
                <p>(Within 3 months)</p>
              </div>
              <input
                id="imageFile"
                className={imageFileBtn}
                type="file"
                {...register("imageFile")}
              />
            </div>
            <div className={`${mailingAddBox} ${box}`}>
              <label htmlFor="mailingAdd">Mailing Address</label>
              <input id="mailingAdd" type="text" {...register("mailingAdd")} />
              {/* {errors.mailingAdd?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${telephoneNoBox} ${box}`}>
              <label htmlFor="telephoneNo">Telephone No.</label>
              <input
                id="telephoneNo"
                type="tel"
                {...register(
                  "telephoneNo",

                  {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  }
                )}
              />
              {errors.telephoneNo?.type === "pattern" && (
                <FormErrorMessage msg="invalid number" />
              )}
            </div>
            <div className={`${residenceBox} ${box}`}>
              <label htmlFor="residence">Residence</label>
              <input id="residence" type="text" {...register("residence")} />
              {/* {errors.residence?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${mobilePhoneBox} ${box}`}>
              <label htmlFor="mobilePhone">Mobile Phone</label>
              <input
                id="mobilePhone"
                type="text"
                {...register("mobilePhone")}
              />
              {/* {errors.mobilePhone?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${emailBox} ${box}`}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="text" {...register("email")} />
              {/* {errors.email?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
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
              <input type="text" {...register("institutionName")} />
            </div>
            <div className={`${periodHeading} ${box}`}>
              <p>Period</p>
            </div>
            <div className={`${periodFromHeading} ${box}`}>
              <p>From (month/year)</p>
            </div>
            <div className={`${periodFromField} ${box}`}>
              <input type="date" {...register("institutionFrom")} />
            </div>
            <div className={`${periodToHeading} ${box}`}>
              <p>To (month/year)</p>
            </div>
            <div className={`${periodToField} ${box}`}>
              <input type="date" {...register("institutionTo")} />
            </div>
            <div className={`${majorHeading} ${box}`}>
              <p>Major</p>
            </div>
            <div className={`${majorField} ${box}`}>
              <select {...register("major")}>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
              </select>
            </div>
            <div className={`${qualificationHeading} ${box}`}>
              <p>Qualification Obtained/ to be obtained</p>
            </div>
            <div className={`${qualificationField} ${box}`}>
              <input type="text" {...register("qualification")} />
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
              <input type="text" {...register("orgName")} />
              {/* {errors.orgName?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${desigHeader} ${box}`}>
              <p>Designation</p>
            </div>
            <div className={`${desigField} ${box}`}>
              <input type="text" {...register("designation")} />
              {/* {errors.designation?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${sinceHeader} ${box}`}>
              <p>Since</p>
            </div>
            <div className={`${sinceField} ${box}`}>
              <select {...register("since")}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
              {/* {errors.since?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${responHeader} ${box}`}>
              <p>Responsibilities</p>
            </div>
            <div className={`${responField} ${box}`}>
              <input type="text" {...register("responsibility")} />
              {/* {errors.responsibility?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${questionOne} ${box}`}>
              <p>
                How will an exposure visit at the Yunus Centre apply to your
                professional goals?
              </p>
            </div>
            <div className={`${ansOne} ${box}`}>
              <textarea {...register("profGoal")} />
            </div>
            <div className={`${questionTwo} ${box}`}>
              <p>What does the future of Social Business look like to you?</p>
            </div>
            <div className={`${ansTwo} ${box}`}>
              <textarea {...register("futureSocialBusiness")} />
            </div>
            <div className={`${questionThree} ${box}`}>
              <p>
                Tick (√) five or less Grameen Organizations you would like to
                meet during your time here?
              </p>
            </div>
            <div className={`${ansThree} ${box}`}>
              {orgData.map((data) => {
                return (
                  <div key={data.id} className={checkboxContainer}>
                    <input
                      type="checkbox"
                      id={data.id}
                      {...register("organization")}
                      value={data.organization}
                    />
                    <label htmlFor={data.id}>{data.organization}</label>
                  </div>
                );
              })}
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
              <textarea {...register("participateGrameenOrg")} />
            </div>
            <div className={`${questionFive} ${box}`}>
              <p>
                Where did you learn about the program (Please tick √ as
                appropriate)
              </p>
            </div>
            <div className={`${ansFive} ${box}`}>
              <div className={optionContainer}>
                <input type="checkbox" id="sourceCampus" value="Campus" />
                <label htmlFor="sourceCampus">Campus (Specify)</label>
                <input type="text" {...register("sourceCampus")} />
              </div>
              <div className={optionContainer}>
                <input type="checkbox" id="sourceRef" value="Campus" />
                <label htmlFor="sourceRef">Referred by (Specify)</label>
                <input type="text" {...register("sourceCampus")} />
              </div>
              <div className={optionContainer}>
                <input type="checkbox" id="sourceYunus" value="Campus" />
                <label htmlFor="sourceYunus">Yunus Centre Website</label>
                <input type="text" {...register("sourceCampus")} />
              </div>
              <div className={optionContainer}>
                <input type="checkbox" id="sourceOther" value="Campus" />
                <label htmlFor="sourceOther">Others (Specify)</label>
                <input type="text" {...register("sourceCampus")} />
              </div>
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
          <div className={btnContainer}>
            <ButtonLight text="Submit" type="submit" dark />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExposureVisitForm;
