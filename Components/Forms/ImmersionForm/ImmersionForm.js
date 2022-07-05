import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import ButtonLight from "../../Shared/Button/Button";

// Data
import fieldData from "../InternshipForm/data/checkboxInterestData.json";
import orgData from "../ExposureVisitForm/data/checkboxOrgData.json";

// CSS
import styles from "./ImmersionForm.module.scss";
import { isFutureDate } from "../utilityFunctions/customFormValidations";
import { clearTextInput } from "../utilityFunctions/formDataChecks";

function ImmersionForm(props) {
  const {
    immersionForm,
    immersionFormHeader,
    immersionFormBody,
    requiredField,
    box,
    personalInfoContainer,
    headingContainer,
    familyNameBox,
    firstNameBox,
    dobBox,
    durationBox,
    startDateBox,
    nationalityBox,
    genderBox,
    imageFileBox,
    imageContainer,
    imageFileBtn,
    passportNumberBox,
    mailingAddBox,
    residenceBox,
    mobilePhoneBox,
    emailBox,
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
    addMoreButton,
    buttonComponent,
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
    optionContainer,
    container,
    referenceContainer,
    firstReferenceName,
    firstReferencePosition,
    firstReferenceOrg,
    firstReferenceAddress,
    firstReferenceTel,
    firstReferenceEmail,
    secondReferenceName,
    secondReferencePosition,
    secondReferenceOrg,
    secondReferenceAddress,
    secondReferenceTel,
    secondReferenceEmail,
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
    btnContainer,
  } = styles;

  // State Variables
  // state variable for program-source to control checkbox input
  const [source, setSource] = useState([0, 0, 0, 0]);

  //   useForm API
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    required,
  } = useForm();

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className={immersionForm}>
      <div className={immersionFormHeader}>
        <HeroBannerSmall title="Application Form for Immersion Program" />
      </div>
      <div className={`${immersionFormBody} container-layout`}>
        <form className={handleSubmit(onSubmit)} encType="multipart/form-data">
          {/* PERSONAL INFORMATION */}
          <div className={personalInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>(Apply at-least 2 months before start date)</p>
            </div>

            {/* Family Name */}
            <div className={`${familyNameBox} ${box}`}>
              <label htmlFor="familyName" className={requiredField}>
                Family Name
              </label>
              <input
                id="familyName"
                type="text"
                {...register("familyName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.familyName?.type === "required" && (
                <FormErrorMessage msg="Family Name Required" />
              )}
            </div>
            {/* First Name */}
            <div className={`${firstNameBox} ${box}`}>
              <label htmlFor="firstName" className={requiredField}>
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.firstName?.type === "required" && (
                <FormErrorMessage msg="First Name Required" />
              )}
            </div>
            {/* Date of birth */}
            <div className={`${dobBox} ${box}`}>
              <label htmlFor="dob" className={requiredField}>
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                {...register("dob", {
                  required: true,
                  validate: (v) => isFutureDate(v),
                })}
              />
              {errors.dob?.type === "required" && (
                <FormErrorMessage msg="Date of birth is required" />
              )}
              {errors.dob?.type === "validate" && (
                <FormErrorMessage msg="Date of birth cannot be a future date" />
              )}
            </div>
            {/* Expected duration */}
            <div className={`${durationBox} ${box}`}>
              <label htmlFor="duration" className={requiredField}>
                Expected Duration
              </label>
              <input
                id="duration"
                type="number"
                {...register("duration", { required: true, min: 0 })}
              />
              {errors.duration?.type === "required" && (
                <FormErrorMessage msg="Expected duration cannot be empty" />
              )}
              {errors.duration?.type === "min" && (
                <FormErrorMessage msg="Expected duration cannot be negative" />
              )}
            </div>
            {/* Start date */}
            <div className={`${startDateBox} ${box}`}>
              <label htmlFor="startDate" className={requiredField}>
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                {...register("startDate", { required: true })}
              />
              {errors.startDate?.type === "required" && (
                <FormErrorMessage msg="Start Date is required" />
              )}
            </div>
            {/*  Nationality */}
            <div className={`${nationalityBox} ${box}`}>
              <label htmlFor="nationality" className={requiredField}>
                Nationality
              </label>
              <input
                id="nationality"
                type="text"
                {...register("nationality", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.nationality?.type === "required" && (
                <FormErrorMessage msg="Nationality Required" />
              )}
              {errors.nationality?.type === "pattern" && (
                <FormErrorMessage msg="Only use A-Z a-z" />
              )}
            </div>
            {/* Gender */}
            <div className={`${genderBox} ${box}`}>
              <label htmlFor="gender" className={requiredField}>
                Gender
              </label>
              <select {...register("gender", { required: true })}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              {errors.gender?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )}
            </div>
            {/* Passport number */}
            <div className={`${passportNumberBox} ${box}`}>
              <label htmlFor="passportNumber">Passport Number</label>
              <input
                id="passportNumber"
                type="text"
                {...register("passportNumber", { pattern: /^[A-Z][0-9]{8}$/i })}
              />
              {errors.passportNumber?.type === "pattern" && (
                <FormErrorMessage msg="Invalid passport number" />
              )}
            </div>
            {/* Recent Photo */}
            <div className={`${imageFileBox} ${box}`}>
              <div className={imageContainer}>
                <p className={requiredField}>Recent Photo</p>
                <p>(Within 3 months)</p>
              </div>
              <input
                id="imageFile"
                className={imageFileBtn}
                type="file"
                {...register("imageFile", { required: true })}
              />
              {errors.imageFile?.type === "required" && (
                <FormErrorMessage msg="Please Upload an Image" />
              )}
            </div>
            {/* Mailing Address */}
            <div className={`${mailingAddBox} ${box}`}>
              <label htmlFor="mailingAdd" className={requiredField}>
                Mailing Address
              </label>
              <input
                id="mailingAdd"
                type="text"
                {...register("mailingAdd", { required: true })}
              />
              {errors.mailingAdd?.type === "required" && (
                <FormErrorMessage msg="Mailing Address can not be empty" />
              )}
            </div>
            {/* Telephone */}
            <div className={`${residenceBox} ${box}`}>
              <label htmlFor="residence">Telephone (Residence)</label>
              <input
                id="telephoneNo"
                type="tel"
                {...register(
                  "telephoneNo",

                  {
                    pattern: /^[0-9]+$/i,
                  }
                )}
              />
              {errors.telephoneNo?.type === "pattern" && (
                <FormErrorMessage msg="invalid number" />
              )}
            </div>
            {/* Mobile Phone */}
            <div className={`${mobilePhoneBox} ${box}`}>
              <label htmlFor="mobilePhone">Mobile Phone</label>
              <input
                id="mobilePhone"
                type="text"
                {...register("mobilePhone", {
                  pattern: /^[0-9]+$/i,
                })}
              />
              {errors.mobilePhone?.type === "pattern" && (
                <FormErrorMessage msg="Please enter a valid mobile number" />
              )}
            </div>
            {/* Email Address */}
            <div className={`${emailBox} ${box}`}>
              <label htmlFor="email" className={requiredField}>
                Email Address
              </label>
              <input
                id="email"
                type="text"
                {...register("email", {
                  required: true,
                  pattern:
                    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <FormErrorMessage msg="Email can not be empty" />
              )}
              {errors.email?.type === "pattern" && (
                <FormErrorMessage msg="Please Provide a valid email address" />
              )}
            </div>
          </div>

          {/* EDUCATION STATUS */}

          <div id="education-status" className={educationInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Education (in chronological order)</p>
            </div>
            {/* Institution Name */}
            <div className={`${institutionHeading} ${box}`}>
              <p className={requiredField}>
                School, College, University, Etc. Attended / Attending
              </p>
            </div>

            <div
              id="education-status-field"
              className={`${institutionField} ${box}`}
            >
              <input
                type="text"
                {...register("institutionName", { required: true })}
              />
              {errors.institutionName?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )}
            </div>
            {/* Period */}
            <div className={`${periodHeading} ${box}`}>
              <p>Period</p>
            </div>
            <div className={`${periodFromHeading} ${box}`}>
              <p className={requiredField}>From (month/year)</p>
            </div>
            <div
              id="education-status-field"
              className={`${periodFromField} ${box}`}
            >
              <input
                type="date"
                {...register("institutionFrom", { required: true })}
              />
              {errors.institutonFrom?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
            </div>
            <div className={`${periodToHeading} ${box}`}>
              <p className={requiredField}>To (month/year)</p>
            </div>
            <div
              id="education-status-field"
              className={`${periodToField} ${box}`}
            >
              <input
                type="date"
                {...register("institutionTo", { required: true })}
              />
              {errors.institutonTo?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
            </div>
            {/* Major */}
            <div className={`${majorHeading} ${box}`}>
              <p>Major</p>
            </div>
            <div id="education-status-field" className={`${majorField} ${box}`}>
              <select {...register("major")}>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
              </select>
            </div>
            {/* Score Obtained */}
            <div className={`${qualificationHeading} ${box}`}>
              <p className={requiredField}>
                Qualification Obtained/ to be obtained
              </p>
            </div>
            <div
              id="education-status-field"
              className={`${qualificationField} ${box}`}
            >
              <input
                type="text"
                {...register("qualification", { required: true })}
              />
              {errors.qualification?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
            </div>

            <div className={`${addMoreButton} ${box}`}>
              <div
                className={buttonComponent}
                onClick={() => {
                  appendChildTo();
                }}
              >
                <ButtonLight type="button" text="Add More" />
              </div>
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
            </div>
            <div className={`${desigHeader} ${box}`}>
              <p>Designation</p>
            </div>
            <div className={`${desigField} ${box}`}>
              <input type="text" {...register("designation")} />
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
            </div>
            <div className={`${responHeader} ${box}`}>
              <p>Responsibilities</p>
            </div>
            <div className={`${responField} ${box}`}>
              <input type="text" {...register("responsibility")} />
            </div>
            <div className={`${questionOne} ${box}`}>
              <p>What led you to apply for internship in Yunus Centre?</p>
            </div>
            <div className={`${ansOne} ${box}`}>
              <textarea
                {...register("profGoal", { required: true, maxLength: 250 })}
              />
            </div>
            <div className={`${questionTwo} ${box}`}>
              <p>
                Is there any particular feature/s in social business which you
                find interesting?
              </p>
            </div>
            <div className={`${ansTwo} ${box}`}>
              <textarea
                {...register("futureSocialBusiness", {
                  required: true,
                  maxLength: 250,
                })}
              />
            </div>
            <div className={`${questionThree} ${box}`}>
              <p>
                Did you participate in any field trip withanyGrameen
                organization before?
              </p>
              <p>
                If yes, please specifythe organization, the date and duration?
              </p>
            </div>
            <div className={`${ansThree} ${box}`}>
              <textarea
                {...register("participateGrameenOrg", {
                  required: true,
                  maxLength: 250,
                })}
              />
            </div>
            <div className={`${questionFour} ${box}`}>
              <p>
                Where did you learn about the program (Please tick √ as
                appropriate)
              </p>
            </div>
            <div id="program-source" className={`${ansFour} ${box}`}>
              {/* option 1 */}
              <div className={optionContainer}>
                <div className={container}>
                  <input
                    type="checkbox"
                    id="sourceCampus"
                    value="Campus"
                    onChange={() => setSource([!source[0], 0, 0, 0])}
                    checked={source[0]}
                  />
                  <label htmlFor="sourceCampus">Campus (Specify)</label>
                </div>
                <input
                  type="checkbox"
                  id="sourceCampus"
                  value="Campus"
                  onChange={() =>
                    setSource((prevSource) => [
                      !prevSource[0],
                      false,
                      false,
                      false,
                    ])
                  }
                  checked={source[0]}
                />
                <label htmlFor="sourceCampus">Campus (Specify)</label>
                <input
                  id="sourceCampusInput"
                  type="text"
                  {...register("sourceCampus")}
                  disabled={!source[0]}
                />
              </div>
              {/* option 2 */}
              <div className={optionContainer}>
                <div className={container}>
                  <input
                    type="checkbox"
                    id="sourceRef"
                    value="Reference"
                    onChange={() => setSource([0, !source[1], 0, 0])}
                    checked={source[1]}
                  />
                  <label htmlFor="sourceRef">Referred by (Specify)</label>
                </div>
                <input
                  type="checkbox"
                  id="sourceRef"
                  value="Reference"
                  onChange={() =>
                    setSource((prevSource) => [
                      false,
                      !prevSource[1],
                      false,
                      false,
                    ])
                  }
                  checked={source[1]}
                />
                <label htmlFor="sourceRef">Referred by (Specify)</label>
                <input
                  id="sourceRefInput"
                  type="text"
                  {...register("sourceRef")}
                  disabled={!source[1]}
                />
              </div>
              {/* option 3 */}
              <div className={optionContainer}>
                <div className={container}>
                  <input
                    type="checkbox"
                    id="sourceYunus"
                    value="Website"
                    onChange={() => setSource([0, 0, !source[2], 0])}
                    checked={source[2]}
                  />
                  <label htmlFor="sourceYunus">Yunus Centre Website</label>
                </div>
                <input
                  type="checkbox"
                  id="sourceYunus"
                  value="Website"
                  onChange={() => {
                    setSource((prevSource) => [
                      false,
                      false,
                      !prevSource[2],
                      false,
                    ]);
                  }}
                  checked={source[2]}
                />
                <label htmlFor="sourceYunus">Yunus Centre Website</label>
                <input
                  id="sourceYunusInput"
                  type="text"
                  {...register("sourceYunus")}
                  disabled={!source[2]}
                />
              </div>
              {/* option 4 */}
              <div className={optionContainer}>
                <div className={container}>
                  <input
                    type="checkbox"
                    id="sourceOther"
                    value="Others"
                    onChange={() => setSource([0, 0, 0, !source[3]])}
                    checked={source[3]}
                  />
                  <label htmlFor="sourceOther">Others (Specify)</label>
                </div>
                <input
                  type="checkbox"
                  id="sourceOther"
                  value="Others"
                  onChange={() => {
                    setSource((prevSource) => [
                      false,
                      false,
                      false,
                      !prevSource[3],
                    ]);
                  }}
                  checked={source[3]}
                />
                <label htmlFor="sourceOther">Others (Specify)</label>
                <input
                  id="sourceOtherInput"
                  type="text"
                  {...register("sourceOthers")}
                  disabled={!source[3]}
                />
              </div>
            </div>
          </div>

          {/* REFERENCES */}

          <div className={referenceContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>References</p>
            </div>
            {/* First Reference */}
            <div className={`${firstReferenceName} ${box}`}>
              <label htmlFor="firstReferenceName" className={requiredField}>
                Name of <b>First</b> Reference
              </label>
              <input
                id="firstReferenceName"
                type="text"
                {...register("firstReferenceName", { required: true })}
              />
              {errors.firstReferenceName?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
            </div>
            <div className={`${firstReferencePosition} ${box}`}>
              <label htmlFor="firstReferencePosition" className={requiredField}>
                Position
              </label>
              {errors.firstReferencePosition?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
              <input
                id="firstReferencePosition"
                type="text"
                {...register("firstReferencePosition")}
              />
            </div>
            <div className={`${firstReferenceOrg} ${box}`}>
              <label htmlFor="firstReferenceOrg" className={requiredField}>
                Name of Organization
              </label>
              <input
                id="firstReferenceOrg"
                type="text"
                {...register("firstReferenceOrg", { required: true })}
              />
              {errors.firstReferenceOrg?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
            </div>
            <div className={`${firstReferenceAddress} ${box}`}>
              <label htmlFor="firstReferenceAddress" className={requiredField}>
                Correspondence Address
              </label>
              <input
                id="firstReferenceAddress"
                type="text"
                {...register("firstReferenceAddress", { required: true })}
              />
              {errors.firstReferenceAddress?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
            </div>
            <div className={`${firstReferenceTel} ${box}`}>
              <label htmlFor="firstReferenceTel" className={requiredField}>
                Telephone No.
              </label>
              <input
                id="firstReferenceTel"
                type="tel"
                {...register("firstReferenceTel", {
                  required: true,
                  pattern: /^[0-9]+$/i,
                })}
              />
              {errors.firstReferenceTel?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
              {errors.firstReferenceTel?.type === "pattern" && (
                <FormErrorMessage msg="Invalid number" />
              )}
            </div>
            <div className={`${firstReferenceEmail} ${box}`}>
              <label htmlFor="firstReferenceEmail" className={requiredField}>
                Email Address
              </label>
              <input
                id="firstReferenceEmail"
                type="email"
                {...register("firstReferenceEmail", {
                  required: true,
                  pattern:
                    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i,
                })}
              />
              {errors.firstReferenceEmail?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
              {errors.firstReferenceEmail?.type === "pattern" && (
                <FormErrorMessage msg="Invalid email" />
              )}
            </div>

            {/* Second Reference */}
            <div className={`${secondReferenceName} ${box}`}>
              <label htmlFor="secondReferenceName">
                Name of <b>second</b> Reference
              </label>
              <input
                id="secondReferenceName"
                type="text"
                {...register("secondReferenceName")}
              />
            </div>
            <div className={`${secondReferencePosition} ${box}`}>
              <label htmlFor="secondReferencePosition">Position</label>
              <input
                id="secondReferencePosition"
                type="text"
                {...register("secondReferencePosition")}
              />
            </div>
            <div className={`${secondReferenceOrg} ${box}`}>
              <label htmlFor="secondReferenceOrg">Name of Organization</label>
              <input
                id="secondReferenceOrg"
                type="text"
                {...register("secondReferenceOrg")}
              />
            </div>
            <div className={`${secondReferenceAddress} ${box}`}>
              <label htmlFor="secondReferenceAddress">
                Correspondence Address
              </label>
              <input
                id="secondReferenceAddress"
                type="text"
                {...register("secondReferenceAddress")}
              />
            </div>
            <div className={`${secondReferenceTel} ${box}`}>
              <label htmlFor="secondReferenceTel">Telephone No.</label>
              <input
                id="secondReferenceTel"
                type="text"
                {...register("secondReferenceTel")}
              />
            </div>
            <div className={`${secondReferenceEmail} ${box}`}>
              <label htmlFor="secondReferenceEmail">E-mail Address</label>
              <input
                id="secondReferenceEmail"
                type="email"
                {...register("secondReferenceEmail")}
              />
            </div>
          </div>

          {/* EMERGENCY CONTACTS */}

          <div className={emergencyContactContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Emergency Contacts</p>
            </div>
            {/* First Contact */}
            <div className={`${firstContactName} ${box}`}>
              <label htmlFor="firstContactName" className={requiredField}>
                Name of <b>First</b> Contact
              </label>
              <input
                id="firstContactName"
                type="text"
                {...register("firstContactName", { required: true })}
              />
              {errors.firstContactName?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
            </div>
            <div className={`${firstContactAddress} ${box}`}>
              <label htmlFor="firstContactAddress" className={requiredField}>
                Address
              </label>
              <input
                id="firstContactAddress"
                type="text"
                {...register("firstContactAddress", { required: true })}
              />
              {errors.firstContactAddress?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
            </div>
            <div className={`${firstContactTel} ${box}`}>
              <label htmlFor="firstContactTel" className={requiredField}>
                Telephone
              </label>
              <input
                id="firstContactTel"
                type="tel"
                {...register("firstContactTel", {
                  required: true,
                  pattern: /^[0-9]+$/i,
                })}
              />
              {errors.firstContactTel?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
              {errors.firstContactTel?.type === "pattern" && (
                <FormErrorMessage msg="invalid number" />
              )}
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
              <label htmlFor="firstContactRelation" className={requiredField}>
                Relation to Applicant
              </label>
              <input
                id="firstContactRelation"
                type="text"
                {...register("firstContactRelation", { required: true })}
              />
              {errors.firstContactRelation?.type === "required" && (
                <FormErrorMessage msg="Field cannot be empty" />
              )}
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
}

export default ImmersionForm;
