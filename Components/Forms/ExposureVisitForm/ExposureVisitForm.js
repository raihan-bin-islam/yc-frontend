import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import ButtonLight from "../../Shared/Button/Button";

// Data
import orgData from "./data/checkboxOrgData.json";

// CSS
import styles from "./ExposureVisitForm.module.scss";
import { isFutureDate, fileTooLarge, supportedFileTypes } from "../utilityFunctions/customFormValidations";
import { clearTextInput } from "../utilityFunctions/formDataChecks";

const ExposureVisitForm = () => {
  // Style ClassName
  const {
    exposureForm,
    requiredField,
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
    educationInfoInner,
    educationAdditionalHeading,
    institutionField,
    periodFromField,
    periodToField,
    majorField,
    qualificationField,
    addMoreButton,

    buttonContainer,
    buttonComponent,
    removeButtonComponent,
    removeButtonDisabled,
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
    container,
    errorMessages,
  } = styles;

  // State Variables
  const maxEduCount = 4;
  const [eduCount, setEduCount] = useState(0);

  // state variable for program-source to control checkbox input
  const [source, setSource] = useState([false, false, false, false]);
  const [orgFlag, setOrgFlag] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [orgCount, setOrgCount] = useState(0);
  const [orgError, setOrgError] = useState(false);

  // To Clear inputs when source of learning is either changed or deselected
  useEffect(() => {
    clearTextInput("sourceCampusInput");
    clearTextInput("sourceRefInput");
    clearTextInput("sourceYunusInput");
    clearTextInput("sourceOtherInput");
  }, [source]);
  // To Clear inputs when source of learning is either changed or deselected
  useEffect(() => {
    orgFlag.filter((value) => value === true).length < 5 && setOrgError(false);
  }, [orgFlag]);

  //   useForm API
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      institutionName: [],
      institutionFrom: [],
      institutionTo: [],
      major: [],
      qualification: [],
      orgName: "",
      designation: "",
      since: "",
      responsibility: "",
      profGoal: "",
      futureSocialBusiness: "",
      organization: [],
      participateGrameenOrg: "",
      sourceCampus: "",
      sourceRef: "",
      sourceYunus: "",
      sourceOthers: "",
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

  // Count the number of selected Items in a list of checkbox
  const countNumberOfSelectedItems = (e, count, index) => {
    // if the number of selected items is less than the count we let the user select any of the items from the checkbox
    if (orgFlag.filter((value) => value === true).length < count) {
      setOrgFlag((prev) => {
        let newFlags = [...prev];
        const flag = !prev[index];
        newFlags[index] = flag;
        return newFlags;
      });
    }
    // If the number of selected items reaches the maximum limit then we let the user only deselect the selected items from the checkbox and then they can again select another option from the list
    else {
      // if the user tries to check an option after s/he has reached the limit we set the error to true
      e.target.checked && setOrgError(true);
      setOrgFlag((prev) => {
        let newFlags = [...prev];
        let flag = false;
        prev[index] === true && (newFlags[index] = flag);
        return newFlags;
      });
    }
  };

  // Load Uploaded Image on the form
  const loadImage = (e) => {
    let image = document.getElementById("output");
    e.target.files[0]
      ? (image.src = URL.createObjectURL(e.target.files[0]))
      : (image.src = "/assets/images/visit_programs/yc_programs/image_upload_dummy_image.png");
  };

  const onError = (errors, e) => {
    e.preventDefault();
    console.log(errors);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();

    console.log(data);
    // Base url of api
    const baseUrl = process.env.baseUrl;

    let formdata = new FormData();

    formdata.append("purpose_of_visit", data.purpose);
    formdata.append("family_name", data.familyName);
    formdata.append("first_name", data.firstName);
    formdata.append("date_of_birth", data.dob);
    formdata.append("expected_duration", data.duration);
    formdata.append("start_date", data.startDate);
    formdata.append("nationality", data.nationality);
    formdata.append("gender", data.gender);
    formdata.append("passport_no", data.passportNumber);
    formdata.append("photo", data.imageFile[0]);
    formdata.append("mailing_address", data.mailingAdd);
    formdata.append("telephone_mobile", data.mobilePhone);
    formdata.append("telephone_residence", data.telephoneNo);
    formdata.append("email", data.email);
    data.institutionName.forEach((element, index) => {
      formdata.append(`education[${index}][institution]`, data.institutionName[index]);
      formdata.append(`education[${index}][period_from]`, data.institutionFrom[index]);
      formdata.append(`education[${index}][period_to]`, data.institutionTo[index]);
      formdata.append(`education[${index}][major]`, data.major[index]);
      formdata.append(`education[${index}][qualification]`, data.qualification[index]);
    });
    formdata.append("current_employment[0][organization]", data.orgName);
    formdata.append("current_employment[0][designation]", data.designation);
    formdata.append("current_employment[0][since]", data.since);
    formdata.append("current_employment[0][responsibilities]", data.responsibility);
    formdata.append("visit_prof_goal", data.profGoal);
    formdata.append("future_of_sb", data.futureSocialBusiness);
    formdata.append("grameen_org_to_meet", data.organization);
    formdata.append("source_of_learning[0][campus]", data.sourceCampus);
    formdata.append("source_of_learning[0][reference]", data.sourceRef);
    formdata.append("source_of_learning[0][yc_website]", data.sourceYunus);
    formdata.append("source_of_learning[0][others]", data.sourceOthers);
    formdata.append("emmergency_contacts[0][name]", data.firstContactName);
    formdata.append("emmergency_contacts[0][address]", data.firstContactAddress);
    formdata.append("emmergency_contacts[0][telephone]", data.firstContactTel);
    formdata.append("emmergency_contacts[0][business_name]", data.firstContactBusinessName);
    formdata.append("emmergency_contacts[0][business_address]", data.firstContactBusinessAddress);
    formdata.append("emmergency_contacts[0][business_telephone]", data.firstContactBusinessTel);
    formdata.append("emmergency_contacts[0][relation_to_applicant]", data.firstContactRelation);
    formdata.append("emmergency_contacts[1][name]", data.secondContactName);
    formdata.append("emmergency_contacts[1][address]", data.secondContactAddress);
    formdata.append("emmergency_contacts[1][telephone]", data.secondContactTel);
    formdata.append("emmergency_contacts[1][business_name]", data.secondContactBusinessName);
    formdata.append("emmergency_contacts[1][business_address]", data.secondContactBusinessAddress);
    formdata.append("emmergency_contacts[1][business_telephone]", data.secondContactBusinessTel);
    formdata.append("emmergency_contacts[1][relation_to_applicant]", data.secondContactRelation);

    await fetch(`${baseUrl}/exposure-visit-application`, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.status)
      .then((status) => console.log(status))
      .catch((err) => err);
  };

  return (
    <div className={exposureForm}>
      <div className={exposureFormHeader}>
        <HeroBannerSmall title="Exposure Visit Form" />
      </div>
      <div className={`${exposureFormBody} container-layout`}>
        <form onSubmit={handleSubmit(onSubmit, onError)} encType="multipart/form-data">
          {/* PERSONAL INFORMATION */}

          <div className={personalInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Apply at-least 1 months before start date; Facilitation Fee $50 for a week</p>
            </div>
            {/* Purpose Of Visit */}
            <div className={`${purposeBox} ${box}`}>
              <label htmlFor="purpose">
                Purpose of Visit <span className={requiredField}>*</span>
              </label>
              <input id="purpose" type="text" {...register("purpose", { required: true, max: 5 })} />
              {errors.purpose?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
              {errors.purpose?.type === "max" && <FormErrorMessage msg="Must be shorter than 5 characters" />}
            </div>
            {/* Family Name */}
            <div className={`${familyNameBox} ${box}`}>
              <label htmlFor="familyName">
                Family Name <span className={requiredField}>*</span>
              </label>
              <input id="familyName" type="text" {...register("familyName", { required: true })} />
              {errors.familyName?.type === "required" && <FormErrorMessage msg="Family Name Required" />}
            </div>
            {/* First Name */}
            <div className={`${firstNameBox} ${box}`}>
              <label htmlFor="firstName">
                First Name <span className={requiredField}>*</span>
              </label>
              <input id="firstName" type="text" {...register("firstName", { required: true })} />
              {errors.firstName?.type === "required" && <FormErrorMessage msg="First Name Required" />}
            </div>
            {/* Date of birth */}
            <div className={`${dobBox} ${box}`}>
              <label htmlFor="dob">
                Date of Birth <span className={requiredField}>*</span>
              </label>
              <input
                id="dob"
                type="date"
                {...register("dob", {
                  required: true,
                  validate: (v) => isFutureDate(v),
                })}
              />
              {errors.dob?.type === "required" && <FormErrorMessage msg="Date of birth is required" />}
              {errors.dob?.type === "validate" && <FormErrorMessage msg="Date of birth cannot be a future date" />}
            </div>
            {/* Expected duration */}
            <div className={`${durationBox} ${box}`}>
              <label htmlFor="duration">
                Expected Duration <span className={requiredField}>*</span>
              </label>
              <input id="duration" type="number" {...register("duration", { required: true, min: 0 })} />
              {errors.duration?.type === "required" && <FormErrorMessage msg="Expected duration cannot be empty" />}
              {errors.duration?.type === "min" && <FormErrorMessage msg="Expected duration cannot be negative" />}
            </div>
            {/* Start date */}
            <div className={`${startDateBox} ${box}`}>
              <label htmlFor="startDate">
                Start Date <span className={requiredField}>*</span>
              </label>
              <input id="startDate" type="date" {...register("startDate", { required: true })} />
              {errors.startDate?.type === "required" && <FormErrorMessage msg="Start Date is required" />}
            </div>
            {/*  Nationality */}
            <div className={`${nationalityBox} ${box}`}>
              <label htmlFor="nationality">
                Nationality <span className={requiredField}>*</span>
              </label>
              <input id="nationality" type="text" {...register("nationality", { required: true })} />
              {errors.nationality?.type === "required" && <FormErrorMessage msg="Nationality Required" />}
            </div>
            {/* Gender */}
            <div className={`${genderBox} ${box}`}>
              <label htmlFor="gender">
                Gender <span className={requiredField}>*</span>
              </label>
              <select {...register("gender", { required: true })}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              {errors.gender?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
            </div>
            {/* Passport number */}
            <div className={`${passportNumberBox} ${box}`}>
              <label htmlFor="passportNumber">
                Passport Number <span className={requiredField}>*</span>
              </label>
              <input id="passportNumber" type="text" {...register("passportNumber", { required: true })} />
              {errors.passportNumber?.type === "required" && <FormErrorMessage msg="Passport No. Required" />}
            </div>
            {/* Recent Photo */}
            <div className={`${imageFileBox} ${box}`}>
              <div className={imageContainer}>
                <p>
                  Recent Photo <span className={requiredField}>*</span>
                </p>
                <p>(Within 3 months)</p>
                <p>(Max: 100KB)</p>
                {/* to show uploaded image */}
                <img src="/assets/images/visit_programs/yc_programs/image_upload_dummy_image.png" id="output" alt="" />
              </div>
              <input
                id="imageFile"
                className={imageFileBtn}
                type="file"
                accept="image/*"
                {...register("imageFile", {
                  required: true,
                  validate: { fileSize: (file) => fileTooLarge(file), fileTypes: (file) => supportedFileTypes(file) },
                })}
                onChange={(e) => loadImage(e)}
              />
              {errors.imageFile?.type === "required" && <FormErrorMessage msg="Please Upload an Image" />}
              {errors.imageFile?.type === "fileSize" && <FormErrorMessage msg="File Too Large" />}
              {errors.imageFile?.type === "fileTypes" && (
                <FormErrorMessage msg="Please Upload An Image File ( jpeg/png )" />
              )}
            </div>
            {/* Mailing Address */}
            <div className={`${mailingAddBox} ${box}`}>
              <label htmlFor="mailingAdd">
                Mailing Address <span className={requiredField}>*</span>
              </label>
              <input id="mailingAdd" type="text" {...register("mailingAdd", { required: true })} />
              {errors.mailingAdd?.type === "required" && <FormErrorMessage msg="Mailing Address can not be empty" />}
            </div>
            {/* Telephone */}
            <div className={`${residenceBox} ${box}`}>
              <label htmlFor="residence">
                Telephone (Residence) <span className={requiredField}>*</span>
              </label>
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
              {errors.telephoneNo?.type === "pattern" && <FormErrorMessage msg="invalid number" />}
              {errors.telephoneNo?.type === "required" && <FormErrorMessage msg="Telephone no. is required" />}
            </div>
            {/* Mobile Phone */}
            <div className={`${mobilePhoneBox} ${box}`}>
              <label htmlFor="mobilePhone">
                Mobile Phone <span className={requiredField}>*</span>
              </label>
              <input
                id="mobilePhone"
                type="text"
                {...register("mobilePhone", {
                  required: true,
                  pattern: /^[0-9]{3,14}$/i,
                })}
              />
              {errors.mobilePhone?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
              {errors.mobilePhone?.type === "pattern" && <FormErrorMessage msg="Please enter a valid mobile number" />}
            </div>
            {/* Email Address */}
            <div className={`${emailBox} ${box}`}>
              <label htmlFor="email">
                Email Address <span className={requiredField}>*</span>
              </label>
              <input
                id="email"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                })}
              />
              {errors.email?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
              {errors.email?.type === "pattern" && <FormErrorMessage msg="Please Provide a valid email address" />}
            </div>
          </div>

          {/* EDUCATION STATUS */}

          <div id="education-status" className={educationInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Education (in chronological order)</p>
            </div>
            {/* Institution Name */}
            <div className={educationInfoInner}>
              <div id="education-status-field" className={`${institutionField} ${box}`}>
                <label>
                  School, College, University, Etc. <span className={requiredField}>*</span>
                </label>
                <input type="text" {...register("institutionName[0]", { required: true })} />
                {errors.institutionName && errors.institutionName[0]?.type === "required" && (
                  <FormErrorMessage msg="Field can not be empty" />
                )}
              </div>

              {/* Period */}

              <div id="education-status-field" className={`${periodFromField} ${box}`}>
                <label>
                  From <span className={requiredField}>*</span>
                </label>
                <input type="date" {...register("institutionFrom[0]", { required: true })} />
                {errors.institutionFrom && errors.institutionFrom[0]?.type === "required" && (
                  <FormErrorMessage msg="Date is required" />
                )}
              </div>

              <div id="education-status-field" className={`${periodToField} ${box}`}>
                <label>
                  To <span className={requiredField}>*</span>
                </label>
                <input type="date" {...register("institutionTo[0]", { required: true })} />
                {errors.institutionTo && errors.institutionTo[0]?.type === "required" && (
                  <FormErrorMessage msg="Date is required" />
                )}
              </div>

              {/* Major */}

              <div id="education-status-field" className={`${majorField} ${box}`}>
                <label>
                  Major <span className={requiredField}>*</span>
                </label>
                <select {...register("major[0]", { required: true })}>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="BBA">BBA</option>
                </select>
                {errors.major && errors.major[0]?.type === "required" && (
                  <FormErrorMessage msg="Field can not be empty" />
                )}
              </div>
              {/* Score Obtained */}
              <div id="education-status-field" className={`${qualificationField} ${box}`}>
                <label>
                  Qualification Obtained/ to be obtained <span className={requiredField}>*</span>
                </label>
                <input type="text" {...register("qualification[0]", { required: true })} />
                {errors.qualification && errors.qualification[0]?.type === "required" && (
                  <FormErrorMessage msg="Cannot be empty" />
                )}
              </div>
            </div>

            {/* -----------------2nd educational status--------------------- */}
            {eduCount >= 1 && (
              <div className={educationInfoInner}>
                <h2 className={educationAdditionalHeading}>2nd</h2>
                <div id="education-status-field" className={`${institutionField} ${box}`}>
                  <label>
                    School, College, University, Etc. <span className={requiredField}>*</span>
                  </label>
                  <input type="text" {...register("institutionName[1]", { required: true })} />
                  {errors.institutionName && errors.institutionName[1]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>

                {/* Period */}

                <div id="education-status-field" className={`${periodFromField} ${box}`}>
                  <label>
                    From <span className={requiredField}>*</span>
                  </label>
                  <input type="date" {...register("institutionFrom[1]", { required: true })} />
                  {errors.institutionFrom && errors.institutionFrom[1]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                <div id="education-status-field" className={`${periodToField} ${box}`}>
                  <label>
                    To <span className={requiredField}>*</span>
                  </label>
                  <input type="date" {...register("institutionTo[1]", { required: true })} />
                  {errors.institutionTo && errors.institutionTo[1]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                {/* Major */}

                <div id="education-status-field" className={`${majorField} ${box}`}>
                  <label>
                    Major <span className={requiredField}>*</span>
                  </label>
                  <select {...register("major[1]", { required: true })}>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="BBA">BBA</option>
                  </select>
                  {errors.major && errors.major[1]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>
                {/* Score Obtained */}

                <div id="education-status-field" className={`${qualificationField} ${box}`}>
                  <label>
                    Qualification Obtained/ to be obtained <span className={requiredField}>*</span>
                  </label>
                  <input type="text" {...register("qualification[1]", { required: true })} />
                  {errors.qualification && errors.qualification[1]?.type === "required" && (
                    <FormErrorMessage msg="Cannot be empty" />
                  )}
                </div>
              </div>
            )}
            {/* -----------------3rd educational status--------------------- */}

            {eduCount >= 2 && (
              <div className={educationInfoInner}>
                <h2 className={educationAdditionalHeading}>3rd</h2>
                <div id="education-status-field" className={`${institutionField} ${box}`}>
                  <label>
                    School, College, University, Etc. <span className={requiredField}>*</span>
                  </label>
                  <input type="text" {...register("institutionName[2]", { required: true })} />
                  {errors.institutionName && errors.institutionName[2]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>

                {/* Period */}

                <div id="education-status-field" className={`${periodFromField} ${box}`}>
                  <label>
                    From <span className={requiredField}>*</span>
                  </label>
                  <input type="date" {...register("institutionFrom[2]", { required: true })} />
                  {errors.institutionFrom && errors.institutionFrom[2]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                <div id="education-status-field" className={`${periodToField} ${box}`}>
                  <label>
                    To <span className={requiredField}>*</span>
                  </label>
                  <input type="date" {...register("institutionTo[2]", { required: true })} />
                  {errors.institutionTo && errors.institutionTo[2]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                {/* Major */}

                <div id="education-status-field" className={`${majorField} ${box}`}>
                  <label>
                    Major <span className={requiredField}>*</span>
                  </label>
                  <select {...register("major[2]", { required: true })}>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="BBA">BBA</option>
                  </select>
                  {errors.major && errors.major[2]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>
                {/* Score Obtained */}

                <div id="education-status-field" className={`${qualificationField} ${box}`}>
                  <label>
                    Qualification Obtained/ to be obtained <span className={requiredField}>*</span>
                  </label>
                  <input type="text" {...register("qualification[2]", { required: true })} />
                  {errors.qualification && errors.qualification[2]?.type === "required" && (
                    <FormErrorMessage msg="Cannot be empty" />
                  )}
                </div>
              </div>
            )}
            {/* -----------------4th educational status--------------------- */}
            {eduCount >= 3 && (
              <div className={educationInfoInner}>
                <h2 className={educationAdditionalHeading}>4th</h2>
                <div id="education-status-field" className={`${institutionField} ${box}`}>
                  <label>
                    School, College, University, Etc. <span className={requiredField}>*</span>
                  </label>
                  <input type="text" {...register("institutionName[3]", { required: true })} />
                  {errors.institutionName && errors.institutionName[3]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>

                {/* Period */}

                <div id="education-status-field" className={`${periodFromField} ${box}`}>
                  <label>
                    From <span className={requiredField}>*</span>
                  </label>
                  <input type="date" {...register("institutionFrom[3]", { required: true })} />
                  {errors.institutionFrom && errors.institutionFrom[3]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                <div id="education-status-field" className={`${periodToField} ${box}`}>
                  <label>
                    To <span className={requiredField}>*</span>
                  </label>
                  <input type="date" {...register("institutionTo[3]", { required: true })} />
                  {errors.institutionTo && errors.institutionTo[3]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                {/* Major */}

                <div id="education-status-field" className={`${majorField} ${box}`}>
                  <label>
                    Major <span className={requiredField}>*</span>
                  </label>
                  <select {...register("major[3]", { required: true })}>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="BBA">BBA</option>
                  </select>
                  {errors.major && errors.major[3]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>
                {/* Score Obtained */}

                <div id="education-status-field" className={`${qualificationField} ${box}`}>
                  <label>
                    Qualification Obtained/ to be obtained <span className={requiredField}>*</span>
                  </label>
                  <input type="text" {...register("qualification[3]", { required: true })} />
                  {errors.qualification && errors.qualification[3]?.type === "required" && (
                    <FormErrorMessage msg="Cannot be empty" />
                  )}
                </div>
              </div>
            )}

            {/* Add more button */}
            <div className={`${addMoreButton} ${box}`}>
              <div className={buttonContainer}>
                <div
                  className={buttonComponent}
                  onClick={() => {
                    setEduCount((prev) => (prev < maxEduCount ? prev + 1 : maxEduCount));
                  }}
                >
                  <ButtonLight type="button" text="Add More" />
                </div>
                <button
                  onClick={() =>
                    setEduCount((prev) => (prev >= maxEduCount ? maxEduCount - 2 : prev === 0 ? 0 : prev - 1))
                  }
                  type="button"
                  className={`${removeButtonComponent} ${eduCount < 1 && removeButtonDisabled}`}
                >
                  Remove
                </button>
              </div>
              {eduCount >= maxEduCount && <FormErrorMessage msg="Cannot Add more than 4" />}
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
              <p>How will an exposure visit at the Yunus Centre apply to your professional goals?</p>
            </div>
            <div className={`${ansOne} ${box}`}>
              <textarea {...register("profGoal", { maxLength: 250 })} />
            </div>
            <div className={`${questionTwo} ${box}`}>
              <p>What does the future of Social Business look like to you? </p>
            </div>
            <div className={`${ansTwo} ${box}`}>
              <textarea
                {...register("futureSocialBusiness", {
                  maxLength: 250,
                })}
              />
            </div>
            <div className={`${questionThree} ${box}`}>
              <p>Tick (√) five or less Grameen Organizations you would like to meet during your time here? </p>
            </div>
            <div className={`${ansThree} ${box}`}>
              {orgData.map((data, index) => {
                return (
                  <div key={data.id} className={checkboxContainer}>
                    <input
                      type="checkbox"
                      id={data.id}
                      {...register("organization")}
                      value={data.organization}
                      checked={orgFlag[index]}
                      onClick={(e) => {
                        countNumberOfSelectedItems(e, 5, index);
                      }}
                    />
                    <label htmlFor={data.id}>{data.organization}</label>
                  </div>
                );
              })}

              {(errors.organization || orgError) && (
                <div className={errorMessages}>
                  {errors.organization?.type === "required" && <FormErrorMessage msg="Organization is required" />}
                  {orgError && (
                    <FormErrorMessage msg="You can select a maximum of 5 options, please deselect one or multiple options to select the other ones" />
                  )}
                </div>
              )}
            </div>
            <div className={`${questionFour} ${box}`}>
              <p>Did you participate in any field trip with any Grameen organization before?</p>
              <p>If yes, please specify the organization, the date and duration?</p>
            </div>
            <div className={`${ansFour} ${box}`}>
              <textarea
                {...register("participateGrameenOrg", {
                  maxLength: 250,
                })}
              />
            </div>
            <div className={`${questionFive} ${box}`}>
              <p>Where did you learn about the program (Please tick √ as appropriate)</p>
            </div>
            <div id="program-source" className={`${ansFive} ${box}`}>
              {/* option 1 */}
              <div className={optionContainer}>
                <div className={container}>
                  <div>
                    <input
                      type="checkbox"
                      id="sourceCampus"
                      value="Campus"
                      onChange={() => setSource((prevSource) => [!prevSource[0], false, false, false])}
                      checked={source[0]}
                    />
                    <label htmlFor="sourceCampus">Campus (Specify)</label>
                  </div>
                  <input id="sourceCampusInput" type="text" {...register("sourceCampus")} disabled={!source[0]} />
                </div>
              </div>
              {/* option 2 */}
              <div className={optionContainer}>
                <div className={container}>
                  <div>
                    <input
                      type="checkbox"
                      id="sourceRef"
                      value="Reference"
                      onChange={() => setSource((prevSource) => [false, !prevSource[1], false, false])}
                      checked={source[1]}
                    />
                    <label htmlFor="sourceRef">Referred by (Specify)</label>
                  </div>
                  <input id="sourceRefInput" type="text" {...register("sourceRef")} disabled={!source[1]} />
                </div>
              </div>
              {/* option 3 */}
              <div className={optionContainer}>
                <div className={container}>
                  <div>
                    <input
                      type="checkbox"
                      id="sourceYunus"
                      value="Website"
                      onChange={() => {
                        setSource((prevSource) => [false, false, !prevSource[2], false]);
                      }}
                      checked={source[2]}
                    />
                    <label htmlFor="sourceYunus">Yunus Centre Website</label>
                  </div>
                  <input id="sourceYunusInput" type="text" {...register("sourceYunus")} disabled={!source[2]} />
                </div>
              </div>
              {/* option 4 */}
              <div className={optionContainer}>
                <div className={container}>
                  <div>
                    <input
                      type="checkbox"
                      id="sourceOther"
                      value="Others"
                      onChange={() => {
                        setSource((prevSource) => [false, false, false, !prevSource[3]]);
                      }}
                      checked={source[3]}
                    />
                    <label htmlFor="sourceOther">Others (Specify)</label>
                  </div>
                  <input id="sourceOtherInput" type="text" {...register("sourceOthers")} disabled={!source[3]} />
                </div>
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
              <input id="firstContactName" type="text" {...register("firstContactName")} />
            </div>
            <div className={`${firstContactAddress} ${box}`}>
              <label htmlFor="firstContactAddress">Address</label>
              <input id="firstContactAddress" type="text" {...register("firstContactAddress")} />
            </div>
            <div className={`${firstContactTel} ${box}`}>
              <label htmlFor="firstContactTel">Telephone</label>
              <input id="firstContactTel" type="tel" {...register("firstContactTel")} />
            </div>
            <div className={`${firstContactBusinessName} ${box}`}>
              <label htmlFor="firstContactBusinessName">Business Name</label>
              <input id="firstContactBusinessName" type="text" {...register("firstContactBusinessName")} />
            </div>
            <div className={`${firstContactBusinessAddress} ${box}`}>
              <label htmlFor="firstContactBusinessAddress">Business Address</label>
              <input id="firstContactBusinessAddress" type="text" {...register("firstContactBusinessAddress")} />
            </div>
            <div className={`${firstContactBusinessTel} ${box}`}>
              <label htmlFor="firstContactBusinessTel">Telephone</label>
              <input id="firstContactBusinessTel" type="tel" {...register("firstContactBusinessTel")} />
            </div>
            <div className={`${firstContactRelation} ${box}`}>
              <label htmlFor="firstContactRelation">Relation to Applicant</label>
              <input id="firstContactRelation" type="text" {...register("firstContactRelation")} />
            </div>

            {/* Second Contact */}
            <div className={`${secondContactName} ${box}`}>
              <label htmlFor="secondContactName">
                Name of <b>second</b> Contact
              </label>
              <input id="secondContactName" type="text" {...register("secondContactName")} />
            </div>
            <div className={`${secondContactAddress} ${box}`}>
              <label htmlFor="secondContactAddress">Address</label>
              <input id="secondContactAddress" type="text" {...register("secondContactAddress")} />
            </div>
            <div className={`${secondContactTel} ${box}`}>
              <label htmlFor="secondContactTel">Telephone</label>
              <input id="secondContactTel" type="tel" {...register("secondContactTel")} />
            </div>
            <div className={`${secondContactBusinessName} ${box}`}>
              <label htmlFor="secondContactBusinessName">Business Name</label>
              <input id="secondContactBusinessName" type="text" {...register("secondContactBusinessName")} />
            </div>
            <div className={`${secondContactBusinessAddress} ${box}`}>
              <label htmlFor="secondContactBusinessAddress">Business Address</label>
              <input id="secondContactBusinessAddress" type="text" {...register("secondContactBusinessAddress")} />
            </div>
            <div className={`${secondContactBusinessTel} ${box}`}>
              <label htmlFor="secondContactBusinessTel">Telephone</label>
              <input id="secondContactBusinessTel" type="tel" {...register("secondContactBusinessTel")} />
            </div>
            <div className={`${secondContactRelation} ${box}`}>
              <label htmlFor="secondContactRelation">Relation to Applicant</label>
              <input id="secondContactRelation" type="text" {...register("secondContactRelation")} />
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
