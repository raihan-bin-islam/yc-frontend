/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import ButtonLight from "../../Shared/Button/Button";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

// Data
import defaultValues from "./data/defaultValues.json";

// CSS
import styles from "./ImmersionForm.module.scss";
import { fileTooLarge, isFutureDate, supportedFileTypes } from "../utilityFunctions/customFormValidations";
import { clearTextInput } from "../utilityFunctions/formDataChecks";

function ImmersionForm({ draftData }) {
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
    educationInfoInner,
    educationAdditionalHeading,
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

  //------------------------------------- State Variables ***Start*** ------------------------------------------------------

  const maxEduCount = 4;
  const [eduCount, setEduCount] = useState(0);
  // state variable for program-source to control checkbox input
  const [source, setSource] = useState([false, false, false, false]);

  const [draftButton, setDraftButton] = useState(false);

  //------------------------------------- State Variables ***End*** ------------------------------------------------------

  //------------------------------------  Input field changes on Render ***Start***----------------------------------------

  // To Clear inputs when source of learning is either changed or deselected
  useEffect(() => {
    clearTextInput("sourceCampusInput");
    clearTextInput("sourceRefInput");
    clearTextInput("sourceYunusInput");
    clearTextInput("sourceOtherInput");
  }, [source]);

  // To unregister input fields on unmount
  useEffect(() => {
    unregisterInputFields(eduCount);
  }, [eduCount]);

  //------------------------------------  Input field changes on Render ***End***----------------------------------------

  //   useForm API
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: defaultValues,
  });

  // --------------------- Initializing Form with Draft Data ***Start*** --------------------------------------------------------
  useEffect(() => {
    if (draftData?.id) {
      setEduCount(draftData?.institutionName?.length - 1);
      loadImage(draftData?.imageFile, true);
      reset(draftData);
    }
  }, [draftData]);
  // ---------------------------- Initializing Form with Draft Data ***End*** -------------------------------------------------------

  // ------------------------ Custom Functions ***Start*** ------------------------------------------------------
  // Load Uploaded Image on the form
  const loadImage = (file, link) => {
    let image = document.getElementById("output");
    if (link) {
      const baseUrlForImage = "https://ycadmin.yyventures.org/uploads/exposure_visit/";
      image.src = baseUrlForImage + file;
      return;
    }
    file
      ? (image.src = URL.createObjectURL(file))
      : (image.src = "/assets/images/visit_programs/yc_programs/image_upload_dummy_image.png");
  };

  // Unregister input fields on unmount
  const unregisterInputFields = (count) => {
    // Unregister education field based on rendered element count, after we add or remove some extra fields
    // When we add an extra education field the eduCount becomes 1 and as we remove those fields(eduCount==0) we must as well unregister the fields accordingly
    // And this is applicable for all input fields with multiple data or an array of data except for the checkboxes
    unregister(`institutionName[${count + 1}]`); // example: unregister institutionName[2] when eduCount == 1,
    unregister(`institutionFrom[${count + 1}]`);
    unregister(`institutionTo[${count + 1}]`);
    unregister(`major[${count + 1}]`);
    unregister(`qualification[${count + 1}]`);
  };
  // ------------------------ Custom Functions ***End*** ------------------------------------------------------

  // Form On submit function
  const onSubmit = async (data, e) => {
    e.preventDefault();
    // Base url of api
    const baseUrl = process.env.baseUrl;

    let formdata = new FormData();

    // -----------------------------Personal Information--------------------
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
    // -----------------------------Education--------------------------------------------------------------
    data.institutionName.forEach((element, index) => {
      formdata.append(`education[${index}][institution]`, data.institutionName[index]);
      formdata.append(`education[${index}][period_from]`, data.institutionFrom[index]);
      formdata.append(`education[${index}][period_to]`, data.institutionTo[index]);
      formdata.append(`education[${index}][major]`, data.major[index]);
      formdata.append(`education[${index}][qualification]`, data.qualification[index]);
    });
    // ----------------------------Employment---------------------------------------------------------------
    formdata.append("current_employment[0][organization]", data.orgName);
    formdata.append("current_employment[0][designation]", data.designation);
    formdata.append("current_employment[0][since]", data.since);
    formdata.append("current_employment[0][responsibilities]", data.responsibility);
    //-------------------------Reason To Apply--------------------------------------------------------------
    formdata.append("reason_to_apply", data.purposeForIntern);
    formdata.append("interesting_features_sb", data.featureSocialBusiness);
    formdata.append("field_trip_details", data.participateGrameenOrg);
    // -----------------------Source of learning------------------------------------------------------------
    formdata.append("source_of_learning[0][campus]", data.sourceCampus);
    formdata.append("source_of_learning[0][reference]", data.sourceRef);
    formdata.append("source_of_learning[0][yc_website]", data.sourceYunus);
    formdata.append("source_of_learning[0][others]", data.sourceOthers);
    // -------------------------References------------------------------------------------------------------
    formdata.append("references[0][name]", data.firstReferenceName);
    formdata.append("references[0][position]", data.firstReferencePosition);
    formdata.append("references[0][organization]", data.firstReferenceOrg);
    formdata.append("references[0][address]", data.firstReferenceAddress);
    formdata.append("references[0][telephone]", data.firstReferenceTel);
    formdata.append("references[0][email]", data.firstReferenceEmail);

    formdata.append("references[1][name]", data.secondReferenceName);
    formdata.append("references[1][position]", data.secondReferencePosition);
    formdata.append("references[1][organization]", data.secondReferenceOrg);
    formdata.append("references[1][address]", data.secondReferenceAddress);
    formdata.append("references[1][telephone]", data.secondReferenceTel);
    formdata.append("references[1][email]", data.secondReferenceEmail);
    // -------------------------Emergency Contacts----------------------------------------------------------
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

    // Choose between 'save as draft' or 'submit'
    formdata.append("is_submitted", !draftButton);

    if (draftData) {
      if (draftButton) {
        formdata.append("app_id", draftData.app_id);
        formdata.append("id", draftData.id);
      } else {
        formdata.append("id", draftData.id);
      }
    }

    await fetch(`${baseUrl}/immersion-program-application`, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.status)
      .then((status) => status === 200 && reset())
      .catch((err) => err);
  };

  return (
    <div className={immersionForm}>
      <div className={immersionFormHeader}>
        <HeroBannerSmall title="Immersion Program Form" />
      </div>
      <div className={`${immersionFormBody} container-layout`}>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          {/*----------------- PERSONAL INFORMATION ----------------------*/}
          <div className={personalInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>(Apply at-least 2 months before start date)</p>
            </div>

            {/*-----------------------------------------------------*/}
            {/*------------------ Family Name ----------------------*/}
            {/*-----------------------------------------------------*/}
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
              {errors.familyName?.type === "required" && <FormErrorMessage msg="Family Name Required" />}
            </div>
            {/*---------------------------------------------------*/}
            {/*------------------ First Name ---------------------*/}
            {/*---------------------------------------------------*/}
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
              {errors.firstName?.type === "required" && <FormErrorMessage msg="First Name Required" />}
            </div>
            {/*-----------------------------------------------*/}
            {/*----------------- Date of birth ---------------*/}
            {/*-----------------------------------------------*/}
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
              {errors.dob?.type === "required" && <FormErrorMessage msg="Date of birth is required" />}
              {errors.dob?.type === "validate" && <FormErrorMessage msg="Date of birth cannot be a future date" />}
            </div>
            {/*--------------------------------------------------*/}
            {/*----------------- Expected duration --------------*/}
            {/*--------------------------------------------------*/}
            <div className={`${durationBox} ${box}`}>
              <label htmlFor="duration" className={requiredField}>
                Expected Duration
              </label>
              <input id="duration" type="number" {...register("duration", { required: true, min: 0 })} />
              {errors.duration?.type === "required" && <FormErrorMessage msg="Expected duration cannot be empty" />}
              {errors.duration?.type === "min" && <FormErrorMessage msg="Expected duration cannot be negative" />}
            </div>
            {/*------------------------------------------------*/}
            {/*------------------- Start date -----------------*/}
            {/*------------------------------------------------*/}
            <div className={`${startDateBox} ${box}`}>
              <label htmlFor="startDate" className={requiredField}>
                Start Date
              </label>
              <input id="startDate" type="date" {...register("startDate", { required: true })} />
              {errors.startDate?.type === "required" && <FormErrorMessage msg="Start Date is required" />}
            </div>
            {/*-----------------------------------------------*/}
            {/*------------------ Nationality ----------------*/}
            {/*-----------------------------------------------*/}
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
              {errors.nationality?.type === "required" && <FormErrorMessage msg="Nationality Required" />}
              {errors.nationality?.type === "pattern" && <FormErrorMessage msg="Only use A-Z a-z" />}
            </div>
            {/*---------------------------------------------*/}
            {/*------------------ Gender -------------------*/}
            {/*---------------------------------------------*/}
            <div className={`${genderBox} ${box}`}>
              <label htmlFor="gender" className={requiredField}>
                Gender
              </label>
              <select {...register("gender", { required: true })}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              {errors.gender?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
            </div>
            {/*------------------------------------------------*/}
            {/*----------------- Passport number --------------*/}
            {/*------------------------------------------------*/}
            <div className={`${passportNumberBox} ${box}`}>
              <label htmlFor="passportNumber">Passport Number</label>
              <input id="passportNumber" type="text" {...register("passportNumber")} />
            </div>
            {/*------------------------------------------------*/}
            {/*----------------- Recent Photo -----------------*/}
            {/*------------------------------------------------*/}
            <div className={`${imageFileBox} ${box}`}>
              <div className={imageContainer}>
                <p className={requiredField}>Recent Photo</p>
                <p>(Within 3 months)</p>
                {/* to show uploaded image */}
                <img src="/assets/images/visit_programs/yc_programs/image_upload_dummy_image.png" id="output" alt="" />
              </div>
              <input
                id="imageFile"
                className={imageFileBtn}
                type="file"
                {...register("imageFile", {
                  required: true,
                  validate: {
                    fileSize: (file) => fileTooLarge(file),
                    fileTypes: (file) => supportedFileTypes(file),
                  },
                })}
                onChange={(e) => loadImage(e.target.files[0])}
              />
              {errors.imageFile?.type === "required" && <FormErrorMessage msg="Please Upload an Image" />}
              {errors.imageFile?.type === "fileSize" && <FormErrorMessage msg="File Too Large" />}
              {errors.imageFile?.type === "fileTypes" && (
                <FormErrorMessage msg="Please Upload An Image File ( jpeg/png )" />
              )}
            </div>
            {/*--------------------------------------------------*/}
            {/*----------------- Mailing Address ----------------*/}
            {/*--------------------------------------------------*/}
            <div className={`${mailingAddBox} ${box}`}>
              <label htmlFor="mailingAdd" className={requiredField}>
                Mailing Address
              </label>
              <input id="mailingAdd" type="text" {...register("mailingAdd", { required: true })} />
              {errors.mailingAdd?.type === "required" && <FormErrorMessage msg="Mailing Address can not be empty" />}
            </div>
            {/*---------------------------------------------------------------------------*/}
            {/*------------------------------- Telephone ---------------------------------*/}
            {/*---------------------------------------------------------------------------*/}
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
              {errors.telephoneNo?.type === "pattern" && <FormErrorMessage msg="invalid number" />}
            </div>
            {/*------------------------------------------------------------------------------*/}
            {/*------------------------------- Mobile Phone ---------------------------------*/}
            {/*------------------------------------------------------------------------------*/}
            <div className={`${mobilePhoneBox} ${box}`}>
              <label htmlFor="mobilePhone">Mobile Phone</label>
              <input
                id="mobilePhone"
                type="text"
                {...register("mobilePhone", {
                  pattern: /^[0-9]+$/i,
                })}
              />
              {errors.mobilePhone?.type === "pattern" && <FormErrorMessage msg="Please enter a valid mobile number" />}
            </div>
            {/*-------------------------------------------------------------------------------*/}
            {/*------------------------------- Email Address ---------------------------------*/}
            {/*-------------------------------------------------------------------------------*/}
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
              {errors.email?.type === "required" && <FormErrorMessage msg="Email can not be empty" />}
              {errors.email?.type === "pattern" && <FormErrorMessage msg="Please Provide a valid email address" />}
            </div>
          </div>

          {/*==================================== EDUCATION STATUS ===================================*/}

          <div id="education-status" className={educationInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Education (in chronological order)</p>
            </div>
            {/*----------------------------------------------------------------------------------*/}
            {/*------------------------------- Institution Name ---------------------------------*/}
            {/*----------------------------------------------------------------------------------*/}
            <div className={educationInfoInner}>
              <div id="education-status-field" className={`${institutionField} ${box}`}>
                <label>
                  School, College, University, Etc. <span className={requiredField}></span>
                </label>
                <input
                  type="text"
                  {...register("institutionName[0]", {
                    required: !draftButton,
                  })}
                />
                {errors.institutionName && errors.institutionName[0]?.type === "required" && (
                  <FormErrorMessage msg="Field can not be empty" />
                )}
              </div>

              {/*------------------------------------------------------------------------*/}
              {/*------------------------------- Period ---------------------------------*/}
              {/*------------------------------------------------------------------------*/}

              <div id="education-status-field" className={`${periodFromField} ${box}`}>
                <label>
                  From <span className={requiredField}></span>
                </label>
                <input
                  type="date"
                  {...register("institutionFrom[0]", {
                    required: !draftButton,
                  })}
                />
                {errors.institutionFrom && errors.institutionFrom[0]?.type === "required" && (
                  <FormErrorMessage msg="Date is required" />
                )}
              </div>

              <div id="education-status-field" className={`${periodToField} ${box}`}>
                <label>
                  To <span className={requiredField}></span>
                </label>
                <input type="date" {...register("institutionTo[0]", { required: !draftButton })} />
                {errors.institutionTo && errors.institutionTo[0]?.type === "required" && (
                  <FormErrorMessage msg="Date is required" />
                )}
              </div>

              {/*-----------------------------------------------------------------------*/}
              {/*------------------------------- Major ---------------------------------*/}
              {/*-----------------------------------------------------------------------*/}

              <div id="education-status-field" className={`${majorField} ${box}`}>
                <label>
                  Major <span className={requiredField}></span>
                </label>
                <select {...register("major[0]", { required: !draftButton })}>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="BBA">BBA</option>
                </select>
                {errors.major && errors.major[0]?.type === "required" && (
                  <FormErrorMessage msg="Field can not be empty" />
                )}
              </div>
              {/*--------------------------------------------------------------------------------*/}
              {/*------------------------------- Score Obtained ---------------------------------*/}
              {/*--------------------------------------------------------------------------------*/}
              <div id="education-status-field" className={`${qualificationField} ${box}`}>
                <label>
                  Qualification Obtained/ to be obtained <span className={requiredField}></span>
                </label>
                <input type="text" {...register("qualification[0]", { required: !draftButton })} />
                {errors.qualification && errors.qualification[0]?.type === "required" && (
                  <FormErrorMessage msg="Cannot be empty" />
                )}
              </div>
            </div>

            {/* -----------------2nd educational status--------------------- */}
            {eduCount >= 1 && (
              <div className={educationInfoInner}>
                {/*------------------------------------------------------*/}
                {/*------------------- Institution Name -----------------*/}
                {/*------------------------------------------------------*/}
                <div id="education-status-field" className={`${institutionField} ${box}`}>
                  <label>
                    School, College, University, Etc. <span className={requiredField}></span>
                  </label>
                  <input
                    type="text"
                    {...register("institutionName[1]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionName && errors.institutionName[1]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>

                {/*----------------------------------------------*/}
                {/*------------------ Period --------------------*/}
                {/*----------------------------------------------*/}

                <div id="education-status-field" className={`${periodFromField} ${box}`}>
                  <label>
                    From <span className={requiredField}></span>
                  </label>
                  <input
                    type="date"
                    {...register("institutionFrom[1]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionFrom && errors.institutionFrom[1]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                <div id="education-status-field" className={`${periodToField} ${box}`}>
                  <label>
                    To <span className={requiredField}></span>
                  </label>
                  <input
                    type="date"
                    {...register("institutionTo[1]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionTo && errors.institutionTo[1]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                {/*-------------------------------------------*/}
                {/*------------------ Major ------------------*/}
                {/*-------------------------------------------*/}

                <div id="education-status-field" className={`${majorField} ${box}`}>
                  <label>
                    Major <span className={requiredField}></span>
                  </label>
                  <select {...register("major[1]", { required: !draftButton })}>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="BBA">BBA</option>
                  </select>
                  {errors.major && errors.major[1]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>
                {/*------------------------------------------------*/}
                {/*---------------- Score Obtained ----------------*/}
                {/*------------------------------------------------*/}

                <div id="education-status-field" className={`${qualificationField} ${box}`}>
                  <label>
                    Qualification Obtained/ to be obtained <span className={requiredField}></span>
                  </label>
                  <input
                    type="text"
                    {...register("qualification[1]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.qualification && errors.qualification[1]?.type === "required" && (
                    <FormErrorMessage msg="Cannot be empty" />
                  )}
                </div>
              </div>
            )}
            {/* -----------------3rd educational status--------------------- */}

            {eduCount >= 2 && (
              <div className={educationInfoInner}>
                <div id="education-status-field" className={`${institutionField} ${box}`}>
                  <label>
                    School, College, University, Etc. <span className={requiredField}></span>
                  </label>
                  <input
                    type="text"
                    {...register("institutionName[2]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionName && errors.institutionName[2]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>

                {/*----------------------------------------------*/}
                {/*------------------- Period -------------------*/}
                {/*----------------------------------------------*/}

                <div id="education-status-field" className={`${periodFromField} ${box}`}>
                  <label>
                    From <span className={requiredField}></span>
                  </label>
                  <input
                    type="date"
                    {...register("institutionFrom[2]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionFrom && errors.institutionFrom[2]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                <div id="education-status-field" className={`${periodToField} ${box}`}>
                  <label>
                    To <span className={requiredField}></span>
                  </label>
                  <input
                    type="date"
                    {...register("institutionTo[2]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionTo && errors.institutionTo[2]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                {/*-----------------------------------------*/}
                {/*---------------- Major ------------------*/}
                {/*-----------------------------------------*/}

                <div id="education-status-field" className={`${majorField} ${box}`}>
                  <label>
                    Major <span className={requiredField}></span>
                  </label>
                  <select {...register("major[2]", { required: !draftButton })}>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="BBA">BBA</option>
                  </select>
                  {errors.major && errors.major[2]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>
                {/*---------------------------------------------*/}
                {/*-------------- Score Obtained ---------------*/}
                {/*---------------------------------------------*/}

                <div id="education-status-field" className={`${qualificationField} ${box}`}>
                  <label>
                    Qualification Obtained/ to be obtained <span className={requiredField}></span>
                  </label>
                  <input
                    type="text"
                    {...register("qualification[2]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.qualification && errors.qualification[2]?.type === "required" && (
                    <FormErrorMessage msg="Cannot be empty" />
                  )}
                </div>
              </div>
            )}
            {/* -----------------4th educational status--------------------- */}
            {eduCount >= 3 && (
              <div className={educationInfoInner}>
                <div id="education-status-field" className={`${institutionField} ${box}`}>
                  <label>
                    School, College, University, Etc. <span className={requiredField}></span>
                  </label>
                  <input
                    type="text"
                    {...register("institutionName[3]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionName && errors.institutionName[3]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>

                {/*------------------------------------------------*/}
                {/*------------------ Period ----------------------*/}
                {/*------------------------------------------------*/}

                <div id="education-status-field" className={`${periodFromField} ${box}`}>
                  <label>
                    From <span className={requiredField}></span>
                  </label>
                  <input
                    type="date"
                    {...register("institutionFrom[3]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionFrom && errors.institutionFrom[3]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                <div id="education-status-field" className={`${periodToField} ${box}`}>
                  <label>
                    To <span className={requiredField}></span>
                  </label>
                  <input
                    type="date"
                    {...register("institutionTo[3]", {
                      required: !draftButton,
                    })}
                  />
                  {errors.institutionTo && errors.institutionTo[3]?.type === "required" && (
                    <FormErrorMessage msg="Date is required" />
                  )}
                </div>

                {/*-------------------------------------------*/}
                {/*------------------ Major ------------------*/}
                {/*-------------------------------------------*/}

                <div id="education-status-field" className={`${majorField} ${box}`}>
                  <label>
                    Major <span className={requiredField}></span>
                  </label>
                  <select {...register("major[3]", { required: !draftButton })}>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="BBA">BBA</option>
                  </select>
                  {errors.major && errors.major[3]?.type === "required" && (
                    <FormErrorMessage msg="Field can not be empty" />
                  )}
                </div>
                {/*-----------------------------------------------------*/}
                {/*------------------ Score Obtained -------------------*/}
                {/*-----------------------------------------------------*/}

                <div id="education-status-field" className={`${qualificationField} ${box}`}>
                  <label>
                    Qualification Obtained/ to be obtained <span className={requiredField}></span>
                  </label>
                  <input
                    type="text"
                    {...register("qualification[3]", {
                      required: !draftButton,
                    })}
                  />
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
          {/*-----------------------------------------------------------------*/}
          {/*------------------ CURRENT EMPLOYMENT STATUS --------------------*/}
          {/*-----------------------------------------------------------------*/}

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
              <textarea {...register("purposeForIntern", { maxLength: 250 })} />
            </div>
            <div className={`${questionTwo} ${box}`}>
              <p>Is there any particular feature/s in social business which you find interesting?</p>
            </div>
            <div className={`${ansTwo} ${box}`}>
              <textarea
                {...register("featureSocialBusiness", {
                  maxLength: 250,
                })}
              />
            </div>
            <div className={`${questionThree} ${box}`}>
              <p>Did you participate in any field trip withanyGrameen organization before?</p>
              <p>If yes, please specifythe organization, the date and duration?</p>
            </div>
            <div className={`${ansThree} ${box}`}>
              <textarea
                {...register("participateGrameenOrg", {
                  maxLength: 250,
                })}
              />
            </div>
            <div className={`${questionFour} ${box}`}>
              <p>Where did you learn about the program (Please tick √ as appropriate)</p>
            </div>
            <div id="program-source" className={`${ansFour} ${box}`}>
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

          {/*---------------------------------------------*/}
          {/*---------------- REFERENCES -----------------*/}
          {/*---------------------------------------------*/}

          <div className={referenceContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>References</p>
            </div>
            {/*----------------------------------------------*/}
            {/*--------------- First Reference --------------*/}
            {/*----------------------------------------------*/}
            <div className={`${firstReferenceName} ${box}`}>
              <label htmlFor="firstReferenceName" className={requiredField}>
                Name of <b>First</b> Reference
              </label>
              <input
                id="firstReferenceName"
                type="text"
                {...register("firstReferenceName", { required: !draftButton })}
              />
              {errors.firstReferenceName?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
            </div>
            <div className={`${firstReferencePosition} ${box}`}>
              <label htmlFor="firstReferencePosition" className={requiredField}>
                Position
              </label>
              {errors.firstReferencePosition?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
              <input id="firstReferencePosition" type="text" {...register("firstReferencePosition")} />
            </div>
            <div className={`${firstReferenceOrg} ${box}`}>
              <label htmlFor="firstReferenceOrg" className={requiredField}>
                Name of Organization
              </label>
              <input
                id="firstReferenceOrg"
                type="text"
                {...register("firstReferenceOrg", { required: !draftButton })}
              />
              {errors.firstReferenceOrg?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
            </div>
            <div className={`${firstReferenceAddress} ${box}`}>
              <label htmlFor="firstReferenceAddress" className={requiredField}>
                Correspondence Address
              </label>
              <input
                id="firstReferenceAddress"
                type="text"
                {...register("firstReferenceAddress", {
                  required: !draftButton,
                })}
              />
              {errors.firstReferenceAddress?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
            </div>
            <div className={`${firstReferenceTel} ${box}`}>
              <label htmlFor="firstReferenceTel" className={requiredField}>
                Telephone No.
              </label>
              <input
                id="firstReferenceTel"
                type="tel"
                {...register("firstReferenceTel", {
                  required: !draftButton,
                  pattern: /^[0-9]+$/i,
                })}
              />
              {errors.firstReferenceTel?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
              {errors.firstReferenceTel?.type === "pattern" && <FormErrorMessage msg="Invalid number" />}
            </div>
            <div className={`${firstReferenceEmail} ${box}`}>
              <label htmlFor="firstReferenceEmail" className={requiredField}>
                Email Address
              </label>
              <input
                id="firstReferenceEmail"
                type="email"
                {...register("firstReferenceEmail", {
                  required: !draftButton,
                  pattern:
                    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i,
                })}
              />
              {errors.firstReferenceEmail?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
              {errors.firstReferenceEmail?.type === "pattern" && <FormErrorMessage msg="Invalid email" />}
            </div>

            {/*----------------------------------------------------------*/}
            {/*------------------ Second Reference ----------------------*/}
            {/*----------------------------------------------------------*/}
            <div className={`${secondReferenceName} ${box}`}>
              <label htmlFor="secondReferenceName">
                Name of <b>second</b> Reference
              </label>
              <input id="secondReferenceName" type="text" {...register("secondReferenceName")} />
            </div>
            <div className={`${secondReferencePosition} ${box}`}>
              <label htmlFor="secondReferencePosition">Position</label>
              <input id="secondReferencePosition" type="text" {...register("secondReferencePosition")} />
            </div>
            <div className={`${secondReferenceOrg} ${box}`}>
              <label htmlFor="secondReferenceOrg">Name of Organization</label>
              <input id="secondReferenceOrg" type="text" {...register("secondReferenceOrg")} />
            </div>
            <div className={`${secondReferenceAddress} ${box}`}>
              <label htmlFor="secondReferenceAddress">Correspondence Address</label>
              <input id="secondReferenceAddress" type="text" {...register("secondReferenceAddress")} />
            </div>
            <div className={`${secondReferenceTel} ${box}`}>
              <label htmlFor="secondReferenceTel">Telephone No.</label>
              <input id="secondReferenceTel" type="text" {...register("secondReferenceTel")} />
            </div>
            <div className={`${secondReferenceEmail} ${box}`}>
              <label htmlFor="secondReferenceEmail">E-mail Address</label>
              <input
                id="secondReferenceEmail"
                type="email"
                {...register("secondReferenceEmail", {
                  pattern:
                    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i,
                })}
              />
              {errors.secondReferenceEmail?.type === "pattern" && <FormErrorMessage msg="Invalid email" />}
            </div>
          </div>

          {/*-----------------------------------------------------*/}
          {/*----------------- EMERGENCY CONTACTS ----------------*/}
          {/*-----------------------------------------------------*/}

          <div className={emergencyContactContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Emergency Contacts</p>
            </div>
            {/*----------------------------------------------------*/}
            {/*------------------- First Contact ------------------*/}
            {/*----------------------------------------------------*/}
            <div className={`${firstContactName} ${box}`}>
              <label htmlFor="firstContactName" className={requiredField}>
                Name of <b>First</b> Contact
              </label>
              <input id="firstContactName" type="text" {...register("firstContactName", { required: !draftButton })} />
              {errors.firstContactName?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
            </div>
            <div className={`${firstContactAddress} ${box}`}>
              <label htmlFor="firstContactAddress" className={requiredField}>
                Address
              </label>
              <input
                id="firstContactAddress"
                type="text"
                {...register("firstContactAddress", { required: !draftButton })}
              />
              {errors.firstContactAddress?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
            </div>
            <div className={`${firstContactTel} ${box}`}>
              <label htmlFor="firstContactTel" className={requiredField}>
                Telephone
              </label>
              <input
                id="firstContactTel"
                type="tel"
                {...register("firstContactTel", {
                  required: !draftButton,
                  pattern: /^[0-9]+$/i,
                })}
              />
              {errors.firstContactTel?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
              {errors.firstContactTel?.type === "pattern" && <FormErrorMessage msg="invalid number" />}
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
              <label htmlFor="firstContactRelation" className={requiredField}>
                Relation to Applicant
              </label>
              <input
                id="firstContactRelation"
                type="text"
                {...register("firstContactRelation", {
                  required: !draftButton,
                })}
              />
              {errors.firstContactRelation?.type === "required" && <FormErrorMessage msg="Field cannot be empty" />}
            </div>

            {/*---------------------------------------------------*/}
            {/*----------------- Second Contact ------------------*/}
            {/*---------------------------------------------------*/}
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
              <input
                id="secondContactRelation"
                type="text"
                {...register("secondContactRelation")}
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className={btnContainer}>
            <div onClick={() => setDraftButton(false)}>
              <ButtonLight text="Submit" type="submit" dark disabled={isSubmitting} />
            </div>
            <div onClick={() => setDraftButton(true)}>
              <ButtonLight text="Save As Draft" type="submit" dark disabled={isSubmitting} />
            </div>
          </div>
        </form>
      </div>
      {isSubmitSuccessful && <SuccessMessage />}
    </div>
  );
}

export default ImmersionForm;
